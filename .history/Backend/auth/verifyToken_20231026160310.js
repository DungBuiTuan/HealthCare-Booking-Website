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
        next();//must be call the next function
    }catch(error){
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({message: "Token is expired."})
        }
        return res.status(401).json({success: false, message: "Invalid token."})
    }
};

export const restrict = roles => async(req, res, next) => {
    const userId = req.userId

    let user;

    const patient = await User.findById(userId)
    const doctor = await Doctor.findById(userId)

    if (patient) {
        user = patient;
    }
    if (doctor) {
        user = doctor;
    }

    if (!roles.includes(req.user.role)) {
        return res
        .status(401)
        .json({success: false, message: "You are not authorize"})
    }

    next();
}