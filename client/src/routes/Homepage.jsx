import { Link } from "react-router-dom"
import MainCategories from "../components/MainCategories"
import FeaturedPosts from "../components/FeaturedPosts"
import PostList from "../components/PostList"

const HomePage = () => {
    return (
        <div className="mt-4 flex flex-col gap-4">
            <div className="flex gap-4">
                <Link to="/">Home</Link>
                <span></span>
                <span className="text-blue-800">Blogs and Articles</span>
            </div>
            <div className="flex items-center justify-between">
                <div className="">
                    <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
                        Welcome to Simon Dev blog page!
                    </h1>
                    <p className="mt-8 text-md md:text-xl lg:text-2xl">
                        Here you can share your thoughts with everyone! Feel free to write whatever you want! Even rasist things are completly okey! This is my website, this is my world and this are my rules!
                    </p>
                </div>
                <Link to="write" className="hidden md:block relative">
                    <svg className="text-lg tracking-widest animate-spin animatedButton" viewBox="0 0 200 200" width="200" height="200">
                        <path fill="none" id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                        <text>
                            <textPath href="#circlePath" startOffset="0%">Write your story</textPath>
                            <textPath href="#circlePath" startOffset="50%">Share your ideas</textPath>
                        </text>
                    </svg>
                    <button className="bg-violet-500 rounded-full flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20">
                        <svg fill="white" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
                            <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" />
                        </svg>
                    </button>
                </Link>
            </div>
            <MainCategories />
            <FeaturedPosts />
            <div>
                <h1 className="my-8 text-2xl text-gray-600">Resent Posts</h1>
                <PostList />
            </div>
        </div>
    )
}

export default HomePage