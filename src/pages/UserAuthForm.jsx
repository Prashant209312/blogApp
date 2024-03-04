import React from "react";
import { Inputbox } from "../components/Inputbox";
import googleIcon from "../imgs/google.png";
import { Link } from "react-router-dom";
import AnimationWraper from "../common/AnimationWraper";
const UserAuthForm = ({ type }) => {
    return (
        <AnimationWraper keyValue={type}>
            <section className="h-cover flex justify-center items-center ">
                <form className="w-[80%] max-w-[400px] ">
                    <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
                        {type == "sign-in" ? "Wellcome back" : "Join Us Today"}
                    </h1>
                    {type == "sign-in" ? (
                        <>
                            <Inputbox
                                name="email"
                                type="email"
                                placeholder="Email"
                                icon="fi-rr-envelope"
                            />
                            <Inputbox
                                name="password"
                                type="password"
                                placeholder="Password"
                                icon="fi-rr-key"
                            />

                        </>
                    ) : (
                        <>
                            <Inputbox
                                name="fullname"
                                type="text"
                                placeholder="Full Name"
                                icon="fi-rr-user"
                            />
                            <Inputbox
                                name="email"
                                type="email"
                                placeholder="Email"
                                icon="fi-rr-envelope"
                            />
                            <Inputbox
                                name="password"
                                type="password"
                                placeholder="Password"
                                icon="fi-rr-key"
                            />

                        </>
                    )}
                    <button className="btn-dark center mt-14">
                        {type.replace("-", " ")}
                    </button>
                    <div className="flex w-full relative items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
                        <hr className="border-black w-1/2" />
                        <p>or</p>
                        <hr className="w-1/2 border-black" />
                    </div>
                    <button className="btn-dark center flex items-center justify-center gap-4 w-[90%] center">
                        <img src={googleIcon} className="w-5" />
                        continue with google
                    </button>
                    {type == "sign-in" ? (
                        <p className="mt-6 text-dark-grey text-xl text-center">
                            Don't have an account ? {" "}
                            <Link to="/signup" className="underline text-black">
                                Join us today
                            </Link>
                        </p>
                    ) : (
                        <p className="mt-6 text-dark-grey text-xl text-center">
                            Alredy a meber ?{" "}
                            <Link to="/signin" className="underline text-black">
                                Signin here
                            </Link>
                        </p>
                    )}
                </form>
            </section>
        </AnimationWraper>

    );
};

export default UserAuthForm;
