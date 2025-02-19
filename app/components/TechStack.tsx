// components/TechStack.tsx
"use client";
import Link from "next/link";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiWordpress,
  SiTypescript,
  SiVercel,
  SiAdobe,
  SiFigma,
  SiRescript,
  SiGithub,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

const TechStack = () => {
  const categories = [
    {
      name: "Web Development",
      items: [
        {
          icon: <SiReact className="w-6 h-6 text-[#61DAFB]" />,
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
          icon: <TbApi className="w-6 h-6 text-purple-600" />,
          title: "Telemetry Deck",
          url: "https://telemetrydeck.com/",
        },
      ],
    },
    {
      name: "Grafika",
      items: [
        {
          icon: <SiAdobe className="w-6 h-6 text-[#FF9A00]" />,
          title: "Illustrator",
          url: "https://www.adobe.com/products/illustrator.html",
        },
        {
          icon: <SiAdobe className="w-6 h-6 text-[#31C5F0]" />,
          title: "Photoshop",
          url: "https://www.adobe.com/products/photoshop.html",
        },
        {
          icon: <SiAdobe className="w-6 h-6 text-[#3AFE00]" />,
          title: "Lightroom",
          url: "https://www.adobe.com/products/photoshop-lightroom.html",
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
      items: [
        {
          icon: <SiAdobe className="w-6 h-6 text-[#00005B]" />,
          title: "Premiere Pro",
          url: "https://www.adobe.com/products/premiere.html",
        },
        {
          icon: <SiAdobe className="w-6 h-6 text-[#D291FF]" />,
          title: "After Effects",
          url: "https://www.adobe.com/products/aftereffects.html",
        },
        {
          icon: <SiRescript className="w-6 h-6 text-[#1DB954]" />,
          title: "DaVinci Resolve",
          url: "https://www.blackmagicdesign.com/products/davinciresolve/",
        },
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Naše technologie</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b-2 pb-2">
                {category.name}
              </h3>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
                  >
                    <span className="shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
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
