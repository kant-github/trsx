"use client";
import React from 'react';
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({ subsets: ["latin"], weight: "200" });

export function ProjectReadMe({ setProjectReadMe }: { setProjectReadMe: React.Dispatch<React.SetStateAction<boolean>> }) {

    function cutHandler() {
        setProjectReadMe((prev) => !prev);
    }

    return (
        <div className={`${dm_sans.className} max-w-full md:max-w-4xl mx-auto p-4 md:p-8 bg-white rounded-lg max-h-[65vh] text-white overflow-y-auto`}>
            <div className='flex flex-row justify-between items-center mb-6'>
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black md:mb-0">Project Overview</h1>
                <span>
                    <svg
                        onClick={cutHandler}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#f50004"
                        className="w-6 h-6 md:w-8 md:h-8 cursor-pointer p-1 transition-colors duration-300 ease-in-out"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9.75l2.25 2.25m0 0L16.5 14.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33z"
                        />
                    </svg>
                </span>
            </div>

            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">Introduction</h2>
                <p className="text-black leading-snug">
                    This project is a payment gateway application designed to simulate the process of sending money between users. While it does not handle real money transactions due to the lack of banking API access, it successfully manages the transfer of dummy money between registered users. The primary goal of this project was to explore and understand the architecture of a payment gateway system.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl md:text-2xl text-black font-semibold mb-4">Key Features</h2>
                <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>Transfer dummy money between registered users.</li>
                    <li>User-friendly interface fully designed by the developer.</li>
                    <li>Transaction history and wallet management features.</li>
                    <li>Implemented database locking to resolve concurrency issues.</li>
                    <li>Spoofed banking API for educational purposes.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl text-black md:text-2xl font-semibold mb-4">Technology Stack</h2>
                <p className="text-black leading-relaxed">
                    The application was built using the following technologies:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-black mt-2">
                    <li><strong>Next.js:</strong> For both frontend and backend development.</li>
                    <li><strong>Prisma:</strong> ORM for database management.</li>
                    <li><strong>PostgreSQL:</strong> The database used for storing transaction data.</li>
                    <li><strong>Turborepo:</strong> For project orchestration within a monorepo structure.</li>
                    <li><strong>NextAuth:</strong> For user authentication.</li>
                    <li><strong>Aceternity UI:</strong> For UI components.</li>
                    <li><strong>Docker:</strong> For a persistent local development environment.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">Challenges and Solutions</h2>
                <p className="text-black leading-relaxed">
                    During development, a key challenge was resolving a vulnerability where two concurrent requests could manipulate the JavaScript thread when transferring money to multiple users simultaneously. This was mitigated by implementing database locking and ensuring transactional integrity throughout the application.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">Mentorship</h2>
                <p className="text-black leading-relaxed">
                    This project was developed under the mentorship of <strong>Harkirat Singh</strong>, whose guidance was invaluable throughout the development process.
                </p>
            </section>

            <footer className="text-center mt-8">
                <p className="text-gray-600">© 2024 Rishi K. All rights reserved.</p>
            </footer>
        </div>
    );
}
