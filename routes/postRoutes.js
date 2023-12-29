import express from 'express'
import { createPost, deletePost, getPost } from '../controllers/postController.js'
import protectRoute from '../middlewares/protectRoute.js'
const router = express.Router()

// endpoint to create a post
router.post('/create', protectRoute, createPost)
// endpoint to fetch a post using id
router.get("/:id",getPost)
// endpoint to delete a post using id
router.delete("/:id",protectRoute,deletePost)
export default router