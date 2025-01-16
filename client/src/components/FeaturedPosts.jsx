import { Link } from 'react-router-dom'
import Image from './Image'
const FeaturedPosts = () => {
    return (
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <Image src="featured1.jpeg" className="rounded-3xl object-cover w-full h-full" width="895" />
                <div className='flex items-center gap-4'>
                    <h1 className='font-semibold lg:text-lg'>01.</h1>
                    <Link className='text-pink-500 lg:text-lg'>Web Development</Link>
                    <span className='text-gray-500'>2 days ago</span>
                </div>
                <Link to="/test" className='text-xl lg:text-3xl font-semibold lg:font-bold'>Web development is the place where you can earn a lot of money and become famous among woman and have sex with them.</Link>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <div className='lg:h-1/3 flex justify-between gap-4'>
                    <div className='w-1/3 aspect-video'>
                        <Image src="featured2.jpeg" className="rounded-3xl object-cover w-full h-full" width="298" />
                    </div>
                    <div className='w-2/3'>
                        <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                            <h1 className='font-semibold'>02.</h1>
                            <Link className='text-pink-500'>Games</Link>
                            <span className='text-gray-500 text-sm'>3 days ago</span>
                        </div>
                        <Link to="/test" className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>My favorute game is absolutle chess. This is the most fare and competetive game I suppouse</Link>
                    </div>
                </div>
                <div className='lg:h-1/3 flex justify-between gap-4'>
                    <div className='w-1/3 aspect-video'>
                        <Image src="featured2.jpeg" className="rounded-3xl object-cover w-full h-full" width="298" />
                    </div>
                    <div className='w-2/3'>
                        <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                            <h1 className='font-semibold'>02.</h1>
                            <Link className='text-pink-500'>Games</Link>
                            <span className='text-gray-500 text-sm'>3 days ago</span>
                        </div>
                        <Link to="/test" className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>My favorute game is absolutle chess. This is the most fare and competetive game I suppouse</Link>
                    </div>
                </div>
                <div className='lg:h-1/3 flex justify-between gap-4'>
                    <div className='w-1/3 aspect-video'>
                        <Image src="featured2.jpeg" className="rounded-3xl object-cover w-full h-full" width="298" />
                    </div>
                    <div className='w-2/3'>
                        <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                            <h1 className='font-semibold'>02.</h1>
                            <Link className='text-pink-500'>Games</Link>
                            <span className='text-gray-500 text-sm'>3 days ago</span>
                        </div>
                        <Link to="/test" className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>My favorute game is absolutle chess. This is the most fare and competetive game I suppouse</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPosts