import React, { useState } from "react";
import logo from "../imgs/logo.png";
import { Link, Outlet } from "react-router-dom";

const NavbarComponent = () => {
    const [visible, setVisible] = useState(false);
    // console.log(visible)

    return (
        <>
            <nav className="navbar">
                <Link style={{ width: "35px", flex: "none" }}>
                    <img src={logo} className="w-full" />
                </Link>
                <div className={"flex flex-row items-center md:show absolute bg-white w-full  left-0 top-full mt-0 py-4 px-[5vw] md:block md:relative md:p-0 md:inset-0 md:w-auto md:items-center " + (visible ? "show" : "hide")}>
                    <input
                        placeholder="search..."
                        type="text"
                        className={"w-full bg-grey p-4 pl-6 rounded-full pr-[12%] placeholder:text-dark-grey md:w-auto md:pr-6 md:pl-12"}
                    />
                    <i className="fi fi-rr-search absolute right-[8%] lg:top-[25%] md:top-[20%]" />
                </div>
                <div className="flex items-start gap-3 ml-auto">
                    <button className="bg-grey w-11 h-11 rounded-full flex justify-center items-center  md:hide" onClick={() => setVisible(!visible)}>
                        <i className="fi fi-rr-search text-l" />
                    </button>
                    <Link to="/editor" className="hidden md:flex gap-2 link">
                        <i className="fi fi-rr-file-edit"></i>
                        <p>Write</p>
                    </Link>
                    <Link className="btn-dark py-2" to="/signin">
                        Sign In</Link>
                    <Link className="btn-light py-2 hidden md:block" to="/signup">Sign Up</Link>
                </div>

            </nav>
            <Outlet />
        </>

    );
};

export default NavbarComponent;
