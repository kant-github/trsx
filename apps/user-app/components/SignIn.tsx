"use client"
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";

export default function SignInCard({ setPhone, setPassword, handleSubmit }: any) {

    async function onClickHandler() {
        await handleSubmit();
    }

    return (
        <div className="w-full flex justify-center items-center ">
            <Card title={"Sign In"}>
                <TextInput label={"Enter Your Phone Number"} placeholder={"Phone No"} setInput={setPhone} />
                <TextInput label={"Enter Your Password"} placeholder={"Password"} setInput={setPassword} type={"password"} />
                <div className="flex justify-center items-center pt-8 w-full">
                    <button className="text-white bg-black w-full hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 " onClick={onClickHandler} type="button">Sign In</button>
                </div>
            </Card>
        </div>
    );
}
