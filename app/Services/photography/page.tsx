"use client";

import React, { useEffect, useState } from 'react';
import Layout from '@/app/components/Layout';
import TeamContacts from '@/app/components/TeamContacts';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Steps from '@/app/components/Steps';
import ScrollArrow from '@/app/components/ScrollArrow';
import { Camera, Image, PencilSimple, ShareNetwork, ArrowRight } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

const photoProjects = [
  { id: 1, image: '/Slidshow_photo/Portrait.png', title: 'Portrait Photography', description: 'Capturing personality and emotions in every shot' },
  { id: 2, image: '/Slidshow_photo/Landscape.png', title: 'Landscape Photography', description: 'Breathtaking views of nature and landscapes' },
  { id: 3, image: '/Slidshow_photo/Event.png', title: 'Event Photography', description: 'Professional documentation of your events' },
];

const photoStyles = ['Portrait', 'Landscape', 'Architecture', 'Reportage', 'Product'];

const Photography: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % photoProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <ScrollArrow />
      
      <section className="relative h-screen overflow-hidden bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="absolute inset-0">
          {photoProjects.map((project, index) => (
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
          Professional Photography Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl mb-10"
        >
          We capture your moments with perfect precision
        </motion.p>
        <motion.a 
          href="/contacts" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-full text-lg font-medium hover:from-blue-600 hover:to-teal-600 transition duration-300"
        >
          Book a Photoshoot
          <ArrowRight size={20} weight="bold" />
        </motion.a>
      </section>

      <Steps />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Photography Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoProjects.map((project) => (
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
          <div className="text-center mt-12">
            <motion.a 
              href="/gallery" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-full text-lg font-medium hover:from-blue-600 hover:to-teal-600 transition duration-300"
            >
              View Full Gallery
              <ArrowRight size={20} weight="bold" />
            </motion.a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Photography Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Camera, title: "Portrait", description: "We capture your personality and emotions in every shot." },
              { icon: Image, title: "Product", description: "Present your products in the best light." },
              { icon: PencilSimple, title: "Retouching", description: "Professional editing and retouching of your photos." },
              { icon: ShareNetwork, title: "Social Media", description: "Content optimized for your social networks." }
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
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Price List</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Basic", price: "$120", features: ["1 hour photoshoot", "10 edited photos", "Online gallery"] },
              { title: "Standard", price: "$220", features: ["2 hours photoshoot", "20 edited photos", "Online gallery", "5 printed photos"] },
              { title: "Premium", price: "$380", features: ["4 hours photoshoot", "40 edited photos", "Online gallery", "10 printed photos", "Photo album"] }
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
                  Order
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Book Your Photoshoot Date</h2>
          <p className="text-xl mb-10 text-white/80">Ready to capture your unique moments?</p>
          <motion.a 
            href="/contacts" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-full text-lg font-medium hover:from-blue-600 hover:to-teal-600 transition duration-300"
          >
            Contact Us
            <ArrowRight size={20} weight="bold" />
          </motion.a>
        </div>
      </section>

      <TeamContacts />
      
    </Layout>
  );
};

export default Photography;
