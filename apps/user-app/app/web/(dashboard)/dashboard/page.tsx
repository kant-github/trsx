import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { redirect } from "next/navigation"

export default async function () {


    const session = await getServerSession(authOptions);

    if (!session?.user) {
        redirect("/api/auth/signin");
        return null; // Return null to prevent rendering the page before redirect
    } else{
    return <>
        <div className="text-4xl text-[#6a51a6] p-8 mb-8 font-bold"></div>
    </>
    }
}