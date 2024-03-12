import { Router } from "express";
import { deleteUser, getUserProfile, getUsers, updateProfile } from "../controllers/user.controller.js";
import {auth} from "../middlewares/auth.js"
import {superAdmin} from "../middlewares/superAdmin.js"

const router = Router();

router.get('/', getUsers)
router.get('/profile',auth, getUserProfile)
router.put('/profile',auth, updateProfile)
router.delete('/:id',auth,superAdmin, deleteUser)

export default router;