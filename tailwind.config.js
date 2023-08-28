/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      inner: "inset 0 0 50px 0 rgba(79, 235, 249, 1)",
      outline: "0 0 5px 0 rgba(79, 235, 249, 1)",
      inset: "inset 0 0 50px 0 rgba(255, 255, 255, .1)",
    },

    extend: {
      backdropBlur: {
        super: "100px",
        gigant: "180px",
      },

      backgroundImage: {
        question_grad:
          "linear-gradient(90.17deg, rgba(107, 122, 199, 0.88) -358.43%, rgba(107, 122, 199, 0) 254.32%)",
        "frosty-navbar":
          "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),linear-gradient(#00111C91, #00111C91)",
        "frosty-buttonImage": "rgba(255, 255, 255, 0.1)",
        roseGrad:
          "linear-gradient(90deg, #FA868A 0%, #9B73D1 121.3%, rgba(249, 174, 131, 0) 477.78%)",
      },

      colors: {
        frosty: {
          border: "rgba(255, 255, 255, 0.3)",
          button: "rgba(255, 255, 255, 0.1)",
          "button-hover": "rgba(255, 255, 255, 0.2)",
          span: "rgba(56, 189, 248, 0.3)",
          table: "rgba(70, 101, 121, 0.19)",
        },
        
      },

      animation: {
        blob: "blob 10s infinite",
        typing: "typing 3s steps(30, end)",
        "fade-in-up": "fade-in-up 1s ease-in-out",
        "fade-in-down": "fade-in-down 1s ease-in-out",
        "fade-in": "fade-in 1.5s ease-in-out",
      },

      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        montserrat: ["Montserrat", "Quicksand", "sans-serif"],
        grifter: ["Grifter", "sans-serif"],
        k2d: ["K2D", "sans-serif"],
      },

      keyframes: {
        blob: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "25%": {
            transform: "translate(20px, -50px) scale(1.1)",
          },
          "50%": {
            transform: "translate(0, 20px) scale(1)",
          },
          "75%": {
            transform: "translate(-20px, -15px) scale(0.9)",
          },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "fade-in-up": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-down": {
          from: {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
