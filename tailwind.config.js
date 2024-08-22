/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'milkyway': "url('/src/assets/2022-09-01 Milky Way.png')",
        'barnard': "url('/src/assets/2022-09-24 NGC 2023 Horsehead Nebula.jpeg')",
        'andromeda': "url('/src/assets/2022-10-27 NGC 224 Andromeda Galaxy.jpeg')",
        'pleiades': "url('/src/assets/2020-09-27 NGC 1432 Pleiades Cluster.png')"
      }
    },
  },
  plugins: [],
}