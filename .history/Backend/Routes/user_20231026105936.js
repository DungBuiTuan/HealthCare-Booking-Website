import express from "express";
import { updateUser,deleteUser,getAllUser,getSingleUser } from "../Controllers/UserController.js";
import {authentication,restrict} from '../auth/verifyToken.js'

const router = express.Router();

router.get('/:id',authentication,restrict(['admin']), getSingleUser)
router.get('/', getAllUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

export default router;