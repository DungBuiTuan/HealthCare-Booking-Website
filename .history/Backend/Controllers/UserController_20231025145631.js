import User from '../models/UserSchema.js'

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
        const updateUser = await User.findByIdAndDelete(
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
        const user = await User.findById(
            id
        )

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