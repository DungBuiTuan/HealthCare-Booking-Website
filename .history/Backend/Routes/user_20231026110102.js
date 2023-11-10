import express from "express";
import { updateUser,deleteUser,getAllUser,getSingleUser } from "../Controllers/UserController.js";
import {authentication,restrict} from '../auth/verifyToken.js'

const router = express.Router();

router.get('/:id',authentication,restrict(['patient']), getSingleUser)
router.get('/',authentication,restrict(['admin']), getAllUser)
router.delete('/:id',authentication,restrict(['patient']), deleteUser)
router.put('/:id',authentication,restrict(['patient']), updateUser)

export default router;