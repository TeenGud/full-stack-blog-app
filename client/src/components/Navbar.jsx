import { useEffect, useState } from "react"
import { IKImage } from "imagekitio-react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const {getToken} = useAuth();
    useEffect(() => {
        getToken().then((token) => console.log(token))
    }, [])
    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
                <Image alt="Simon dev" width={32} height={32} src="/logo.png" />
                <span>simon dev</span>
            </Link>
            <div className="md:hidden">
                <div className="cursor-pointer text-4xl" onClick={() => setOpen((prev) => !prev)}>
                    {open ? "X" : "≡"}
                </div>
                <div className={`w-full h-screen flex flex-col items-center justify-center absolute top-18 bg-[#e6e6ff] transition-all ease-in-out overflow-x-hidden gap-8 font-medium text-large ${open ? "right-0" : "right-[-100%]"}`}>
                    <Link to="/">Home</Link>
                    <Link to="/">Trending</Link>
                    <Link to="/">Most Popular</Link>
                    <Link to="/">About</Link>
                    <Link to="/">
                        <button className="py-2 px-4 rounded-3xl bg-blue-500 text-white">Log in</button>
                    </Link>
                </div>
            </div>
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <Link to="/">Home</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Most Popular</Link>
                <Link to="/">About</Link>
                <SignedOut>
                    <Link to="/login">
                        <button className="py-2 px-4 rounded-3xl bg-blue-500 text-white">Log in</button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    )
}

export default Navbar