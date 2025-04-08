"use client";

import React, { useEffect, useState } from 'react';
import Layout from '@/app/components/Layout';
import TeamContacts from '@/app/components/TeamContacts';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Steps from '@/app/components/Steps';
import ScrollArrow from '@/app/components/ScrollArrow';
import { ChatCircle, ChartLine, Calendar, ShareNetwork, ArrowRight } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

const socialProjects = [
{ id: 1, image: '/Slidshow_social/Instagram.png', title: 'Kampaň na Instagramu pro módní značku', description: 'Zvýšení engagementu a prodejů pomocí influencer marketingu' },
{ id: 2, image: '/Slidshow_social/Facebook.png', title: 'Facebook strategie pro e-shop', description: 'Optimalizace obsahu a reklam pro vyšší konverze' },
];

const socialPlatforms = ['Instagram', 'Facebook', 'LinkedIn', 'TikTok', 'Twitter'];

const SocialMedia: React.FC = () => {
const [activeSlide, setActiveSlide] = useState(0);

useEffect(() => {
const timer = setInterval(() => {
setActiveSlide((prev) => (prev + 1) % socialProjects.length);
}, 5000);
return () => clearInterval(timer);
}, []);

return (
<Layout>
<ScrollArrow />
<section className="relative h-screen overflow-hidden bg-gradient-to-b from-blue-900 to-gray-900">
    <div className="absolute inset-0">
      {socialProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === activeSlide ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm flex items-center justify-center">
            <div className="text-center text-white p-8 rounded-xl" style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)"
            }}>
              <h3 className="text-4xl font-bold mb-4">{project.title}</h3>
              <p className="text-xl">{project.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>

  <section className="text-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-blue-900 text-white">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300"
    >
      Profesionální správa sociálních sítí
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-2xl mb-10"
    >
      Zvyšujeme vaši online přítomnost a engagementu
    </motion.p>
    <motion.a 
      href="/contacts" 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-full text-lg font-medium hover:from-blue-600 hover:to-teal-600 transition duration-300"
    >
      Kontaktujte nás
      <ArrowRight size={20} weight="bold" />
    </motion.a>
  </section>

  <Steps />

  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900 to-gray-900">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-white">Naše úspěšné projekty</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {socialProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl relative group"
          >
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-white/80">{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-blue-900 text-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Naše služby správy sociálních sítí</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: ChatCircle, title: "Community Management", description: "Budování a správa online komunity vaší značky." },
          { icon: ChartLine, title: "Analýza a reportování", description: "Detailní přehled výkonu vašich sociálních sítí." },
          { icon: Calendar, title: "Plánování obsahu", description: "Strategické plánování a tvorba engagujícího obsahu." },
          { icon: ShareNetwork, title: "Reklamní kampaně", description: "Cílené reklamní kampaně pro maximální dosah." }
        ].map((item, index) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center p-6 rounded-2xl"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)"
            }}
          >
            <item.icon size={60} className="text-teal-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-white/80">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900 to-gray-900">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-white">Cenová nabídka</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Základní", price: "5 000 Kč/měsíc", features: ["Správa 2 sociálních sítí", "10 příspěvků měsíčně", "Základní reporting", "E-mailová podpora"] },
          { title: "Pro", price: "10 000 Kč/měsíc", features: ["Správa 4 sociálních sítí", "20 příspěvků měsíčně", "Pokročilý reporting", "Prioritní podpora", "1 reklamní kampaň měsíčně"] },
          { title: "Enterprise", price: "Dle potřeb", features: ["Správa všech sociálních sítí", "Neomezený počet příspěvků", "Detailní analýzy a reporty", "24/7 podpora", "Komplexní reklamní strategie"] }
        ].map((plan, index) => (
          <motion.div 
            key={plan.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center p-8 rounded-2xl"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)"
            }}
          >
            <h3 className="text-2xl font-bold mb-2 text-white">{plan.title}</h3>
            <p className="text-3xl font-bold mb-6 text-teal-400">{plan.price}</p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="text-white/80">{feature}</li>
              ))}
            </ul>
            <motion.a 
              href="/contacts" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-6 rounded-full text-lg font-medium hover:from-blue-600 hover:to-teal-600 transition duration-300"
            >
              Vybrat plán
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900 to-gray-900">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 text-white">Začněte s profesionální správou sociálních sítí</h2>
      <p className="text-xl mb-10 text-white/80">Připraveni posunout vaši online prezenci na další úroveň?</p>
      <motion.a 
        href="/contacts" 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-full text-lg font-medium hover:from-blue-600 hover:to-teal-600 transition duration-300"
      >
        Kontaktujte nás
        <ArrowRight size={20} weight="bold" />
      </motion.a>
    </div>
  </section>

  <TeamContacts />
  
</Layout>
);
}
export default SocialMedia;