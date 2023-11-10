import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const generateToken = user =>{
    return jwt.sign({id:user._id, role:user.role},process.env.JWT_SECRET_KEY,{
        expiresIn:'15d',
    })
}

export const signup = async(req,res) => {
    const {email, password, name, role, photo, gender} = req.body
    try {
        let user = null
        if (role === 'patient'){
            user = await User.findOne({email})
        }else if(role === 'doctor'){
            user = await Doctor.findOne({email})
        }

        if(user){
            return res.status(400).json({message:'User already exist'})
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)
        if (role==='patient'){
            user = new User({name, email, password: hashedPassword, role, photo, gender});
        }

        if (role==='doctor'){
            user = new Doctor({name, email, password: hashedPassword, role, photo, gender});
        }

       await user.save();

       res.status(200).json({success:true, message:'Created user successfully'})
        
    } catch (error) {
        res.status(500).json({success:false, message:'Internal server error'})
        console.error(error);
    }
}

export const login = async(req,res) => {
    const {email,password} = req.body
    try {
        let user = null
        const patient =await User.findOne({email})
        const doctor =await User.findOne({email})
        if (patient){
            user = patient
        }if(doctor){
            user = doctor
        }
        //check user exist
        if(!user){
            return res.status(404).json({message:'User not found'})
        }

        //compare password
        const isMatch=await bcrypt.compare(password,user.password)
        if (!isMatch){
            return res.status(400).json({status:false, message:'Invalid credentials'})
        }

        //get token
        const token = generateToken(user)

        const {password, role, appointment, ...rest } = user._doc

        res.status(200).json(
            {
            status : true,
            message: 'Login Successfully',
            token,
            data:{...rest},
            role
            }
        )
    } catch (error) {
        res.status(500).json({success:false, message:'Login Fail!!'})
        console.error(error);
    }
}