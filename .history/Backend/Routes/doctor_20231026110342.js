import express from "express";
import { deleteDoctor,getAllDoctor,getSingleDoctor,updateDoctor } from "../Controllers/DoctorController.js";
import {authentication,restrict} from '../auth/verifyToken.js'

const router = express.Router();

router.get('/:id', getSingleDoctor)
router.get('/', getAllDoctor)
router.delete('/:id',authentication,restrict(['doctor']), deleteDoctor)
router.put('/:id',authentication,restrict(['doctor']), updateDoctor)

export default router;