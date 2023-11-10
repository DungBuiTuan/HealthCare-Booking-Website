import express from 'express'
import {createReview, getAllReview} from '../Controllers/ReviewController.js'
import {authentication, restrict} from '../auth/verifyToken.js'

const router = express.Router({mergeParams: true})

router.route('/').get(getAllReview).post(authentication, restrict(['patient']), createReview)

export default router;