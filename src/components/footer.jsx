import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";



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
      // { id: 1, icon: <TbFileCv size={20} />, href: "https://drive.google.com/file/d/1WqIVuShqUjqD2_8y9zd_N7_jJB1CbF1J/view?usp=sharing" },
      { id: 2, icon: <FaGithub size={20} />, href: "https://github.com/maynuddin-bhuiyan" },
      {
        id: 4,
        icon: <FaLinkedinIn size={20} />,
        href: "https://www.linkedin.com/in/maynuddin-bhuiyan/",
      },
        {
          id: 1,
          icon: <FaFacebookF size={20} />,
          href: "https://www.facebook.com/devmaynuddin",
        },     
        
        
    ];
    
    return (
      <footer className="bg-transparent text-white py-5 shadow-lg border-t border-gray-500 2xl:fixed 2xl:w-full 2xl:bottom-0 2xl:left-0">
        <div className="container mx-auto flex flex-wrap justify-between items-center ">
          <div className="flex flex-col">
            <h2 className="text-black text-2xl font-bold text-gradient space-grotesk ">Maynuddin</h2>
            <p className="text-sm lg:text-base !text-white">Software Developer</p>
            <Link className="text-sm text-gray-300" href="mailto:hi@maynuddin.com">hi@maynuddin.com</Link>
            </div>
          <nav className="flex space-x-6 lg:my-0 my-3">
            <Link href="/about" className="hover:text-pink-500">About</Link>
            {/* <Link href="/services" className="hover:text-pink-500">Services</Link> */}
            <Link href="/portfolio" className="hover:text-pink-500">Portfolio</Link>
            <Link href={"https://blog.maynuddin.com/"} target="_blank" className="hover:text-pink-500">Blog</Link>
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
