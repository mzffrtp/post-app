const express = require("express");
const { getPosts, creatPost, updatePost, deletePost } = require("../controllers/postController");

const postRouter = express.Router()

postRouter.get("/getPosts", getPosts)
postRouter.post("/createPost", creatPost)
postRouter.patch("/updatePost/:id", updatePost)
postRouter.delete("/deletePost/:id", deletePost)


module.exports = postRouter