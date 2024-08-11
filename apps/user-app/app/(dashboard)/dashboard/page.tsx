import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

export default async function () {
    const session = await getServerSession(authOptions);
    console.log(session)

    return<>
            <div className="text-4xl text-[#6a51a6] p-8 mb-8 font-bold">{`Hey ${session.user.email}`}</div>
        </>
}