import { Link } from "react-router-dom"
import Image from "../components/Image"
import PostMenuActions from "../components/PostMenuActions"
import Search from "../components/Search"
import Comments from "../components/Comments"

const SinglePostPage = () => {
    return (
        <div className="flex flex-col gap-8">
            {/* detail */}
            <div className="flex gap-8">
                <div className="lg:w-3/5 flex flex-col gap-8">
                    <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>Written by</span>
                        <Link className="text-violet-500">Simon Gorunovich</Link>
                        <span>on</span>
                        <Link className="text-violet-500">Chess</Link>
                        <span>2 days ago</span>
                    </div>
                    <p className="text-gray-500 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusamus nam vel. Dicta harum maxime laborum vel pariatur, provident velit reprehenderit aperiam obcaecati</p>
                </div>
                <div className="hidden lg:block w-2/5">
                    <Image src="postImg.jpeg" width="600" className="rounded-2xl" />
                </div>
            </div>
            {/* content */}
            <div className="flex flex-col md:flex-row gap-12">
                {/* text */}
                <div className="lg:text-lg flex flex-col gap-6 text-justify">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum ipsa perferendis quasi impedit commodi tempora saepe assumenda veritatis sint itaque optio tenetur obcaecati soluta, at quia fugiat autem sequi.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero provident doloribus et sapiente facilis pariatur id eligendi dolor ipsa autem voluptate qui aperiam placeat, animi minima voluptas officiis doloremque numquam!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum ipsa perferendis quasi impedit commodi tempora saepe assumenda veritatis sint itaque optio tenetur obcaecati soluta, at quia fugiat autem sequi.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero provident doloribus et sapiente facilis pariatur id eligendi dolor ipsa autem voluptate qui aperiam placeat, animi minima voluptas officiis doloremque numquam!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum ipsa perferendis quasi impedit commodi tempora saepe assumenda veritatis sint itaque optio tenetur obcaecati soluta, at quia fugiat autem sequi.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero provident doloribus et sapiente facilis pariatur id eligendi dolor ipsa autem voluptate qui aperiam placeat, animi minima voluptas officiis doloremque numquam!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum ipsa perferendis quasi impedit commodi tempora saepe assumenda veritatis sint itaque optio tenetur obcaecati soluta, at quia fugiat autem sequi.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero provident doloribus et sapiente facilis pariatur id eligendi dolor ipsa autem voluptate qui aperiam placeat, animi minima voluptas officiis doloremque numquam!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum ipsa perferendis quasi impedit commodi tempora saepe assumenda veritatis sint itaque optio tenetur obcaecati soluta, at quia fugiat autem sequi.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero provident doloribus et sapiente facilis pariatur id eligendi dolor ipsa autem voluptate qui aperiam placeat, animi minima voluptas officiis doloremque numquam!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum ipsa perferendis quasi impedit commodi tempora saepe assumenda veritatis sint itaque optio tenetur obcaecati soluta, at quia fugiat autem sequi.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero provident doloribus et sapiente facilis pariatur id eligendi dolor ipsa autem voluptate qui aperiam placeat, animi minima voluptas officiis doloremque numquam!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum ipsa perferendis quasi impedit commodi tempora saepe assumenda veritatis sint itaque optio tenetur obcaecati soluta, at quia fugiat autem sequi.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero provident doloribus et sapiente facilis pariatur id eligendi dolor ipsa autem voluptate qui aperiam placeat, animi minima voluptas officiis doloremque numquam!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum ipsa perferendis quasi impedit commodi tempora saepe assumenda veritatis sint itaque optio tenetur obcaecati soluta, at quia fugiat autem sequi.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero provident doloribus et sapiente facilis pariatur id eligendi dolor ipsa autem voluptate qui aperiam placeat, animi minima voluptas officiis doloremque numquam!
                    </p>
                </div>
                {/* menu */}
                <div className="px-4 h-max sticky top-8">
                    <h4 className="mb-4 text-sm font-medium">Author</h4>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-8">
                            <Image src="userImg.jpeg" className="w-12 h-12 rounded-full object-cover" width="48" height="48" />
                            <Link className="text-purple-400">Simon Gorunovich</Link>
                        </div>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="flex gap-2">
                            <Link>
                                <Image src="facebook.svg" />
                            </Link>
                            <Link>
                                <Image src="instagram.svg" />
                            </Link>
                        </div>
                    </div>
                    <PostMenuActions />
                    <h4 className="mt-8 mb-4 text-sm font-medium">Categories</h4>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link className="underline">All</Link>
                        <Link to="/" className="underline">Web Development</Link>
                        <Link to="/" className="underline">Games</Link>
                        <Link to="/" className="underline">Music</Link>
                        <Link to="/" className="underline">Chess</Link>
                        <Link to="/" className="underline">Girls</Link>
                    </div>
                    <h4 className="mt-8 mb-4 text-sm font-medium">Search</h4>
                    <Search />
                </div>
            </div>
            <Comments />
        </div>
    )
}

export default SinglePostPage