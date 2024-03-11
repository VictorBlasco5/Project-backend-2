import { Router } from "express";
import { createPosts, deletePosts, getMyPosts, getPostById, getPosts, getPostsOfUser, updatePosts } from "../controllers/post.controller.js";
import {auth} from "../middlewares/auth.js"

const router = Router();

router.post('/',auth, createPosts )
router.delete('/:id',auth, deletePosts)
router.put('/:id',auth, updatePosts)
router.get('/own',auth, getMyPosts)
router.get('/users/:id', getPostsOfUser)
router.get('/',auth, getPosts)
router.get('/:id',auth, getPostById)


export default router;