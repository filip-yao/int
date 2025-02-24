import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Modal from "react-modal";
import { ArrowRight, ArrowLeft, Plus, CaretLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const ProjectsGallery = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showProjectDetail, setShowProjectDetail] = useState(false);
  const [iframeUrl, setIframeUrl] = useState("");
  const router = useRouter();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const projects = [
    {
      id: 1,
      title: "Osobní web a E-shop pro lektorku mandarínštiny",
      image: "/projects/renca_web.png",
      description: "Komplexní e-commerce řešení s integrací platebního systému",
      detailp: "https://renatamirkova.com",
    },
    // Přidejte další projekty...
  ];

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "navigation") {
        setIframeUrl(event.data.url);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const handleNavigate = (direction: "next" | "prev") => {
    if (selectedProject === null) return;

    const newIndex =
      direction === "next"
        ? (selectedProject + 1) % projects.length
        : (selectedProject - 1 + projects.length) % projects.length;

    setSelectedProject(newIndex);
  };

  const handleProjectDetail = (url: string) => {
    setIsOpen(false);
    setShowProjectDetail(true);
    setIframeUrl(url);
  };

  const injectNavigationHandler = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        {
          type: "injectNavigationHandler",
          handler: `
            document.body.addEventListener('click', function(e) {
              if (e.target.tagName === 'A') {
                e.preventDefault();
                window.parent.postMessage({ type: 'navigation', url: e.target.href }, '*');
              }
            });
          `,
        },
        "*"
      );
    }
  };

  return (
    <section className="py-16 px-4">
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
                <Plus size={48} className="text-white animate-pulse" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-[#18184A] to-background">
              <h3 className="text-white text-lg font-semibold">
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
        className="outline-none max-w-4xl mx-auto my-12 w-11/12 relative bg-transparent"
        overlayClassName="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center"
        ariaHideApp={false}
      >
        {selectedProject !== null && (
          <div className="relative bg-[#18184A] rounded-xl p-6">
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
                <h3 className="text-2xl font-bold text-white mb-4">
                  {projects[selectedProject].title}
                </h3>
                <p className="text-white-600 mb-4">
                  {projects[selectedProject].description}
                </p>
                <button
                  onClick={() => handleProjectDetail(projects[selectedProject].detailp)}
                  className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Detail projektu
                </button>
              </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
              {selectedProject > 0 && (
                <button
                  onClick={() => handleNavigate("prev")}
                  className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition"
                >
                  <ArrowLeft size={32} color="black" />
                </button>
              )}
              {selectedProject < projects.length - 1 && (
                <button
                  onClick={() => handleNavigate("next")}
                  className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition ml-auto"
                >
                  <ArrowRight size={32} color="black" />
                </button>
              )}
            </div>
          </div>
        )}
         <div className="mt-6 flex justify-center">
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 bg-primary hover:bg-opacity-90 transition-all rounded-full px-6 py-2 m-2 font-semibold border border-white border-opacity-20"
              >
                
                Zavřít
              </button>
            </div>
      </Modal>

      {showProjectDetail && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col">
          <div className="p-4">
            <button
              onClick={() => {
                setShowProjectDetail(false);
                setIsOpen(true);
              }}
              className="flex items-center gap-2 bg-primary hover:bg-opacity-90 transition-all rounded-full px-6 py-2 font-semibold border border-white border-opacity-20"
            >
              <CaretLeft size={24} />
              <span className="ml-2 mt-[2px]">Zpět na galerii projektů</span>
            </button>
          </div>
          <div className="flex-grow overflow-hidden">
            <iframe
              ref={iframeRef}
              src={iframeUrl}
              className="w-full h-full border-none"
              onLoad={injectNavigationHandler}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsGallery;
