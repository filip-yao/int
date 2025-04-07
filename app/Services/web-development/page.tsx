"use client";

import React, { useEffect, useState } from 'react';
import Layout from '@/app/components/Layout';
import TeamContacts from '@/app/components/TeamContacts';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Steps from '@/app/components/Steps';
import ScrollArrow from '@/app/components/ScrollArrow';
import { Aperture, Camera, PenNib, ShareNetwork } from '@phosphor-icons/react';

const projects = [
  { id: 1, image: '/Slidshow_web/Renata.png', title: 'Osobní web a E-shop pro lektorku mandarínštiny', description: 'Komplexní e-commerce řešení s integrací platebního systému' },
  { id: 2, image: '/Slidshow_web/Oskar.png', title: 'Osobní web a portfólio', description: 'Statickí stránka v s technologií React' },

];

const technologies = ['React', 'Next.js', 'Tailwind CSS', 'WordPress'];

const Home: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />
      <ScrollArrow />
      <section className="relative h-screen overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                index === activeSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-4xl font-bold mb-2">{project.title}</h3>
                  <p className="text-xl">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Moderní webová řešení</h1>
        <p className="text-xl mb-8">Vytváříme inovativní digitální zážitky</p>
        <a href="/contacts" className="bg-primary text-white py-3 px-8 rounded-full text-sm font-medium hover:bg-opacity-90 transition duration-300">
          Kontaktujte nás
        </a>
      </section>

      <Steps />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Naše projekty</h2>
          <div className="relative h-64 sm:h-96 overflow-hidden rounded-lg">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                  index === activeSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8  text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Spolupráce s našimi experty</h2>
          <p className="text-lg mb-8 text-center">
            Naši weboví vývojáři úzce spolupracují s našimi experty na grafiku, fotografii, video a sociální sítě, aby zajistili, že všechny prvky vašeho projektu budou dokonale sladěny.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-black bg-white p-4 rounded-lg">
              <PenNib size={60} className="text-primary mx-auto m-4" />
              <h3 className="text-xl font-semibold">Grafika</h3>
              <p className="mt-2">Vytváříme vizuálně atraktivní grafiku, která zaujme vaše publikum.</p>
            </div>
            <div className="text-center text-black bg-white p-4 rounded-lg">
              <Aperture size={60} className="text-primary mx-auto m-4" />
              <h3 className="text-xl font-semibold">Fotografie</h3>
              <p className="mt-2">Profesionální fotografie, které dodají vašemu projektu autenticitu.</p>
            </div>
            <div className="text-center text-black bg-white p-4 rounded-lg">
              <Camera size={60} className="text-primary mx-auto m-4" />
              <h3 className="text-xl font-semibold">Video</h3>
              <p className="mt-2">Kreativní videa, která vyprávějí váš příběh a zaujmou diváky.</p>
            </div>
            <div className="text-center text-black bg-white p-4 rounded-lg ">
             <ShareNetwork size={60} className="text-primary mx-auto m-4" />
              <h3 className="text-xl font-semibold">Sociální sítě</h3>
              <p className="mt-2">Efektivní strategie pro správu vašich sociálních sítí a zvýšení dosahu.</p>
            </div>
          </div>
        </div>
      </section>

      

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Pojďme spolupracovat</h2>
          <p className="text-xl mb-8 text-white">Připraveni posunout váš projekt na další úroveň?</p>
          <a href="/contacts" className="bg-primary text-white py-3 px-8 rounded-full text-sm font-medium hover:bg-opacity-90 transition duration-300">
            Napište nám
          </a>
        </div>
      </section>

      <TeamContacts />
      <Footer />
    </>
  );
};

export default Home;


