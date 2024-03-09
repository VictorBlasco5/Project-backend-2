import { Router } from "express";
import { createPosts } from "../controllers/post.controller.js";
import {auth} from "../middlewares/auth.js"

const router = Router();

router.post('/',auth, createPosts )

export default router;