import React, { useState } from "react";
import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
    const [visible, setVisible] = useState(true);
    console.log(visible)

    return (
        <nav className="navbar">
            <Link style={{ width: "35px", flex: "none" }}>
                <img src={logo} className="w-full" />
            </Link>
            <div className={"flex flex-row items-center absolute bg-white w-full left-0 top-full mt-0 py-4 px-[5vw] md:block md:relative md:p-0 md:inset-0 md:w-auto md:items-center " + (visible ? "show" : "hide")}>
                <input
                    placeholder="search..."
                    className={"w-full bg-grey p-4 rounded-full pr-[12%] placeholder:text-dark-grey md:w-auto md:pr-6 md:pl-12"}
                />
                <i className="fi fi-rr-search absolute right-[8%] lg:top-[25%] md:top-[20%]" />
            </div>
            <button className="bg-grey w-11 h-11 rounded-full flex justify-center items-center ml-auto md:hide" onClick={() => setVisible(!visible)}>
                <i className="fi fi-rr-search text-l" />
            </button>
        </nav>
    );
};

export default NavbarComponent;
