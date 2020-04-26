module.exports = {
  theme: {
    extend: {
        screens: {
            xs: '400px',
        },
        colors: {
            blue: {
                600: '#0179b5',
                700: '#016DA3'
            },
        },
        spacing: {
            '68': '16.88rem',
            '72': '17.5rem',
            '76': '18.13rem',
            '80': '18.75rem'
        },
        backgroundColor: {
            'overlay': 'rgba(75, 85, 105, 0.7)'
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
