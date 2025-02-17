import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Globe,
  PaintBrush,
  TrendUp,
} from "@phosphor-icons/react";
import { useState, useRef } from "react";

export default function ServicesSection() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const services = [
    {
      icon: <Globe size={48} weight="duotone" />,
      title: "Vývoj webů",
      description:
        "Moderní a responzivní webové stránky na míru s podporou SEO",
    },
    {
      icon: <Camera size={48} weight="duotone" />,
      title: "Profesionální fotografie",
      description:
        "Produktové, interiérové a eventové fotografie v profesionální kvalitě",
    },
    {
      icon: <PaintBrush size={48} weight="duotone" />,
      title: "Grafický design",
      description: "Logo design, tiskoviny a kompletní corporate identity",
    },
    {
      icon: <TrendUp size={48} weight="duotone" />,
      title: "Sociální sítě",
      description: "Komplexní správa profilů a tvorba obsahu pro sociální sítě",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainer.current) {
      const scrollAmount = 300;
      const currentScroll = scrollContainer.current.scrollLeft;
      const newScroll =
        direction === "right"
          ? currentScroll + scrollAmount
          : currentScroll - scrollAmount;

      scrollContainer.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });

      setShowLeftArrow(newScroll > 0);
      setShowRightArrow(
        newScroll <
          scrollContainer.current.scrollWidth -
            scrollContainer.current.clientWidth
      );
    }
  };

  return (
    <section className="relative py-16 px-4 ">
      <h2 className="text-3xl font-bold text-center mb-12">Co děláme?</h2>

      <div className="relative max-w-7xl mx-auto">
        <div
          ref={scrollContainer}
          className="flex overflow-x-auto scrollbar-hidden gap-8 px-4 pb-4"
          onScroll={(e) => {
            const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 bg-gray-400 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-6">{service.icon}</div>
              <h3 className="text-xl text-black font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-background  leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Navigační šipky */}
        {showLeftArrow && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white  p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={32} weight="bold" color="black" />
          </button>
        )}

        {showRightArrow && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <ArrowRight size={32} weight="bold" color="black" />
          </button>
        )}
      </div>
    </section>
  );
}
