import express from 'express'
import {
    deleteUser,
    getAllUser,
    getSingleUser,
    updateUser
} from '../Controllers/UserController.js'

import {authentication} from '../auth/verifyToken.js'

const router = express.Router();

router.get('/:id', authentication, getSingleUser)
router.get('/', getAllDoctor)
router.delete('/:id', deleteDoctor)
router.put('/:id', updateDoctor)

export default router;