'use client'
import SideNavigation from "@/components/quiz-board/BoardSide";
import TopBoard from "@/components/quiz-board/BoardTop";
import { Inter } from "next/font/google";
import { useState } from "react";


// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//     title: "Quiz Board",
//     description: "Generated by create next app",
// };

export default function QuizLayout({ children }) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <TopBoard open={open} setOpen={setOpen}></TopBoard>
            <SideNavigation setOpen={setOpen} open={open}></SideNavigation>
            <div className='md:ml-[270px]   border border-orange-500 min-h-screen rounded shadow-lg'>{children}</div>
        </div>
    );
}