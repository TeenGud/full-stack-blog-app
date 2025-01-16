import postModel from "../models/post.model.js"
import userModel from "../models/user.model.js"

export const getPosts = async (req, res) => {
    const posts = await postModel.find()
    res.status(200).json(posts)
}

export const getPost = async (req, res) => {
    const post = await postModel.findOne({slug:req.params.slug})
    res.status(200).json(post)
}

export const createPost = async (req, res) => {
    console.log(req.auth)
    const clerkUserId = req.auth.userId;
    if (!clerkUserId) {
        return res.status(401).json("Not authenticated")
    }
    const user = await userModel.findOne({clerkUserId})
    if(!user) {
        return res.status(404).json("User not found")
    }
    const newPost = new postModel({user: user._id, ...req.body})
    const post  = await newPost.save()
    res.status(200).json(post)
}

export const deletePost = async (req, res) => {
    const clerkUserId = req.auth.userId;
    if (!clerkUserId) {
        return res.status(401).json("Not authenticated")
    }
    const user = await userModel.findOne({clerkUserId})
    if(!user) {
        return res.status(404).json("User not found")
    }
    const deletedPost  = await postModel.findByIdAndDelete({_id: req.params.id, user: user._id})
    if(!deletePost) {
        return res.status(403).json("You can delete only your posts")
    }
    res.status(200).json("Post has been deleted")
}