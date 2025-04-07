// components/TechStack.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiWordpress,
  SiTypescript,
  SiVercel,
  SiFigma,
  SiGithub,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { motion } from "framer-motion";

const TechStack = () => {
  const categories = [
    {
      name: "Web Development",
      icon: <SiReact className="w-6 h-6" />,
      gradient: "from-blue-400 to-cyan-400",
      iconColor: "text-blue-400",
      items: [
        {
          icon: <SiReact className="w-6 h-6 text-[#06B6D4]" />,
          title: "React",
          url: "https://react.dev/",
        },
        {
          icon: <SiNextdotjs className="w-6 h-6 text-white" />,
          title: "Next.js",
          url: "https://nextjs.org/",
        },
        {
          icon: <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" />,
          title: "Tailwind CSS",
          url: "https://tailwindcss.com/",
        },
        {
          icon: <SiWordpress className="w-6 h-6 text-[#21759B]" />,
          title: "WordPress",
          url: "https://wordpress.org/",
        },
        {
          icon: <SiTypescript className="w-6 h-6 text-[#3178C6]" />,
          title: "TypeScript",
          url: "https://www.typescriptlang.org/",
        },
        {
          icon: <SiVercel className="w-6 h-6 text-white" />,
          title: "Vercel",
          url: "https://vercel.com/",
        },
        {
          icon: <SiGithub className="w-6 h-6 text-white" />,
          title: "GitHub",
          url: "https://github.com/",
        },
        {
          icon: <Image src="https://cdn.european-alternatives.eu/productLogo/40b3ede3-3459-4939-8bfc-566811033cb9/responsive-images/telemetrydeck-logo___productLogoWebp_501_501.webp" width={35} height={35} alt="Telemetry Deck" />,
          title: "Telemetry Deck",
          url: "https://telemetrydeck.com/",
        },
      ],
    },
    {
      name: "Grafika",
      icon: <SiFigma className="w-6 h-6" />,
      gradient: "from-purple-400 to-pink-400",
      iconColor: "text-purple-400",
      items: [
        {
          icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" width={24} height={24} alt="Adobe Illustrator" />,
          title: "Illustrator",
          url: "https://www.adobe.com/products/illustrator.html",
        },
        {
          icon: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" width={24} height={24} alt="Adobe Photoshop" />,
          title: "Photoshop",
          url: "https://www.adobe.com/products/photoshop.html",
        },
        {
          icon: <SiFigma className="w-6 h-6 text-[#F24E1E]" />,
          title: "Figma",
          url: "https://www.figma.com/",
        },
      ],
    },
    {
      name: "Foto + Video",
      icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg" width={24} height={24} alt="Adobe Premiere Pro" className="opacity-90" />,
      gradient: "from-green-400 to-teal-400",
      iconColor: "text-green-400",
      items: [
        {
          icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg" width={24} height={24} alt="Adobe Lightroom" />,
          title: "Lightroom",
          url: "https://www.adobe.com/products/photoshop-lightroom.html",
        },
        {
          icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg" width={24} height={24} alt="Adobe Premiere Pro" />,
          title: "Premiere Pro",
          url: "https://www.adobe.com/products/premiere.html",
        },
        {
          icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg" width={24} height={24} alt="Adobe After Effects" />,
          title: "After Effects",
          url: "https://www.adobe.com/products/aftereffects.html",
        },
        {
          icon: <Image src="https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg" width={24} height={24} alt="DaVinci Resolve" />,
          title: "DaVinci Resolve",
          url: "https://www.blackmagicdesign.com/products/davinciresolve/",
        },
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 relative">
      {/* Decorative background elements */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-green-500 rounded-full filter blur-3xl opacity-5"></div>
      </div>
      
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
      >
        Naše technologie
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(20, 20, 40, 0.4)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)"
            }}
          >
            <div className="p-6">
              <div className={`flex items-center gap-3 mb-6 pb-3 border-b border-white/10`}>
                <div className={`p-2 rounded-lg bg-gradient-to-br ${category.gradient} bg-opacity-20`}>
                  <span className={`${category.iconColor}`}>{category.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.name}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + itemIndex * 0.05 }}
                  >
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer group"
                    >
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: "rgba(255, 255, 255, 0.05)",
                          backdropFilter: "blur(5px)",
                          border: "1px solid rgba(255, 255, 255, 0.1)"
                        }}
                      >
                        <span className="shrink-0">
                          {item.icon}
                        </span>
                      </div>
                      <span className="text-white/80 font-medium group-hover:text-white transition-colors">
                        {item.title}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
