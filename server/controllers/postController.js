const Post = require("../models/postModel")
exports.getPosts = async (req, res) => {
    try {
        const getPosts = await Post.find();
        res.status(200).json(getPosts)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

exports.creatPost = async (req, res) => {
    try {
        const newPost = await Post.create(req.body)
        res.status(200).json(newPost)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

exports.updatePost = async (req, res) => {
    try {
        const { id } = req.params
        const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(updatedPost)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
exports.deletePost = async (req, res) => {
    try {
        const { id } = req.params
        await Post.findByIdAndDelete(id);
        res.status(204).json({ msg: "Post deleted!" })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}