/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030A14',
          900: '#081B33', // Midnight Navy (Primary Brand)
          850: '#0B2240',
          800: '#0E2B52',
          700: '#143A6E',
          600: '#1C4F94',
        },
        royal: {
          DEFAULT: '#1557A6', // Royal Blue
          light: '#2370D1',
          dark: '#0E3F7A',
          hover: '#1962BD',
        },
        gold: {
          DEFAULT: '#C8A96B', // Champagne Gold
          light: '#E2CE9E',
          soft: '#F4ECE1',
          dark: '#A68645',
          metallic: 'linear-gradient(135deg, #DFCA95 0%, #C8A96B 50%, #A68645 100%)',
        },
        sand: {
          50: '#FBFBF9',
          100: '#F8F7F3', // Warm Off-White
          200: '#EFECE4',
          300: '#E3DFCFC',
          400: '#D2CCB8',
        },
        slate: {
          muted: '#6E7D93',
          text: '#536174', // Slate Text
          deep: '#364152',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(8, 27, 51, 0.08), 0 0 1px 1px rgba(200, 169, 107, 0.15)',
        'luxury-hover': '0 30px 60px -15px rgba(8, 27, 51, 0.16), 0 0 1px 1px rgba(200, 169, 107, 0.35)',
        'gold-glow': '0 0 25px rgba(200, 169, 107, 0.25)',
        'navy-card': '0 25px 50px -12px rgba(4, 14, 27, 0.45)',
      },
      letterSpacing: {
        'widest-luxury': '0.22em',
        'super-wide': '0.3em',
      }
    },
  },
  plugins: [],
}
