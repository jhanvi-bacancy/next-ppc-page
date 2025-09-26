/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "text-primary",
    "hover:text-primary",
    "focus:text-primary",
    "text-secondary",
    "hover:text-secondary",
    "focus:text-secondary",
    "text-dark",
    "hover:text-dark",
    "focus:text-dark",
    "text-white",
    "hover:text-white",
    "focus:text-white",
  ],
  theme: {
  	extend: {
  		colors: {
  			white: '#FFFFFF',
  			primary: '#f58220',
  			secondary: '#696969',
  			dark: '#222',
  			black: '#000',
  			'light-orange': '#fff3e9',
  			danger: '#f00',
  			customGray: 'rgba(105, 105, 105, 0.35)'
  		},
  		backgroundColor: {
  			white: '#FFFFFF',
  			primary: '#f58220',
  			secondary: '#696969',
  			dark: '#222',
  			black: '#000',
  			'light-orange': '#fff3e9',
  			'primary-hover': '#ec6100',
  			'gray-light': '#f9f9f9',
  			transparent: 'transparent',
  			alert: '#b9d1f5',
  			dangerbg: '#efaeb4',
  			'primary-light': '#FFDCBE'
  		},
  		backgroundImage: {
  			arrowdownOrange: 'url("https://assets.bacancytechnology.com/main-boot-5/images/tailwind/images/down-arrow-orange.svg")',
  			arrowdown: 'url("https://assets.bacancytechnology.com/main-boot-5/images/tailwind/images/down-arrow.svg")',
  			rightarrowLine: 'url("https://assets.bacancytechnology.com/main-boot-5/images/tailwind/images/right-arrow-line.svg")',
  			rightarrowLineBlack: 'url("https://assets.bacancytechnology.com/main-boot-5/images/tailwind/images/right-arrow-line-black.svg")',
  			arrowrightOrange: 'url("https://assets.bacancytechnology.com/main-boot-5/images/tailwind/images/right-arrow-small-orange.svg")'
  		},
  		fontSize: {
  			base: [
  				'max(18px,1.25vw)',
  				{
  					lineHeight: 'max(28px,2.083vw)'
  				}
  			],
  			h1: [
  				'max(27px,4.167vw)',
  				{
  					lineHeight: 'normal'
  				}
  			],
  			h2: [
  				'max(22px,2.778vw)',
  				{
  					lineHeight: 'max(33px,3.542vw)'
  				}
  			],
  			h3: [
  				'max(22px,2.5vw)',
  				{
  					lineHeight: 'max(34px,3.472vw)'
  				}
  			],
  			h4: [
  				'max(20px,1.389vw)',
  				{
  					lineHeight: 'max(32px,2.222vw)'
  				}
  			],
  			h5: [
  				'max(21px,1.806vw)',
  				{
  					lineHeight: 'max(32px,2.708vw)'
  				}
  			],
  			h6: [
  				'max(18px,1.25vw)',
  				{
  					lineHeight: 'max(28px,1.944vw)'
  				}
  			],
  			sm: [
  				'max(14px,0.972vw)',
  				{
  					lineHeight: 'normal'
  				}
  			],
  			lg: [
  				'max(46px,5.556vw)',
  				{
  					lineHeight: 'max(56px,6.667vw)'
  				}
  			],
  			dropDown: [
  				'max(16px, 1vw)',
  				{
  					lineHeight: 'max(28px,2.083vw)'
  				}
  			],
  			smallText: [
  				'max(14.4px, .9vw)'
  			]
  		},
  		fontWeight: {
  			light: '300',
  			normal: '400',
  			semibold: '600',
  			bold: '700',
  			dark: '900'
  		},
  		textColor: {
  			white: '#FFFFFF',
  			primary: '#f58220',
  			secondary: '#696969',
  			dark: '#222',
  			black: '#000',
  			'light-orange': '#fff3e9',
  			danger: '#f00'
  		},
  		borderWidth: {
  			'0': '0px',
  			'2': 'max(2px,0.104vw)',
  			'4': 'max(4px,0.208vw)',
  			'8': 'max(8px,0.417vw)',
  			DEFAULT: 'max(1px,0.052vw)'
  		},
  		borderColor: {
  			primary: '#f58220',
  			white: '#FFFFFF',
  			secondary: '#dadada',
  			light: '#222222'
  		},
  		boxShadow: {
  			DEFAULT: '0px max(16px,0.833vw) max(32px,1.667vw) #1616161A',
  			none: '0 0 #0000',
  			form: '0 0 max(15px,0.781vw) rgba(0,0,0,.1)'
  		},
  		spacing: {
  			'0': '0px',
  			'1': 'max(4px,0.208vw)',
  			'2': 'max(8px,0.417vw)',
  			'3': 'max(12px,0.625vw)',
  			'4': 'max(16px,0.833vw)',
  			'5': 'max(20px,1.042vw)',
  			'6': 'max(24px,1.25vw)',
  			'7': 'max(23px,1.458vw)',
  			'8': 'max(24px,1.667vw)',
  			'9': 'max(30px,1.875vw)',
  			'10': 'max(24px,2.083vw)',
  			'11': 'max(40px,2.292vw)',
  			'12': 'max(50px,2.5vw)',
  			'14': 'max(20px,2.917vw)',
  			'16': 'max(20px,3.333vw)',
  			'20': 'max(35px,4.167vw)',
  			'24': 'max(20px,5vw)',
  			'28': 'max(40px,5.833vw)',
  			'32': 'max(112px,6.667vw)',
  			'36': 'max(128px,7.5vw)',
  			'40': 'max(60px,8.333vw)',
  			'44': 'max(100px,9.167vw)',
  			'48': 'max(100px,10vw)',
  			'52': 'max(152px,10.833vw)',
  			'56': 'max(208px,11.667vw)',
  			'60': 'max(60px,4.167vw)',
  			'64': 'max(100px,13.333vw)',
  			'72': 'max(56px,15vw)',
  			'80': 'max(192px,16.667vw)',
  			'96': 'max(320px,20vw)',
  			'97': 'max(70px,4.05vw)',
  			'98': 'max(45px, 5.556vw)',
  			'99': 'max(20px, 1.042vw)',
  			'100': 'max(30px, 2.604vw)',
  			'101': 'max(23px, 1.458vw)',
  			'102': 'max(16px, 1vw)',
  			'103': 'max(27.2px, 1.7vw)',
  			'104': 'max(24px, 1.5vw)',
  			'105': 'max(8px, .5vw)',
  			'106': 'max(23px, 1.458vw)',
  			'107': 'max(12px, .625vw)',
  			'108': 'max(24px, 2.083vw)',
  			px: '1px',
  			'0.5': 'max(2px,0.104vw)',
  			'1.5': 'max(6px,0.313vw)',
  			'2.5': 'max(10px,0.521vw)',
  			'3.5': 'max(14px,0.729vw)',
  			sm: 'max(14px,1.481vw)',
  			lg: 'max(45px,5.556vw)',
  			md: 'max(30px,2.604vw)'
  		},
  		screens: {
  			xs: '359px',
  			sm: '575px',
  			md: '768px',
  			lg: '992px',
  			xl: '1400px',
  			xxl: '1200px'
  		},
  		zIndex: {
  			'1': '1'
  		},
  		transitionProperty: {
  			width: 'width'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		width: {
  			'svg-icon-32': 'max(32px, 2vw)',
  			'svg-icon-24': 'max(24px, 1.5vw)'
  		},
  		height: {
  			'svg-icon': 'max(48px, 3.125vw)',
  			'svg-icon-32': 'max(32px, 2vw)',
  			'svg-icon-24': 'max(24px, 1.5vw)',
  			'header-height': 'calc(90vh - 100px)'
  		},
  		minHeight: {
  			'banner-height': 'calc(100vh - max(84px, 5.833vw))'
  		},
  		minWidth: {
  			'dropMenu-min-width': 'max(730px, 45.625vw)'
  		},
  		maxWidth: {
  			'dropMenu-max-width': 'max(992px, 60vw)'
  		},
  		maxHeight: {
  			'dropMenu-max-height': 'calc(100vh - 100px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
