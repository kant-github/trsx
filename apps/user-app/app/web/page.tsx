import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { redirect } from 'next/navigation'

export default async function () {
  // const session = await getServerSession(authOptions);
  
  // console.log()

  // if(session?.user) {
  //   redirect("/web/dashboard")
  // } else{
  //   redirect("/api/auth/signin")
  // }

}