"use server"
import { getServerSession, unstable_getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";
import bcrypt from "bcrypt";

export async function profileUpdate(name: string, email: string, password: string) {
    try {
        // Fetch the current session
        const session = await getServerSession(authOptions);
        
        // Check if the user is authenticated
        if (!session?.user?.id) {
            return {
                message: "User is not authenticated",
            };
        }

        // Update user profile in the database
        const updatedUser = await prisma.user.update({
            where: {
                id: Number(session.user.id),
            },
            data: {
                name: name,
                email: email,
                password: await bcrypt.hash(password, 10),
            },
        });

        return {
            message: "Profile updated successfully",
        };
    } catch (err) {
        console.error(err);
        return {
            message: "Failed to update profile",
        };
    }
}
