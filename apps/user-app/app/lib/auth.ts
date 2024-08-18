import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import { getToken } from "next-auth/jwt";
import { NextAuthOptions } from 'next-auth';
import { z } from "zod"

const signUpBody = z.object({
    phone: z.string().min(10, "Phone number must be at least 10 digits").max(11, "Phone number must be at most 11 digits"),
    password: z.string().min(6, "Password must be at least 6 characters long")
})


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                phone: { label: "Phone number", type: "text", placeholder: "1231231231", required: true },
                password: { label: "Password", type: "password", required: true }
            },

            async authorize(credentials: any) {

                const parsedSignInbody = signUpBody.safeParse(credentials);

                if (!parsedSignInbody.success) {
                    throw new Error(`Send proper phone number and password with atleast 6 chars`);
                }


                if (!credentials.phone) {
                    return null
                }
                const hashedPassword = await bcrypt.hash(credentials.password, 10);
                const existingUser = await db.user.findFirst({
                    where: {
                        number: credentials.phone
                    }
                });

                if (existingUser) {
                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                    if (!passwordValidation) {
                        throw new Error("Incorrect Password");
                    }
                    if (passwordValidation) {
                        return {
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            email: existingUser.number
                        }
                    }
                    return null;
                }

                try {
                    const user = await db.user.create({
                        data: {
                            number: credentials.phone,
                            password: hashedPassword,
                            Balance: {
                                create: {
                                    amount: 10000 * 100,
                                    locked: 0
                                }
                            }
                        }
                    });

                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.number
                    }
                } catch (e) {
                    console.error(e);
                }

                return null
            },
        })
    ],
    secret: process.env.JWT_SECRET || "secret",
    pages: {
        signIn: "/signin"
    },
    callbacks: {
        async session({ token, session }: { token: any, session: any }) {
            session.user.id = token.sub;
            return session;
        },
    }
} satisfies NextAuthOptions;
