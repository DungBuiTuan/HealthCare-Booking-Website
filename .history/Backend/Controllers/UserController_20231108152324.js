import User from '../models/UserSchema.js'
import Booking from '../models/BookingSchema.js'
import Doctor from '../models/DoctorSchema.js'

//update
export const updateUser = async(req,res)=>{
    const id = req.params.id

    try {
        const updateUser = await User.findByIdAndUpdate(
            id,
            {$set: req.body},
            {new: true}
        )

        res.status(200).json(
            {
                success: true,
                message:"Successfully updated user",
                data:updateUser
            }
        )
    } catch (error) {
        res.status(500).json({success:false, message:'Update Fail!!'})
        console.error(error);
    }
}

//Delete
export const deleteUser = async(req,res)=>{
    const id = req.params.id

    try {
        const deleteUser = await User.findByIdAndDelete(
            id
        )

        res.status(200).json(
            {
                success: true,
                message:"Successfully deleted user",
            }
        )
    } catch (error) {
        res.status(500).json({success:false, message:'Delete Fail!!'})
        console.error(error);
    }
}

//get single user
export const getSingleUser = async(req,res)=>{
    const id = req.params.id

    try {
        const user = await User.findById(id).select('-password')

        res.status(200).json(
            {
                success: true,
                message:"User found",
                data:user
            }
        )
    } catch (error) {
        res.status(404).json({success:false, message:'User not found !!'})
        console.error(error);
    }
}

//get all user
export const getAllUser = async(req,res)=>{

    try {
        const user = await User.find({}).select('-password')

        res.status(200).json(
            {
                success: true,
                message:"User found",
                data:user
            }
        )
    } catch (error) {
        res.status(404).json({success:false, message:'User not found !!'})
        console.error(error);
    }
}

//get user profile
// export const getProfile = async(req,res)=>{
//     const userId=req.userId;

//     try{
//         const user =await User.findById(userId);
//         console.log(user)
//         if(!user){
//             return res.status(404).json({
//                 success: false,
//                 message: "No such user exists"
//             });
//         }
//         const { password, ...rest } = user._doc;

//         res.status(200).json({
//             success:true,
//             message:"Successfully fetched the user details",
//             data:{ ...rest }
//         });
//     }catch(error){
//         res.status(500).json({
//             success:false,
//             errorMessage:"Error in retrieving the user information"
//         })
//     }
// }

export const getUserProfile = async (req, res) =>{
    const userId = req._id
    try {
      let user = await User.findOne({_id : userId});
      
      if (!user) {
        return res.status(404).json({
            success: false,
          message: 'No such user'
        })
      }

      res.status(200).json({
        success: true,
        message: 'No such user',
        data: user
      })
    }catch(error){

    }
}

//get my appointments
export const getMyAppointment = async(req,res)=>{
    try {
        //step 1:Retrieve appointment from booking for specific user
        const bookings = await Booking.find({user:req.userId})
        //step 2:Extract doctor id from appointment
        const doctorIds = bookings.map(el => el.doctor.id)
        //step 3:Retrieve doctors using doctorIds
        const doctors = await Doctor.find({_id:{$in:doctorIds}}).select(
            '-password'
        )
        res.status(200).json({
            success: true,
            message:'Appontments is getting',
            data:doctors
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            errorMessage: 'Could not retrieve your apponitments'
        })
    }
}