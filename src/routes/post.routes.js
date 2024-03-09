import { Router } from "express";
import { createPosts, deletePosts, updatePosts } from "../controllers/post.controller.js";
import {auth} from "../middlewares/auth.js"

const router = Router();

router.post('/',auth, createPosts )
router.delete('/:id',auth, deletePosts)
router.put('/:id',auth, updatePosts)

export default router;