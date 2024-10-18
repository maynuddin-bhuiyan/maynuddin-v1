/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "3rem",
        xl: "3rem",
        "2xl": "4rem",
      },
    },  
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #E855DE 0.01%, #5400EE 100%)',
      }, 
      clipPath: {
        'custom': 'inset(29% 31% 0 3%)',
      },     
      colors: {
        base: '#6533E2',
        title: {
          DEFAULT: '#0B061A',
          light: '#CCCCCC',
          dark: '#FFFFFF',
          secondary: '#8A8A8A',
        },
        base: {
          light: '#18171A',
          dark: '#BFBFBF',
          DEFAULT: '#5B5B5B',
          secondary: '#909090',
        },
      },   
    },
  },
  plugins: [],
};