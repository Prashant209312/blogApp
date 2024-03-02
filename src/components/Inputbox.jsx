import React, { useState } from "react";

export const Inputbox = ({
    name,
    type,
    placeholder,
    defaultValue,
    id,
    icon,
}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <div className="relative w-[100%] mb-4">
            <input
                name={name}
                placeholder={placeholder}
                type={
                    type == "password" ? (passwordVisible ? "text" : "password") : type
                }
                defaultValue={defaultValue}
                id={id}
                className="input-box"
            />
            <i className={"fi " + icon + " input-icon"} />
            {type == "password" ? (
                <i
                    className={"fi fi-rr-eye" + (!passwordVisible ? "-crossed" : "") + " input-icon left-auto right-6 cursor-pointer"}
                    onClick={() => setPasswordVisible(!passwordVisible)}
                />
            ) : (
                ""
            )}
        </div>
    );
};
