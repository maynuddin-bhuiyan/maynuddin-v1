"use client";
// import logo from "@/assets/logo/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import CustomOutline from "./reuseable/custom-outline/CustomOutline";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navMenuList = [
    { id: 1, menuItem: "About", href: "/about" },
    { id: 2, menuItem: "Services", href: "/services" },
    { id: 3, menuItem: "Portfolio", href: "/portfolio" },
    { id: 3, menuItem: "Blog", href: "/blog" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="shadow-lg">
      <div className="container">
        <div className="flex justify-between items-center py-7 w-full">
          <div>
            <Link href="/" className="text-gradient text-2xl space-grotesk font-bold capitalize">
              {/* <Image src={logo} alt="Logo" width={150} height={40} /> */}
              mayn
            </Link>
          </div>
          {!isMenuOpen && (
            <div className="block lg:hidden">
              <HiOutlineMenuAlt3
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                color="#fff"
                size={30}
              />
            </div>
          )}
          <nav className="lg:block  hidden">
            <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-5">
              {navMenuList.map((item, index) => (
                <li
                  key={item.id + index}
                  className="text-lg capitalize text-[#ffffff] "
                >
                  <Link href={item.href}>{item.menuItem}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden lg:flex items-center gap-5">
            <CustomOutline text={"Contact"} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#000A14] bg-opacity-95 z-50 w-full h-screen">
            <div className="relative flex flex-col items-center justify-center lg:hidden h-full">
              {/* Close button */}

              <MdClose
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 text-[#fff]"
                size={30}
              />

              <ul className="flex flex-col items-center gap-5 mb-4">
                {navMenuList.map((item) => (
                  <li
                    key={item.id}
                    className="text-xl capitalize text-[#ffffff]"
                  >
                    <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                      {item.menuItem}
                    </Link>
                  </li>
                ))}
              </ul>
              <CustomOutline text={"Contact"} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;