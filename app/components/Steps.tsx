import { NotePencil, GearSix, ChartBarHorizontal, ShieldCheck, ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function Steps() {
const steps = [
{
title: "Konzultace",
description: "Naše konzultace jsou bezplatné a nastíní Vám, jaké možnosti můžete využít.",
icon: <NotePencil size={60} weight="duotone" className="text-black" />,
gradient: "from-blue-400 to-indigo-500",
},
{
title: "Návrh řešení",
description: "Předložení optimálního řešení pro Vaši představu o dosažení výsledku.",
icon: <GearSix size={60} weight="duotone" className="text-black" />,
gradient: "from-purple-400 to-pink-500",
},
{
title: "Podpora",
description: "Klientská péče v průběhu spolupráce. Analýzy výsledků a optimalizace.",
icon: <ChartBarHorizontal size={60} weight="duotone" className="text-black" />,
gradient: "from-green-400 to-teal-500",
},
{
title: "Legislativa",
description: "Dbáme na dodržování požadavků v legislativě a licenčních právech.",
icon: <ShieldCheck size={60} weight="duotone" className="text-black" />,
gradient: "from-yellow-400 to-orange-500",
},
];

return (
<div className="relative text-white py-24 overflow-hidden">
{/* Decorative background elements */}
<div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden">
<div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
<div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
<div className="absolute top-1/2 left-1/3 w-60 h-60 bg-pink-500 rounded-full filter blur-3xl opacity-5"></div>
</div>
  {/* Background image with overlay */}
  <div 
    className="absolute inset-0 bg-cover bg-center" 
    style={{ 
      backgroundImage: 'url(/background.jpg)',
      opacity: 0.1
    }}
  ></div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-4">
        Proč právě s námi? <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">Jak pracujeme</span>
      </h2>
      <p className="mt-4 text-xl text-white/70 max-w-3xl mx-auto">
        Neztrácejte drahocenný čas. Využijte našich nezávazných konzultací a ověřte si, jaké výsledky vám můžeme přinést.
      </p>
    </motion.div>

    {/* Steps */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <motion.div 
          key={index} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="rounded-2xl p-6 text-center relative transition-all duration-300 hover:translate-y-[-8px] group"
          style={{
            background: "rgba(20, 20, 40, 0.4)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)"
          }}
        >
          {/* Icon */}
          <div className={`p-4 rounded-xl mb-6 bg-gradient-to-br ${step.gradient} bg-opacity-20 inline-block`}>
            {step.icon}
          </div>
          
          {/* Step title */}
          <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
          
          {/* Step description */}
          <p className="text-white/70 leading-relaxed">{step.description}</p>
          
          {/* Decorative arrow for desktop */}
          {index !== steps.length - 1 && (
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block z-10">
              <ArrowRight 
                size={24} 
                weight="bold" 
                className="text-white/30 ml-6" 
              />
            </div>
          )}
          
          {/* Hover effect overlay */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))`,
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(12px)"
            }}
          ></div>
        </motion.div>
      ))}
    </div>
  </div>
</div>
);
}
