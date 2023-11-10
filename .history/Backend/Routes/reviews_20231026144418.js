import express from 'express'
import {createReview, getAllReview} from '../Controllers/ReviewController.js'
import {authentication, restrict} from '../auth/verifyToken.js'

const router = express.Router()
router.post('/', authentication ,restrict('user'), createReview)
router.get('/:id', authentication ,restrict('admin'), getAllReview)