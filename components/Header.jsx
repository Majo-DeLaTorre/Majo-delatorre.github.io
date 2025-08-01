import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "@/components/Nav"
import MobileNav from "./MobileNav";


const Header = () => {
  return (
    <header className="py-8 pl-4 xl:py-12 text-black font-sans">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Majo<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav and hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button variant="outline"> Hire me</Button>
          </Link>
        </div>
        
        {/*mobile nav*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
          
        </div>
      </header>
  )
};

export default Header