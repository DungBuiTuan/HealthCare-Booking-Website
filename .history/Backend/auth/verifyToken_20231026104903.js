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
        const token = authToken.split(' ')[1]

        //verify token
        const decoded = await Jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        let userId = decoded._id;
        let role = decoded.role;
        next();
    }catch(error){
        res.send("Error in Authentication middleware");
    }
}