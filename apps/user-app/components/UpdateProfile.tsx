"use client"
import { Card } from "@repo/ui/card"
import { TextInput } from "@repo/ui/textinput"
import { useState } from "react"
import { getServerSession } from "next-auth";
import { authOptions } from "../app/lib/auth";
import { profileUpdate } from "../app/lib/actions/profileUpdate";
import { toast } from "sonner"

export default function ({ dropDown }: { dropDown: () => void }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");


    const submitHandler = async () => {
        if (password !== password2) {
            toast.warning("Passwords are not same")
          return;
        }
        const response = await profileUpdate( name, email, password);
        if (response?.message === "Updated your profile") {
          dropDown();
          
        } else {
          alert(response?.message || "Something went wrong");
        }
      };

    return (
        <div className="w-full">
            <Card dropDown={dropDown} title="Update Your profile" drop="drop">
                <TextInput setInput={setName} label={"Name"} placeholder={"Name"} />
                <TextInput setInput={setEmail} label={"E-mail"} placeholder={"E-mail"} />
                <div className="flex justify-center gap-10">
                    <TextInput setInput={setPassword} label={"Change password"} placeholder={"Type your password"} type={"password"} />
                    <TextInput setInput={setPassword2} label={"Set password"} placeholder={"Re-type your password"} type={"password"} />
                </div>
                <div className="flex justify-end mt-4">
                    <button className="bg-green-600 text-white px-6 py-2 mr-2 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75" onClick={submitHandler}>
                        Submit
                    </button>
                </div>
            </Card>
        </div>

    )
}


{/* <div className="bg-white p-6 rounded-md shadow-lg w-1/3">
            <div>
                <p className="text-2xl">Update Your profile</p>
            </div>
            
        </div> */}