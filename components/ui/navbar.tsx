import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export function Navbar() {
  return (
    <header className="w-full p-4 md:px-10">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/Mercurial-Logo.svg" alt="" />
        </Link>

        {/* Navigation Links - Simple horizontal menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-semibold text-dark hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/#about-us" className="text-sm font-semibold text-hash hover:text-blue-600 transition-colors">
            About Us
          </Link>
          <Link href="/training" className="text-sm font-semibold text-hash hover:text-blue-600 transition-colors">
            Training
          </Link>
          <Link
            href="/consultation"
            className="text-sm font-semibold text-hash hover:text-blue-600 transition-colors"
          >
            Consultation
          </Link>
          <Link
            href="/visa-application"
            className="text-sm font-semibold text-hash hover:text-primary transition-colors"
          >
            Visa Application
          </Link>
          <Link href="/contact-us" className="text-sm font-semibold text-hash hover:text-primary transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Right Side - Contact Button and Language Selector */}
        <div className="flex items-center gap-4">
          <Button className="bg-primary hover:bg-blue-700 rounded-sm px-8 !py-6 md:px-10 hover:cursor-pointer" >Contact Us</Button>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium">
              EN <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Français</DropdownMenuItem>
              <DropdownMenuItem>Español</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
