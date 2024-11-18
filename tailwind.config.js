/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        footerBg: "#012758",
        customOrange: "#FDA31B",
        customgreen: "#116e63",
        customBlue: "#062237",
        customGold: "#D7B56D",
        customLightGold: "rgba(242, 238 , 229 ,1)",
        heroBackground: "rgba(255,255,255,0.2)",
        contentColor: "#757f95"
      },
      borderRadius: {
        customRounded: "13px 13px 13px 0px",
        customRoundedBtnPrevious: "67% 33% 80% 20% / 56% 72% 28% 44%",
        customRoundedBtnNext: "33% 67% 20% 80% / 72% 56% 44% 28%",
        customRoundedBtn: "50px 50px 50px 0",
        customRoundeImg: "60px 60px 0px 60px",
      },
      tracking: {
        letterSpecing: "4px"
      }
    },
  },
  plugins: [],
}
