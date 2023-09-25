import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./stories/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#00ffff',
        secondary: '#00fa9a',
        subprimary: "#f0ffff",
        subsecondary: "#f0fff0",
        accent1: '#F7DC6F',
        accent2: '#3498DB',
        white: '#ffffff',
        black: '#404040',
      },
    },
  },
  plugins: [],
}
export default config