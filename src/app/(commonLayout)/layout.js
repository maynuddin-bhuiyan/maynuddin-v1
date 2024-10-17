"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
    const pathname = usePathname();

    const bodyStyle = {
        margin: 0,
        minHeight: "100vh",
        backgroundImage: pathname === "/" ? "url('/mask-group.png')" : "none",
        backgroundColor: pathname === "/" ? "#101010" : "#101010",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
    };
    return (
        <html lang="en">
            <body style={bodyStyle}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
