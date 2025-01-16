import { Link } from 'react-router-dom';
import Image from './Image';
const PostListItem = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-8">
            {/* image */}
            <div className="md:hidden xl:block xl:w-1/3">
                <Image src="postImg.jpeg" className="rounded-2xl object-cover" width="735"/>
            </div>
            {/* details */}
            <div className='flex flex-col gap-4 xl:w-2/3'>
                <Link to="/test" className="text-4xl font-semibold">
                    One of many beautiful posts on my webpage. Enjoy bro
                </Link>
                <div className='flex items-center gap-2 text-gray-400 text-sm'>
                    <span>Written by</span>
                    <Link className='text-pink-300'>Simon Gorunovich</Link>
                    <span>on</span>
                    <Link className='text-pink-300'>Web Development</Link>
                    <span>1 day ago</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatibus doloribus nesciunt? Nobis amet optio quas officia quisquam soluta doloribus, enim magni dignissimos rem temporibus, doloremque, placeat ad corporis atque.
                </p>
                <Link to="/test" className='underline text-pink-600 text-sm'>Read More</Link>
            </div>
        </div>
    )
}

export default PostListItem