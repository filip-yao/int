import { Aperture, Globe, ShareNetwork, Heart, MapPin, Envelope } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer 
      className="w-full py-6 relative overflow-hidden"
      style={{
        background: "rgba(10, 10, 30, 0.7)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 -4px 30px rgba(0, 0, 0, 0.1)"
      }}
    >
      {/* Decorative elements for glassmorphism effect */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-5 right-20 w-32 h-32 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div 
          className="p-5 rounded-xl w-full md:w-auto"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.05)"
          }}
        >
          <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
            Basic Information
          </h3>
          
          <div className="flex items-center gap-2 mb-2 group">
            <Envelope size={18} weight="bold" className="text-blue-300" />
            <span className="text-white/70">Email:</span>
            <Link 
              href="mailto:info@kosmoproduction.eu"
              className="text-white/90 hover:text-blue-300 transition-colors duration-300 relative"
            >
              info@kosmoproduction.eu
              <div className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></div>
            </Link>
          </div>
          
          <div className="text-white/60 text-sm mt-4">
            Copyright © 2025 VAON s.r.o.
          </div>
        </div>

        <div 
          className="hidden md:flex flex-col items-center p-4 rounded-xl"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.05)"
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Heart size={18} weight="fill" className="text-pink-400" />
            <span className="font-medium text-white/90">MADE WITH LOVE IN</span>
          </div>
          
          <Link 
            href="https://en.wikipedia.org/wiki/Moravia"
            className="flex items-center gap-2 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300 hover:from-blue-300 hover:to-purple-300 transition-all duration-500"
          >
            <MapPin size={20} weight="bold" />
            MORAVIA
          </Link>
        </div>
        
        <div 
          className="hidden lg:flex items-center gap-6 p-4 rounded-xl"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.05)"
          }}
        >
          <Link 
            href="#" 
            className="text-white/70 hover:text-blue-300 transition-colors duration-300"
            aria-label="Social Media"
          >
            <ShareNetwork size={22} weight="bold" />
          </Link>
          <Link 
            href="#" 
            className="text-white/70 hover:text-blue-300 transition-colors duration-300"
            aria-label="Website"
          >
            <Globe size={22} weight="bold" />
          </Link>
          <Link 
            href="#" 
            className="text-white/70 hover:text-blue-300 transition-colors duration-300"
            aria-label="Photography"
          >
            <Aperture size={22} weight="bold" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
