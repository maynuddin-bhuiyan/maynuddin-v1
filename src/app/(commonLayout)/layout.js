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
        backgroundImage: pathname === "/" ? '#000' : "none",
        backgroundColor: pathname === "/" ? "#220837" : "#220837",
        backgroundSize: "cover",
        backgroundPosition: "71% 18%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
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
