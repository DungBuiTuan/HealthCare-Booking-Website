import Jwt from "jsonwebtoken"
import Doctor from '../models/DoctorSchema.js'
import User from '../models/UserSchema.js'

export const authentication = async (req, res, next) => {
    //get token from header
    const authToken = req.headers.authorization;

    //check token exist
    if (!authToken || !authToken.startsWith('Bearer')){
        return res.status(401).json({success: false, message: "Access denied! No Token provided."})
    }

    try{
        console.log(authToken);
        next();
    }catch(error){
        res.send("Error in Authentication middleware");
    }
}