import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-satoshi',
})

export const fonts = {
  sans: GeistSans,
  mono: GeistMono,
  display: spaceGrotesk,
}

export const fontCssVariables = `
html {
  font-family: ${fonts.sans.style.fontFamily};
  --font-sans: ${fonts.sans.variable};
  --font-mono: ${fonts.mono.variable};
  --font-satoshi: ${fonts.display.variable};
}
`
