import React from "react";
import { Inputbox } from "../components/Inputbox";

const UserAuthForm = ({ type }) => {
    return (
        <section className="h-cover flex justify-center items-center ">
            <form className="w-[80%] max-w-[400px] ">
                <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
                    {type == "sign-in" ? "Wellcome back" : "Join Us Today"}
                </h1>
                {type == "sign-in" ? (
                    <>
                        <Inputbox
                            name="Fullname"
                            type="text"
                            placeholder="full-name"
                            icon="fi-rr-user"
                        />
                        <Inputbox
                            name="Email"
                            type="email"
                            placeholder="email"
                            icon="fi-rr-envelope"
                        />
                        <Inputbox
                            name="Password"
                            type="password"
                            placeholder="password"
                            icon="fi-rr-envelope"
                        />
                    </>
                ) : (
                    <>
                        <Inputbox
                            name="Password"
                            type="password"
                            placeholder="password"
                            icon="fi-rr-envelope"
                        />
                    </>
                )}

            </form>
        </section>
    );
};

export default UserAuthForm;
