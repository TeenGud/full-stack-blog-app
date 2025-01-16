import { useUser } from "@clerk/clerk-react";
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from "react-quill-new";
import React from "react";

const WritePage = () => {
    const {isLoaded, isSignedIn} = useUser();
    if(!isLoaded) {
        return (
            <div className="">Loading...</div>
        )
    }
    if(isLoaded && !isSignedIn) {
        return (
            <div className="">You should log in!</div>
        )
    }
    return (
        <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
            <h1 className="text-xl font-light">Create a new Post</h1>
            <form className="flex flex-col gap-6 flex-1 mb-6">
                <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">Add a cover image</button>
                <input className="text-4xl font-semibold bg-transparent outline-none" type="text" placeholder="My awesome story" />
                <div className="flex items-center gap-4">
                    <label className="text-sm" htmlFor="">Choose a category</label>
                    <select className="p-2 rounded-xl bg-white shadow-md" name="category" id="">
                        <option value="general">General</option>
                        <option value="web-development">Web development</option>
                        <option value="games">Games</option>
                        <option value="music">Music</option>
                        <option value="girls">Girls</option>
                        <option value="chess">Chess</option>
                        <option value="databases">Databases</option>
                    </select>
                </div>
                <textarea className="p-4 rounded-xl bg-white shadow-md" name="description" placeholder="A short description" />
                <ReactQuill theme="snow" className="flex-1 rouned-xl bg-white shadow-md"/>
                <button className="bg-pink-500 text-white font-medium rounded-xl mt-4 p-2 w-36">Send</button>
            </form>
        </div>
    )
}

export default WritePage