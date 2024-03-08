import { Router } from "express";
import { getUserProfile, getUsers, updateProfile } from "../controllers/user.controller.js";
import {auth} from "../middlewares/auth.js"

const router = Router();

router.get('/', getUsers)
router.get('/profile',auth, getUserProfile)
router.put('/profile',auth, updateProfile)

export default router;