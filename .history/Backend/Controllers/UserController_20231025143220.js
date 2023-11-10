import User from '../models/UserSchema.js'

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
        
    }
}