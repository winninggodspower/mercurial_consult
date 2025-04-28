import { Inter, Poppins } from 'next/font/google'
import localFont from 'next/font/local'
 
// define your variable fonts
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
}) 
export { inter, poppins }