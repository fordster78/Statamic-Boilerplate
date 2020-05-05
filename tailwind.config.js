module.exports = {
  theme: {
    extend: {

        backgroundColor: {
            'overlay': 'rgba(75, 85, 105, 0.7)'
        },
        colors: {
            blue: {
                600: '#0179b5',
                700: '#016DA3'
            },
        },
        fontFamily: {
            handwritten: [
              'marydale',
              'sans-serif',
            ],
        },
        maxWidth: {
            '5xl': '61.25rem',
            '6xl': '70rem',
        },
        rotate: {
            '-5': '-5deg',
            '-4': '-4deg',
            '-3': '-3deg',
            '-2': '-2deg',
            '-1': '-1deg',
            '1': '1deg',
            '2': '3deg',
            '3': '3deg',
            '4': '3deg',
            '5': '3deg',
        },
        screens: {
            xs: '400px',
        },
        spacing: {
            '25': '6.25rem',
            '49': '12.25rem',
            '50': '12.5rem',
            '68': '16.88rem',
            '72': '17.5rem',
            '76': '18.13rem',
            '80': '18.75rem'
        },
        opacity: {
            '40': '0.4',
        },
        zIndex: {
            '2': '2',
        },
    },
  },
  variants: {
    display: ['responsive', 'last'],
    flexDirection: ['responsive', 'odd', 'even'],
    margin: ['responsive', 'first', 'last'],
    rotate: ['responsive', 'hover', 'focus', 'odd', 'even'],
    textColor: ['responsive', 'hover', 'focus', 'last'],
  },
  plugins: [
      require('@tailwindcss/ui'),
  ]
}
