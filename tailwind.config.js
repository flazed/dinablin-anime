/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  darkMode: "media",
  theme: {
    extend: {
      animation: {
        heartbeat: "heartbeat 3s ease-in-out infinite",
      },
      keyframes: {
        heartbeat: {
          "0%, 100%": {
            scale: "1"
          },
          "50%": {
            scale: "1.15"
          }
        }
      }
    },
  },
  plugins: [],
}

