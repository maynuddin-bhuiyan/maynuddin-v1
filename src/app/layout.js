import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: "Maynuddin Bhuiyan: Software Developer",
  description: `Hi, I'm Maynuddin, a Front-End Developer specializing in Next.js and Tailwind CSS. I build responsive, high-performance websites and web apps with React.js.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
