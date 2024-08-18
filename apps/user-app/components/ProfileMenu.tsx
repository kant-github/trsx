import React, { useState, useEffect, useRef } from "react";
import UpdateProfile from "./UpdateProfile";
import { useSession } from "next-auth/react";
import { ProjectReadMe } from "./ProjectReadMe";




export default function ProfileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const [projectReadMe, setProjectReadMe] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);


    function tapHandler() {
        setIsOpen((prev) => !prev);

    }

    function projectReadMeHandler() {
        setProjectReadMe((prev) => !prev)
    }

    function dialogOpenHandler() {
        setDialogIsOpen((prev) => !prev)
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div ref={dropdownRef}>
            <button type="button" title="profile-options" onClick={tapHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute right-8 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        <div className="block px-4 py-2 text-sm text-gray-700 border-b border-[#c4c4c4]">
                            <i>Hi{" "}{"name"}</i>
                        </div>
                        <a onClick={dialogOpenHandler} href="#update-profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Update Profile
                        </a>
                        <a onClick={projectReadMeHandler} href="#readme" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Project Readme
                        </a>
                        <a href="https://github.com/kant-github/trsx" target="_blank" className="block px-4 py-2 text-sm text-blue-700 bg-blue-50 hover:bg-blue-100">
                            Github
                        </a>
                        <a href="#logout" className="block px-4 py-2 text-sm text-red-600 bg-red-50 hover:bg-red-100">
                            Logout
                        </a>
                    </div>
                </div>
            )}
            {
                dialogIsOpen && (
                    <>
                        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 w-full">
                            <div className="w-2/5">
                                <UpdateProfile dropDown={dialogOpenHandler} />
                            </div>

                        </div>
                    </>
                )
            }
            {
                projectReadMe && (
                    <>
                        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50 w-full ">
                            <div className="w-2/5">
                                <ProjectReadMe setProjectReadMe={setProjectReadMe} />
                            </div>
                        </div>
                    </>
                )
            }


        </div>
    );
}


