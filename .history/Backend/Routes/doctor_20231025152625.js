import express from "express";
import { deleteDoctor,getAllDoctor,getSingleDoctor,updateDoctor } from "../Controllers/DoctorController.js";

const router = express.Router();

router.get('/:id', getSingleDoctor)
router.get('/', getAllDoctor)
router.delete('/:id', deleteDoctor)
router.put('/:id', updateDoctor)

export default router;