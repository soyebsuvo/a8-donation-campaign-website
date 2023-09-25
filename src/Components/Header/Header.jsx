import { NavLink } from "react-router-dom"
import "./header.css"
export default function Header() {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/donations">Donations</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
    </>
    return (
        <nav>
            <div className="py-2 shadow-lg">
                <div className="lg:flex justify-between">
                    <div className="">
                        <div className="flex justify-between items-center">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {links}
                            </ul>
                        </div>
                        <div>
                        <a className="btn btn-ghost normal-case text-xl justify-start">
                            <img className="w-40" src="../../../public/Resources/Logo.png" alt="" />
                        </a>
                        </div>
                        </div>
                    </div>

                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    )
}
