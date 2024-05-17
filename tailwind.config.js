/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "templates/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Roboto Condensed'", "sans-serif"],
        code: ["'Fira Code'", "monospace"],
      },
      githubLogo: {
        "gh-light": "url('github-mark-white.svg')",
        "gh-dark": "url('github-mark.svg')"
      },
    },
  },
  variants: {
    extend: {
      githubLogo: ["dark"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#324843",
          secondary: "#a8c6ad",
          accent: "#fffee7",
          neutral: "#3d3d3d",
          "base-100": "#f0f0f0",
          info: "#3a7bfd",
          success: "#4ade80",
          warning: "#facc15",
          error: "#f87171",
        },
        dark: {
          primary: "#a8c6ad",
          secondary: "#fffee7",
          accent: "#324843",
          neutral: "#dddddd",
          "base-100": "#333333",
          info: "#3a7bfd",
          success: "#4ade80",
          warning: "#facc15",
          error: "#f87171",
        },
      },
    ],
  },
};
