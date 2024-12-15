import type { Metadata } from "next";
import "@/src/styles/globals.css";
import React from "react";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
    title: "Solar Panel",
    description: "A sustainable energy solution for better world",
}

export default function RootLayout({
    children, 
}: Readonly<{
    children: React.ReactNode;
}>) {
    return(
        <html lang="en">
        <body>
            <div className="relative flex flex-col justify-center items-center mx-auto bg-gray-200 bg-cover bg-center" 
                style={
                    {
                        backgroundImage: `url('images/landing-page.png')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        width: '100vw',
                        height: '100vh'
                    }}
                >
                <Header />
                {children}
                <Footer />
            </div>
  
        </body>
        </html>
    )

}