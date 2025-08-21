import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'var(--ring)',
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)'
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)'
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				},
				sidebar: {
					DEFAULT: 'var(--sidebar-background)',
					foreground: 'var(--sidebar-foreground)',
					primary: 'var(--sidebar-primary)',
					'primary-foreground': 'var(--sidebar-primary-foreground)',
					accent: 'var(--sidebar-accent)',
					'accent-foreground': 'var(--sidebar-accent-foreground)',
					border: 'var(--sidebar-border)',
					ring: 'var(--sidebar-ring)'
				},
				// Radix UI Violet Colors
				violet: {
					1: 'var(--violet-1)',
					2: 'var(--violet-2)',
					3: 'var(--violet-3)',
					4: 'var(--violet-4)',
					5: 'var(--violet-5)',
					6: 'var(--violet-6)',
					7: 'var(--violet-7)',
					8: 'var(--violet-8)',
					9: 'var(--violet-9)',
					10: 'var(--violet-10)',
					11: 'var(--violet-11)',
					12: 'var(--violet-12)',
					a1: 'var(--violet-a1)',
					a2: 'var(--violet-a2)',
					a3: 'var(--violet-a3)',
					a4: 'var(--violet-a4)',
					a5: 'var(--violet-a5)',
					a6: 'var(--violet-a6)',
					a7: 'var(--violet-a7)',
					a8: 'var(--violet-a8)',
					a9: 'var(--violet-a9)',
					a10: 'var(--violet-a10)',
					a11: 'var(--violet-a11)',
					a12: 'var(--violet-a12)',
					contrast: 'var(--violet-contrast)',
					surface: 'var(--violet-surface)',
					indicator: 'var(--violet-indicator)',
					track: 'var(--violet-track)'
				},
				// Radix UI Gray Colors
				gray: {
					1: 'var(--gray-1)',
					2: 'var(--gray-2)',
					3: 'var(--gray-3)',
					4: 'var(--gray-4)',
					5: 'var(--gray-5)',
					6: 'var(--gray-6)',
					7: 'var(--gray-7)',
					8: 'var(--gray-8)',
					9: 'var(--gray-9)',
					10: 'var(--gray-10)',
					11: 'var(--gray-11)',
					12: 'var(--gray-12)',
					a1: 'var(--gray-a1)',
					a2: 'var(--gray-a2)',
					a3: 'var(--gray-a3)',
					a4: 'var(--gray-a4)',
					a5: 'var(--gray-a5)',
					a6: 'var(--gray-a6)',
					a7: 'var(--gray-a7)',
					a8: 'var(--gray-a8)',
					a9: 'var(--gray-a9)',
					a10: 'var(--gray-a10)',
					a11: 'var(--gray-a11)',
					a12: 'var(--gray-a12)',
					contrast: 'var(--gray-contrast)',
					surface: 'var(--gray-surface)',
					indicator: 'var(--gray-indicator)',
					track: 'var(--gray-track)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-success': 'var(--gradient-success)',
				'gradient-motivation': 'var(--gradient-motivation)',
				'gradient-background': 'var(--gradient-background)'
			},
			boxShadow: {
				'learning': 'var(--shadow-learning)',
				'success': 'var(--shadow-success)',
				'glow': 'var(--shadow-glow)',
				'hover': 'var(--shadow-hover)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)'
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
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px var(--violet-a4)' },
					'50%': { boxShadow: '0 0 40px var(--violet-a6)' }
				},
				'liquid-shimmer': {
					'0%': { backgroundPosition: '-200px 0' },
					'100%': { backgroundPosition: 'calc(200px + 100%) 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'liquid-shimmer': 'liquid-shimmer 2s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
