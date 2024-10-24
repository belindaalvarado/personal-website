import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages//*.{js,ts,jsx,tsx,mdx}',
    './src/components//*.{js,ts,jsx,tsx,mdx}',
    './src/app//*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customBackground: '#F9FAFF',
        customBlack: '#25282B',
        customLightGray: '#828282',
        customBerry: '#990F4B',
        customBorder:'#E8ECF4'
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'playfair'],
        nunito: ['var(--font-nunito)', 'nunito'],
        roboto: ['var(--font-roboto)', 'roboto'],
        comfortaa: ['var(--font-comfortaa)', 'comfortaa']
      },
    },
  },
  plugins: [],

};
export default config;