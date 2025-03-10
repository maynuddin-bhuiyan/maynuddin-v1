"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import CustomOutline from "./reuseable/custom-outline/CustomOutline";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter(); // Initialize useRouter
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const navMenuList = [
    { id: 1, menuItem: "About", href: "/about" },
    { id: 2, menuItem: "Resume", href: "/resume" },
    { id: 3, menuItem: "Projects", href: "/projects" },
    { id: 4, menuItem: "Awards", href: "/awards" },
  ];

  // Handle scroll event to toggle sticky state
  const handleScroll = () => {
    setIsScroll(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`text-white transition-all duration-300 
      ${
        isScroll || isMenuOpen
          ? "lg:static fixed top-0 left-0 w-full h-24 z-50 shadow-gray-700 bg-[#000000cc] shadow-md transform translate-y-0"
          : "relative transform translate-y-0"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center py-7 w-full">
          <div>
            <Link
              href="/"
              className="text-gradient text-2xl space-grotesk font-bold capitalize"
            >
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
          <nav className="lg:block hidden">
            <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-5">
              {navMenuList.map((item) => (
                <li key={item.id} className="text-lg capitalize">
                  <Link
                    href={item.href}
                    className={`${
                      router.pathname === item.href
                        ? "!text-blue-400 font-bold" // Active link style
                        : "text-[#ffffff]"
                    }`}
                  >
                    {item.menuItem}
                  </Link>
                </li>
              ))}
              <li className="text-lg capitalize">
                <Link
                  href={"https://blog.maynuddin.com/"}
                  target="_blank"
                  className="text-[#ffffff]"
                >
                  {"Blog"}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="hidden lg:flex items-center gap-5">
            <CustomOutline
              text={"Contact"}
              href={"https://wa.me/8801618559839"}
            />
            {/* <CustomButton href="https://calendly.com/maynuddinbhu14grm/30min" text="download cv" Icon={RiMessage3Line} />         */}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-0 bg-[#000A14] bg-opacity-95 left-0 z-50 w-full h-screen">
            <div className="relative flex flex-col items-center justify-center lg:hidden h-full">
              {/* Close button */}
              <MdClose
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-2 text-[#fff]"
                size={30}
              />
              <ul className="flex flex-col items-center gap-5 mb-4">
                {navMenuList.map((item) => (
                  <li key={item.id} className="text-xl capitalize">
                    <Link
                      href={item.href}
                      className={`${
                        router.pathname === item.href
                          ? "text-blue-400 font-bold" // Active link style
                          : "text-[#ffffff]"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.menuItem}
                    </Link>
                  </li>
                ))}
                <li className="text-lg capitalize">
                  <Link
                    href={"https://blog.maynuddin.com/"}
                    target="_blank"
                    className="text-[#ffffff]"
                  >
                    {"Blog"}
                  </Link>
                </li>
              </ul>
              <CustomOutline
                text={"Contact"}
                href={"https://wa.me/8801618559839"}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
