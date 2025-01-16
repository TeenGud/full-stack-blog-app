import express from 'express';
import { clerkMiddleware, requireAuth } from '@clerk/express'
import userRoutes from './routes/user.route.js'
import postRoutes from './routes/post.route.js'
import commentRoutes from './routes/comment.route.js'
import webHookRoutes from './routes/webhook.route.js'
import { connectDB } from './lib/connectDB.js';


const app = express()
app.use(clerkMiddleware())
app.use("/webhooks", webHookRoutes)
app.use(express.json())

// app.get("/auth-state", (req, res) => {
//     const authState = req.auth;
//     res.json(authState)
// })

// app.get("/protect", (req, res) => {
//     const {userId} = req.auth;
//     if(!userId) {
//         return res.status(401).json("Not authenticated")
//     }
//     res.json(200).json("content")
// })

app.get("/protect", requireAuth() ,(req, res) => {
    res.json(200).json("content")
})

app.use("/users", userRoutes)
app.use("/posts", postRoutes)
app.use("/comments", commentRoutes)

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message || "Something went wrong!",
        status: error.status,
        stack: error.stack
    })
})

app.listen(3000, () => {
    connectDB()
    console.log("Server is running!")
})