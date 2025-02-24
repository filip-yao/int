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

const TechStack = () => {
  const categories = [
    {
      name: "Web Development",
      items: [
        {
          icon: <SiReact className="w-6 h-6 text-[#06B6D4]" />,
          title: "React",
          url: "https://react.dev/",
        },
        {
          icon: <SiNextdotjs className="w-6 h-6 text-black" />,
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
          icon: <SiVercel className="w-6 h-6 text-black" />,
          title: "Vercel",
          url: "https://vercel.com/",
        },
        {
          icon: <SiGithub className="w-6 h-6 text-black" />,
          title: "GitHub",
          url: "https://github.com/",
        },
        {
          icon: <Image src="https://cdn.european-alternatives.eu/productLogo/40b3ede3-3459-4939-8bfc-566811033cb9/responsive-images/telemetrydeck-logo___productLogoWebp_501_501.webp" width={35} height={35} alt="Telemetry Deck" />,
          title: "Telemetry Deck",
          url: "https://telemetrydeck.com/",
        },
      ],
      bgColor: "bg-blue-50",
    },
    {
      name: "Grafika",
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
      bgColor: "bg-green-50",
    },
    {
      name: "Foto + Video",
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
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Naše technologie</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`${category.bgColor} rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-black border-b-2 border-black pb-2">
                {category.name}
              </h3>
              <div className="space-y-">
                {category.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white transition-colors duration-200 cursor-pointer group"
                  >
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                      <span className="shrink-0 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
