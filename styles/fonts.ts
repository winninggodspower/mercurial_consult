import { Inter, Poppins } from 'next/font/google'
 
// define your variable fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
}) 
export { inter, poppins }