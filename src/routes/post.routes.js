import { Router } from "express";
import { createPosts, deletePosts } from "../controllers/post.controller.js";
import {auth} from "../middlewares/auth.js"

const router = Router();

router.post('/',auth, createPosts )
router.delete('/:id',auth, deletePosts)


export default router;