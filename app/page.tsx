"use client";

import Image from "next/image";
import Layout from "./components/Layout";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Title from "./components/Title";
import Project from "./components/Project";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center pt-80 h-screen">
        <Image
          src="/Decoration.png"
          alt="Decoration"
          width={800}
          height={0}
          className="absolute top-10 opacity-70 z-0 pointer-events-none"
        />

        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-4xl font-semibold">Kosmo Production</h1>
          <div className="flex flex-col opacity-50 text-xl text-center font-normal">
            <span>Social media management, web development,</span>
            <span>web design and photography</span>
          </div>

          <button className="flex items-center gap-2 bg-primary hover:bg-opacity-90 transition-all rounded-full px-6 py-2 mt-12 font-semibold border border-white border-opacity-20">
            <span>Explore</span>
            <MagnifyingGlass weight="bold" />
          </button>
        </div>
      </div>

      <div>
        <Title title="Projects" />
        <div className="grid grid-cols-4">
          <Project
            title="Chinese courses"
            subtitle="Wordpress  •  Learn more"
            image="Renata Mirková.jpg"
          />
        </div>
      </div>

      <Footer></Footer>
    </Layout>
  );
}
