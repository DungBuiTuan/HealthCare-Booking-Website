import express from "express";
import { deleteDoctor,getAllDoctor,getSingleDoctor,updateDoctor } from "../Controllers/DoctorController.js";
import {authenticate,restrict} from '../auth/verifyToken.js'
import reviewRouter from './reviews.js'

const router = express.Router();

//nested route
router.use('/:doctorId/reviews',reviewRouter)   

router.get('/:id', getSingleDoctor)
router.get('/', getAllDoctor)
router.delete('/:id',authenticate,restrict(['doctor']), deleteDoctor)
router.put('/:id',authenticate,restrict(['doctor']), updateDoctor)

export default router;