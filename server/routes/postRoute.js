const express = require("express");
const { getPosts, creatPost, updatePost, deletePost } = require("../controllers/postController");

const postRouter = express.Router()

postRouter.get("/getPosts", getPosts)
postRouter.post("/createPost", creatPost)
postRouter.patch("/updatePost", updatePost)
postRouter.delete("/deletePost", deletePost)


module.exports = postRouter