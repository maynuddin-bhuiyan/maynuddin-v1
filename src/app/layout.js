import "@/styles/globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const metadata = {
  title: "Maynuddin Bhuiyan: Software Developer",
  description: `Greetings! I'm a dedicated front-end web developer with NextJs and Tailwind CSS. I specialize in website and web application development.

As a Front-End Developer with React JS and Next.js expertise, you will be responsible for:

* Developing and maintaining high-quality front-end code using React 
 JS and Next.js
* Designing and implementing responsive user interfaces, 
 accessible, and performant
* Working closely with designers and back-end developers to ensure a 
 seamless user experience
* Contributing to the development and improvement of our front-end 
 development workflow

🌟 Proficient in HTML, CSS, and JavaScript. Experienced in ReactJS, NextJS, ES6, NodeJs, SCSS, Redux, MongoDB, Firebase, and React Native (basic). Familiar with MaterialUI, Tailwind CSS, Vue JS, and TypeScript.

If you're looking for similar services, contact me on Fiverr. Let's collaborate to amplify your brand and turn your web development dreams into reality. Let's make it unique and creative—looking forward to exciting collaborations! 🚀🤝`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
