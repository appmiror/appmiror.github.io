import { Link } from "react-router-dom";
import { Search, Menu, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[hsl(var(--apk-orange))] to-[hsl(var(--apk-orange-light))] text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="bg-white text-[hsl(var(--apk-orange))] font-bold text-2xl px-3 py-2 rounded">
              AM
            </div>
            <div>
              <h1 className="text-2xl font-bold">APKMirror</h1>
              <p className="text-xs opacity-90">Free and safe Android APK downloads</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search apps..."
                className="pl-10 bg-white/90 border-0 text-gray-900 placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <nav className="border-t border-white/20">
          <ul className="flex gap-6 py-3 text-sm">
            <li>
              <Link to="/developers" className="hover:opacity-80 transition-opacity font-medium">
                All Developers
              </Link>
            </li>
            <li>
              <Link to="/categories" className="hover:opacity-80 transition-opacity font-medium">
                All Categories
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:opacity-80 transition-opacity font-medium">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:opacity-80 transition-opacity font-medium">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/premium" className="hover:opacity-80 transition-opacity font-medium">
                Premium
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
