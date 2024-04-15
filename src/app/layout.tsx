import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import React, {ReactNode} from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import {cn} from "@/components/utils";

const roboto = Roboto({weight: ["100", "300", '400', "500", "700"], subsets: ['latin']});

export const metadata: Metadata = {
    title: "Coding Challenge!",
    description: "Simple coding challenge",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={cn(roboto.className,'min-h-dvh flex flex-col justify-between')}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
