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
            '6xl': '70rem',
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
    textColor: ['responsive', 'hover', 'focus', 'last'],
    margin: ['responsive', 'first', 'last'],
    display: ['responsive', 'last'],
  },
  plugins: [
      require('@tailwindcss/ui'),
  ]
}
