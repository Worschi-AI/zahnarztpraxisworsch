
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { X, Menu, Home, Building, Users, List, Mail } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const menuItems = [
    { title: "Startseite", url: "/", icon: Home },
    { title: "Praxis", url: "/about", icon: Building },
    { title: "Team", url: "/team", icon: Users },
    { title: "Leistungen", url: "/services", icon: List },
    { title: "Kontakt", url: "/contact", icon: Mail },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-sans font-bold text-dental-blue">
            Zahnarztpraxis Worsch
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-dental-blue transition-colors hover:scale-105 transform transition-all duration-300">
            Startseite
          </Link>
          <Link to="/about" className="font-medium hover:text-dental-blue transition-colors hover:scale-105 transform transition-all duration-300">
            Praxis
          </Link>
          <Link to="/team" className="font-medium hover:text-dental-blue transition-colors hover:scale-105 transform transition-all duration-300">
            Team
          </Link>
          <Link to="/services" className="font-medium hover:text-dental-blue transition-colors hover:scale-105 transform transition-all duration-300">
            Leistungen
          </Link>
          <Link to="/contact" className="font-medium hover:text-dental-blue transition-colors hover:scale-105 transform transition-all duration-300">
            Kontakt
          </Link>
          <Button asChild className="bg-dental-turquoise hover:bg-dental-blue text-white hover:scale-105 transform transition-all duration-300">
            <Link to="/appointment">Termin buchen</Link>
          </Button>
        </div>

        {/* Mobile Menu with Sheet Component */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden p-2 rounded-md hover:bg-dental-beige hover:scale-105 transform transition-all duration-300">
              <Menu className="h-6 w-6 text-dental-blue" />
            </button>
          </SheetTrigger>
          <SheetContent className="w-full pt-4 bg-white">
            {/* Header mit Logo/Praxisname */}
            <div className="flex items-center justify-between mb-8 px-2">
              <div className="flex items-center">
                <span className="text-lg font-sans font-bold text-dental-blue">
                  Zahnarztpraxis Worsch
                </span>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-col px-2">
              {menuItems.map((item, index) => (
                <React.Fragment key={item.title}>
                  <Link 
                    to={item.url} 
                    className={`py-4 px-4 text-lg font-medium rounded-md transition-all flex items-center gap-3 relative ${
                      isActiveRoute(item.url) 
                        ? 'text-dental-blue bg-dental-beige/50' 
                        : 'hover:bg-dental-beige hover:text-dental-blue'
                    }`}
                  >
                    {/* Aktiver Indikator */}
                    {isActiveRoute(item.url) && (
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-dental-turquoise rounded-r-full"></div>
                    )}
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                  {index < menuItems.length - 1 && (
                    <Separator className="my-1 bg-gray-200/50" />
                  )}
                </React.Fragment>
              ))}
              
              {/* Termin buchen Button mit mehr Abstand */}
              <div className="mt-6 px-4">
                <Button asChild className="w-full bg-dental-turquoise hover:bg-dental-blue text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link to="/appointment">Termin buchen</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
