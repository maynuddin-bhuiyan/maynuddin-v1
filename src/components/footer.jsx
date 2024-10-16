import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialMediaButton = ({ backgroundColor, children, href }) => {
    return (
      <Link
        target="_blank"
        href={href || "/"}
        className={`min-w-[40px] text-white h-[40px] rounded-full border border-[#5400EE] cursor-pointer flex justify-center items-center transition-all duration-700 ease-in-out 
          ${backgroundColor ? `bg-[${backgroundColor}]` : "bg-transparent"} 
          hover:scale-110 focus:scale-110 
          hover:shadow-[inset_0_-2.5em_0_0_var(--hover)] focus:shadow-[inset_0_-5.25em_0_0_var(--hover)]`}
        style={{
          "--color": "#E855DE", // Set custom properties for hover colors
          "--hover": "#E855DE",
        }}
        aria-label="Social Media Button" // Add accessibility feature
      >
        {children}
      </Link>
    );
};

export default function Footer() {

    const iconsData = [
        {
          id: 1,
          icon: <FaFacebookF size={20} />,
          href: "https://www.facebook.com/codethinkerofficial?mibextid=ZbWKwL",
        },
        { id: 2, icon: <FaTwitter size={20} />, href: "/" }, // Use FaTwitter instead of FaXTwitter
        { id: 3, icon: <FaInstagram size={20} />, href: "/" },
        {
          id: 4,
          icon: <FaLinkedinIn size={20} />,
          href: "https://www.linkedin.com/company/codethinker/",
        },
    ];
    
    return (
      <footer className="bg-transparent text-white py-5 shadow-lg border-t border-gray-500">
        <div className="container mx-auto flex flex-wrap justify-between items-center ">
          <div className="flex flex-col">
            <h2 className="text-black text-2xl font-bold text-gradient space-grotesk ">Maynuddin</h2>
            <p className="text-lg">Software Developer</p>
          </div>
          <nav className="flex space-x-6 lg:my-0 my-3">
            <Link href="#about" className="hover:text-pink-500">About</Link>
            <Link href="#services" className="hover:text-pink-500">Services</Link>
            <Link href="#portfolio" className="hover:text-pink-500">Portfolio</Link>
            <Link href="#contact" className="hover:text-pink-500">Contact</Link>
          </nav>
        
          <div className="flex gap-5 flex-wrap">
            {iconsData.map((item) => (
              <SocialMediaButton
                key={item.id}
                backgroundColor={"#ec4899"}
                href={item.href}
              >
                {item.icon} {/* Use the icon directly */}
              </SocialMediaButton>
            ))}
          </div>
        </div>
      </footer>
    );
}
