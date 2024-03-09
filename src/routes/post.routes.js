import { Router } from "express";
import { createPosts } from "../controllers/post.controller.js";

const router = Router();

router.post('/',createPosts )

export default router;