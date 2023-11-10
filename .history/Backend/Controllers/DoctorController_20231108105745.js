import Doctor from '../models/DoctorSchema.js'
import Booking from '../models/BookingSchema.js'

//update
export const updateDoctor = async(req,res)=>{
    const id = req.params.id

    try {
        const updateDoctor = await Doctor.findByIdAndUpdate(
            id,
            {$set: req.body},
            {new: true}
        )

        res.status(200).json(
            {
                success: true,
                message:"Successfully updated doctor",
                data:updateDoctor
            }
        )
    } catch (error) {
        res.status(500).json({success:false, message:'Update Fail!!'})
        console.error(error);
    }
}

//Delete
export const deleteDoctor = async(req,res)=>{
    const id = req.params.id

    try {
        const deleteDoctor = await User.findByIdAndDelete(
            id
        )

        res.status(200).json(
            {
                success: true,
                message:"Successfully deleted doctor",
            }
        )
    } catch (error) {
        res.status(500).json({success:false, message:'Delete Fail!!'})
        console.error(error);
    }
}

//get single user
export const getSingleDoctor = async(req,res)=>{
    const id = req.params.id

    try {
        const doctor = await Doctor.findById(id).populate('reviews').select('-password')

        res.status(200).json(
            {
                success: true,
                message:"Doctor found",
                data:doctor
            }
        )
    } catch (error) {
        res.status(404).json({success:false, message:'Doctor not found !!'})
        console.error(error);
    }
}

//get all user
export const getAllDoctor = async(req,res)=>{

    try {
        const {query} = req.query
        let doctors
        
        if(query){
            doctors = await Doctor.find({
                isApprove:'approved',
                $or:[
                    {name:{$regex: query, $options: 'i'}},
                    {specialization:{$regex: query, $options: 'i'}},
                ]}).select('-password')
        }else{
            doctors = await Doctor.find({isApproved: 'approved'}).select('-password')
        }

        res.status(200).json(
            {
                success: true,
                message:"Doctor found",
                data:doctors
            }
        )
    } catch (error) {
        res.status(404).json({success:false, message:'Doctor not found !!'})
        console.error(error);
    }
}

//get doctor profile
export const getProfileDoctor = async(req,res)=>{
    const doctorId=req.userId;

    try{
        const doctor =await Doctor.findById(doctorId)
        if(!doctor){
            return res.status(404).json({
                success: false,
                message: "No such doctor exists"
            })
        }
        const {password, ...rest} = doctor._doc
        const appointments = await Booking.find({doctor:doctorId})

        res.status(200).json({
            success:true,
            message:"Successfully fetched the user details",
            data:{...rest}
        })
    }catch(error){
        res.status(500).json({
            success:false,
            errorMessage:"Error in retrieving the user information"
        })
    }
}