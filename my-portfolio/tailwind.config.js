/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",  // Includes all files in the src/app directory
    "./src/components/**/*.{js,ts,jsx,tsx}", // Includes all files in the src/components directory
  ],
  theme: {
    extend: {
      animation: {
        popUp: 'popUp 0.5s ease-in-out',
        slideIn: 'slideIn 0.5s ease-out',
        bounce: 'bounce 0.5s ease-in-out',
        float: 'float 1.5s ease-in-out infinite',
        zoomIn: 'zoomIn 0.5s ease-out',
        rotate: 'rotate 0.5s ease-in-out',
        shake: 'shake 0.5s ease-in-out',
      },
      keyframes: {
        popUp: {
          '0%': { opacity: 0, transform: 'scale(0.5)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        },
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(-100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' }
        },
        zoomIn: {
          '0%': { opacity: 0, transform: 'scale(0.5)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(0)' }
        },
      },
    },
  },
  plugins: [],
};
