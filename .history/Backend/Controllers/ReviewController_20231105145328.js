import Review from '../models/ReviewSchema.js'
import Doctor from '../models/DoctorSchema.js'

//get all review
export const getAllReview = async(req,res)=>{

    try {
        const reviews= await Review.find({})

        res.status(200).json(
            {
                success: true,
                message:"Doctor found",
                data:reviews
            }
        )
    } catch (error) {
        res.status(404).json({success:false, message:'Doctor not found !!'})
        console.error(error);
    }
}

//create review
export const createReview = async(req,res)=>{
    if (!req.body.doctor) req.body.doctor = req.params.doctorId 
    if (!req.body.user) req.body.user = req.userId
     
    const newReview = new Review(req.body)

    try {
        const saveReview = await newReview.save()
        //update doctor rating
        await Doctor.findOneAndUpdate(req.body.doctor, {
            $push:{ reviews: saveReview._id },
        });
            res.status(200).json({ success:true, message:"review created successfully!", data:saveReview });
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message
            });
    }
}