import { Router } from "express";
import { deleteUser, getUserProfile, getUsers, updateProfile, updateRole } from "../controllers/user.controller.js";
import {auth} from "../middlewares/auth.js"
import {superAdmin} from "../middlewares/superAdmin.js"

const router = Router();

router.get('/',auth, getUsers)
router.get('/profile',auth, getUserProfile)
router.put('/profile',auth, updateProfile)
router.delete('/:id',auth, superAdmin, deleteUser)
router.put ('/:id/role', auth, superAdmin, updateRole)

export default router;