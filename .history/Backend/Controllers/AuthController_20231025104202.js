import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

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
    }
}

export const login = async(req,res) => {
    try {
        
    } catch (error) {
        
    }
}