import { express } from "express";
import { signup,login } from "../Controllers/AuthController";

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)