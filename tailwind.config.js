module.exports = {  
  content: [   
        "./pages/**/*.{js,ts,jsx,tsx}",   
        "./components/**/*.{js,ts,jsx,tsx}",  
         ],
         theme: {
           extend:  {
              backgroundImage: {
                'background-default': 'url("/background-default.jpg")',
                'carousel-1': 'url("/carousel-1.png")',
                'carousel-2': 'url("/carousel-2.png")',
                'carousel-3': 'url("/carousel-3.png")',
                'carousel-4': 'url("/carousel-4.png")',
              },
           },
              colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'grey': '#271249',
                'grey-light': '#2D2C44',  
                'pink': '#C674C2',
                'blue': '#57BDBE',
                'purple': '#7547D8',
                'violet': '#9B1C8B',
                'blue-gem': '#3813B4',
                'semi-transparent': 'rgba(0, 0, 0, 0.3)',
                'semi-transparent-blue': 'rgba(255, 255, 255, 1)',
              },
            },
  plugins: [],
}