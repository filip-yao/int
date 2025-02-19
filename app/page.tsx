"use client";

import Image from "next/image";
import Layout from "./components/Layout";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Title from "./components/Title";
import Project from "./components/Project";
import TeamContacts from "./components/TeamContacts";
import ServicesSection from "./components/ServicesSection";
import ProjectsGallery from "./components/ProjectsGallery";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center md:pt-80  lg:pt-80 pt-40  h-screen">
        <Image
          src="/Decoration.png"
          alt="Decoration"
          width={800}
          height={0}
          className="absolute md:top-10 top-52 opacity-70 z-0 pointer-events-none"
        />

        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-4xl font-semibold sm:text-center">
            Kosmo Production
          </h1>
          <div className="flex flex-col opacity-50 text-xl text-center font-normal">
            <span>
              Weby co lákají, grafiky co berou dech,sociální sítě v pohybu
            </span>

            <span>váš success online startuje zde!</span>
          </div>
          <Link href="#codelame">
            <button className="flex items-center gap-2 bg-primary hover:bg-opacity-90 transition-all rounded-full px-6 py-2 mt-12 font-semibold border border-white border-opacity-20">
              <span>Objevujte</span>
              <MagnifyingGlass weight="bold" />
            </button>
          </Link>
        </div>
      </div>

      <div id="codelame">
        <ServicesSection />
      </div>
      <ProjectsGallery />
      <TeamContacts />
    </Layout>
  );
}
