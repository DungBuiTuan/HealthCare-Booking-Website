import express from 'express'
import {createReview, getAllReview} from '../Controllers/ReviewController.js'
import {authenticate, restrict} from '../auth/verifyToken.js'

const router = express.Router({mergeParams: true})

router
.route('/')
.get(getAllReview)
.post(authenticate, restrict(['patient']), createReview);

export default router;