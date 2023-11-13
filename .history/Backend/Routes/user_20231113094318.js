import express from "express";
import { updateUser,deleteUser,getAllUser,getSingleUser,getMyAppointment,getUserProfile } from "../Controllers/UserController.js";
import {authenticate,restrict} from '../auth/verifyToken.js'

const router = express.Router();

router.get('/:id',authenticate,restrict(['patient']), getSingleUser)
router.get('/', getAllUser)
router.delete('/:id',authenticate,restrict(['patient']), deleteUser)
router.put('/:id',authenticate,restrict(['patient']), updateUser)
router.get('/profile/me',authenticate,restrict(['patient']), getUserProfile)
router.get('/appointments/my-appointments',authenticate,restrict(['patient']), getMyAppointment)

export default router;