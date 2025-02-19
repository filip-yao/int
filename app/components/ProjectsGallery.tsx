import { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import { ArrowRight, ArrowLeft, Plus } from "@phosphor-icons/react";
import Link from "next/link";

const ProjectsGallery = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Osobní web a E-shop pro lektorku mandarinštiny",
      image: "/projects/renca_web.png",
      description: "Komplexní e-commerce řešení s integrací platebního systému",
      detailp: "https://renatamirkova.com",
    },

    // Přidejte další projekty...
  ];

  const handleNavigate = (direction: "next" | "prev") => {
    if (selectedProject === null) return;

    const newIndex =
      direction === "next"
        ? (selectedProject + 1) % projects.length
        : (selectedProject - 1 + projects.length) % projects.length;

    setSelectedProject(newIndex);
  };

  return (
    <section className="py-16 px-4 ">
      <h2 className="text-3xl font-bold text-center mb-12">Naše projekty</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            onClick={() => {
              setSelectedProject(index);
              setIsOpen(true);
            }}
          >
            <div className="aspect-square relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <div className="absolute p-2 inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Plus size={48} className="text-white  animate-pulse" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-[#18184A] to-background ">
              <h3 className="text-white text-lg  font-semibold">
                {project.title}
              </h3>
              <p className="text-white text-sm mt-1">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="outline-none max-w-4xl mx-auto my-12"
        overlayClassName="fixed inset-0 bg-black/75 backdrop-blur-sm z-50"
        ariaHideApp={false}
      >
        {selectedProject !== null && (
          <div className="relative bg-white rounded-xl p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative aspect-square">
                <Image
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {projects[selectedProject].title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {projects[selectedProject].description}
                </p>
                <Link href={projects[selectedProject].detailp}>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    Detail projektu
                  </button>
                </Link>
              </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
              <button
                onClick={() => handleNavigate("prev")}
                className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition"
              >
                <ArrowLeft size={32} color="black" />
              </button>
              <button
                onClick={() => handleNavigate("next")}
                className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition"
              >
                <ArrowRight size={32} color="black" />
              </button>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition"
            >
              <Plus size={24} color="black" className="rotate-45" />
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default ProjectsGallery;
