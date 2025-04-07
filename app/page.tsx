"use client";

import Image from "next/image";
import Layout from "./components/Layout";
import { MagnifyingGlass, Code, Sparkle, PaintBucket, Globe } from "@phosphor-icons/react";
import Title from "./components/Title";
import Project from "./components/Project";
import TeamContacts from "./components/TeamContacts";
import ServicesSection from "./components/ServicesSection";
import ProjectsGallery from "./components/ProjectsGallery";
import Link from "next/link";
import TechStack from "./components/TechStack";
import ScrollArrow from "./components/ScrollArrow";
import { motion } from "framer-motion";

export default function Home() {
return (
<Layout>
<ScrollArrow />
  {/* Hero Section with gradient overlay */}
  <div className="relative flex flex-col items-center md:pt-60 lg:pt-50 pt-40 pb-40 overflow-hidden">
    {/* Decorative background elements */}
    <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-pink-500 rounded-full filter blur-3xl opacity-5"></div>
    </div>
    
    {/* Gradient overlay for smooth transition */}
    <div 
      className="absolute -z-5 bottom-0 left-0 w-full h-40"
      style={{
        background: "linear-gradient(to bottom, transparent, rgba(24, 24, 74, 1))"
      }}
    ></div>
    
    <Image
      src="/Decoration.png"
      alt="Decoration"
      width={800}
      height={0}
      className="absolute md:top-10 top-52 opacity-70 z-0 pointer-events-none"
    />

    <motion.div 
      className="flex flex-col gap-6 items-center z-10 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Kosmo Production
      </motion.h1>
      
      <motion.div 
        className="flex flex-col text-xl md:text-2xl text-center font-medium text-white/70 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <span>
          Weby co lákají, grafiky co berou dech, sociální sítě v pohybu
        </span>
        <span>váš success online startuje zde!</span>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link href="#codelame">
          <button 
            className="flex items-center gap-3 px-8 py-3 mt-10 rounded-full font-semibold transition-all duration-300 hover:translate-y-[-5px] group"
            style={{
              background: "linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(59, 130, 246, 0.8))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
            }}
          >
            <span className="text-white">Objevujte</span>
            <MagnifyingGlass weight="bold" className="text-white group-hover:rotate-12 transition-transform duration-300" size={22} />
          </button>
        </Link>
      </motion.div>
    </motion.div>
    
    {/* Glass card decoration with icons */}
    <motion.div 
      className="absolute bottom-20 left-10 w-32 h-32 rounded-2xl hidden lg:block"
      initial={{ opacity: 0, rotate: -10 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)"
      }}
    >
      <div className="flex items-center justify-center h-full">
        <Code size={42} weight="duotone" className="text-purple-300" />
      </div>
    </motion.div>
    
    <motion.div 
      className="absolute top-40 right-20 w-24 h-24 rounded-2xl hidden lg:block"
      initial={{ opacity: 0, rotate: 10 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)"
      }}
    >
      <div className="flex items-center justify-center h-full">
        <PaintBucket size={32} weight="duotone" className="text-blue-300" />
      </div>
    </motion.div>
    
    <motion.div 
      className="absolute top-80 left-20 w-20 h-20 rounded-2xl hidden lg:block"
      initial={{ opacity: 0, rotate: -5 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)"
      }}
    >
      <div className="flex items-center justify-center h-full">
        <Globe size={28} weight="duotone" className="text-green-300" />
      </div>
    </motion.div>
  </div>

  {/* Services Section */}
  <motion.div 
    id="codelame"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <ServicesSection />
  </motion.div>
  
  {/* Projects Gallery */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <ProjectsGallery />
  </motion.div>
  
  {/* Tech Stack */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <TechStack />
  </motion.div>
  
  {/* Team Contacts */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <TeamContacts />
  </motion.div>
</Layout>
);
}