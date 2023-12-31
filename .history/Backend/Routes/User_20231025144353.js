import express from "express";
import { updateUser,deleteUser,getAllUser,getSingleUser } from "../Controllers/UserController";

const router = express.Router();

router.get('/:id', getSingleUser)
router.get('/', getAllUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

export default router;