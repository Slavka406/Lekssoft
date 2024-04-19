/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    rounded: {
      none: 0,
      sm: 4,
      DEFAULT: 8,
      md: 12,
      lg: 16,
      xl: 24,
      '2xl': 32,
      '3xl': 48,
      full: 9999,
    },
    extend: {
      colors: {
        black: {
          DEFAULT: 'rgb(0, 0, 0)',

          'lighten-t-1': 'rgba(0, 0, 0, 0.75)',
          'lighten-t-2': 'rgba(0, 0, 0, 0.50)',
          'lighten-t-3': 'rgba(0, 0, 0, 0.25)',
          'lighten-t-4': 'rgba(0, 0, 0, 0.15)',
          'lighten-t-5': 'rgba(0, 0, 0, 0.10)',
          'lighten-t-6': 'rgba(0, 0, 0, 0.05)',
        },

        white: {
          DEFAULT: 'rgb(255, 255, 255)',

          'lighten-t-1': 'rgba(255, 255, 255, 0.65)',
          'lighten-t-2': 'rgba(255, 255, 255, 0.50)',
          'lighten-t-3': 'rgba(255, 255, 255, 0.25)',
          'lighten-t-4': 'rgba(255, 255, 255, 0.15)',
          'lighten-t-5': 'rgba(255, 255, 255, 0.10)',
          'lighten-t-6': 'rgba(255, 255, 255, 0.05)',
        },

        primary: {
          DEFAULT: 'rgb(28, 116, 224)',

          'darken-1': 'rgb(15, 86, 186)',

          'lighten-1': 'rgb(69, 150, 237)',
          'lighten-2': 'rgb(112, 183, 250)',
          'lighten-3': 'rgb(156, 210, 255)',
          'lighten-4': 'rgb(196, 231, 255)',
          'lighten-5': 'rgb(237, 248, 255)',

          'lighten-t-1': 'rgba(28, 116, 224, 0.65)',
          'lighten-t-2': 'rgba(28, 116, 224, 0.50)',
          'lighten-t-3': 'rgba(28, 116, 224, 0.25)',
          'lighten-t-4': 'rgba(28, 116, 224, 0.15)',
          'lighten-t-5': 'rgba(28, 116, 224, 0.10)',
          'lighten-t-6': 'rgba(28, 116, 224, 0.05)',
        },

        secondary: {
          DEFAULT: 'rgb(11, 10, 14)',

          'lighten-1': 'rgb(40, 39, 43)',
          'lighten-2': 'rgb(48, 47, 50)',
          'lighten-3': 'rgb(96, 96, 98)',
          'lighten-4': 'rgb(145, 145, 147)',
          'lighten-5': 'rgb(196, 194, 195)',
          'lighten-6': 'rgb(218, 218, 219)',
          'lighten-7': 'rgb(240, 240, 241)',
          'lighten-8': 'rgb(245, 245, 245)',
          'lighten-9': 'rgb(250, 250, 250)',

          'lighten-t-1': 'rgba(11, 10, 14, 0.88)',
          'lighten-t-2': 'rgba(11, 10, 14, 0.85)',
          'lighten-t-3': 'rgba(11, 10, 14, 0.56)',
          'lighten-t-4': 'rgba(11, 10, 14, 0.45)',
          'lighten-t-5': 'rgba(11, 10, 14, 0.25)',
          'lighten-t-6': 'rgba(11, 10, 14, 0.15)',
          'lighten-t-7': 'rgba(11, 10, 14, 0.06)',
          'lighten-t-8': 'rgba(11, 10, 14, 0.04)',
          'lighten-t-9': 'rgba(11, 10, 14, 0.02)',
        },

        gray: {
          DEFAULT: 'rgb(36, 39, 41)',

          'lighten-1': 'rgb(45, 45, 45)',
          'lighten-2': 'rgb(57, 57, 57)',
          'lighten-3': 'rgb(65, 65, 65)',
          'lighten-4': 'rgb(91, 96, 104)',
          'lighten-5': 'rgb(129, 133, 139)',
          'lighten-6': 'rgb(192, 194, 197)',
          'lighten-7': 'rgb(224, 225, 226)',

          'lighten-t-1': 'rgba(35, 31, 32, 0.6)',
          'lighten-t-2': 'rgba(0, 0, 0, 0.75)',
          'lighten-t-3': 'rgba(3, 11, 23, 0.75)',
          'lighten-t-4': 'rgba(3, 11, 23, 0.65)',
          'lighten-t-5': 'rgba(3, 11, 23, 0.50)',
          'lighten-t-6': 'rgba(3, 11, 23, 0.25)',
          'lighten-t-7': 'rgba(3, 11, 23, 0.15)',
        },

        success: {
          DEFAULT: 'rgb(82, 196, 26)',

          'lighten-1': 'rgb(142, 217, 106)',
          'lighten-2': 'rgb(168, 225, 140)',
          'lighten-3': 'rgb(212, 240, 198)',
          'lighten-4': 'rgb(229, 246, 221)',
          'lighten-5': 'rgb(237, 249, 232)',
          'lighten-6': 'rgb(246, 252, 243)',
        },

        warning: {
          DEFAULT: 'rgb(250, 173, 20)',

          'lighten-1': 'rgb(252, 202, 102)',
          'lighten-2': 'rgb(252, 214, 137)',
          'lighten-3': 'rgb(254, 234, 196)',
          'lighten-4': 'rgb(254, 243, 220)',
          'lighten-5': 'rgb(254, 247, 231)',
          'lighten-6': 'rgb(255, 251, 243)',
        },

        danger: {
          DEFAULT: 'rgb(245, 34, 45)',

          'lighten-1': 'rgb(248, 111, 118)',
          'lighten-2': 'rgb(250, 144, 150)',
          'lighten-3': 'rgb(252, 200, 202)',
          'lighten-4': 'rgb(254, 222, 224)',
          'lighten-5': 'rgb(254, 232, 234)',
          'lighten-6': 'rgb(254, 244, 244)',
        },

        info: {
          DEFAULT: 'rgb(29, 111, 220)',

          'lighten-1': 'rgb(108, 161, 232)',
          'lighten-2': 'rgb(142, 183, 237)',
          'lighten-3': 'rgb(198, 219, 246)',
          'lighten-4': 'rgb(221, 234, 250)',
          'lighten-5': 'rgb(232, 240, 251)',
          'lighten-6': 'rgb(243, 248, 253)',
        },
      },
      fontWeight: {
        bold: '700',
        semibold: '600',
        medium: '500',
        regular: '400',
        light: '300',
      },

      fontSize: {
        h1: 32,
        h2: 26,
        h3: 22,
        body1: 18,
        body2: 16,
        subtitle: 15,
        button1: 18,
        button2: 16,
        caption1: 14,
        caption2: 12,
      },

      fontWeight: {
        h1: 'bold',
        h2: 'bold',
        h3: 'medium',
        body1: 'normal',
        body2: 'normal',
        subtitle: 'medium',
        button1: 'bold',
        button2: 'medium',
        caption1: 'normal',
        caption2: 'normal',
      },
    },
  },
  plugins: [],
}
