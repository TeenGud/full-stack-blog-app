import { Link } from "react-router-dom"
import Search from "./Search"

const SideMenu = () => {
    return (
        <div className="px-4 h-max sticky top-8">
            <h4 className="mb-4 text-sm font-medium">Search</h4>
            <Search />
            <h4 className="mt-8 text-sm font-medium">Filters</h4>
            <div className="flex flex-col gap-2 text-sm">
                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="sort" value="newest" className="appearance-none w-4 h-4 border-[1.5px] border-pink-400 cursor-pointer rounded-sm bg-white checked:bg-pink-400"/>
                    Newest
                </label>
                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="sort" value="mostpopular" className="appearance-none w-4 h-4 border-[1.5px] border-pink-400 cursor-pointer rounded-sm bg-white checked:bg-pink-400"/>
                    Most Popular
                </label>
                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="sort" value="trending" className="appearance-none w-4 h-4 border-[1.5px] border-pink-400 cursor-pointer rounded-sm bg-white checked:bg-pink-400"/>
                    Trending
                </label>
                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="sort" value="oldest" className="appearance-none w-4 h-4 border-[1.5px] border-pink-400 cursor-pointer rounded-sm bg-white checked:bg-pink-400"/>
                    Oldest
                </label>
            </div>
            <h4 className="mt-8 text-sm font-medium">Categories</h4>
            <div className="flex flex-col gap-2 text-sm">
                <Link className="underline" to="/posts">All</Link>
                <Link className="underline" to="/posts?cat=web-development">Web development</Link>
                <Link className="underline" to="/posts?cat=games">Games</Link>
                <Link className="underline" to="/posts?cat=music">Music</Link>
                <Link className="underline" to="/posts?cat=girls">Girls</Link>
                <Link className="underline" to="/posts?cat=chess">Chess</Link>
                <Link className="underline" to="/posts?cat=databases">Databases</Link>
            </div>
        </div>
    )
}

export default SideMenu