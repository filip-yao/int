import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Globe,
  PaintBrush,
  TrendUp,
} from "@phosphor-icons/react";
import { useState, useRef, useEffect } from "react";
import { useDrag } from "react-use-gesture";

export default function ServicesSection() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOverflowing, setIsOverflowing] = useState(true);

  const services = [
    {
      icon: <Globe size={48} weight="duotone" color="#3b82f6" />,
      title: "Vývoj webů",
      description:
        "Moderní a responzivní webové stránky na míru s podporou SEO",
      bgColor: "bg-blue-50 ",
      textColor: "text-blue-900",
    },
    {
      icon: <PaintBrush size={48} weight="duotone" color="#10b981" />,
      title: "Grafický design",
      description: "Logo design, tiskoviny a kompletní corporate identity",
      bgColor: "bg-green-50",
      textColor: "text-green-900",
    },
    {
      icon: <Camera size={48} weight="duotone" color="#8b5cf6" />,
      title: "Profesionální fotografie",
      description:
        "Produktové, interiérové a eventové fotografie v profesionální kvalitě",
      bgColor: "bg-purple-50",
      textColor: "text-purple-900",
    },
    
    {
      icon: <TrendUp size={48} weight="duotone" color="#f59e0b" />,
      title: "Sociální sítě",
      description: "Komplexní správa profilů a tvorba obsahu pro sociální sítě",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-900",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (scrollContainer.current) {
        setContainerWidth(scrollContainer.current.offsetWidth);
        const { scrollWidth, clientWidth } = scrollContainer.current;
        setIsOverflowing(scrollWidth > clientWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [containerWidth]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainer.current?.firstElementChild) {
        const card = scrollContainer.current.firstElementChild as HTMLElement;
        const cardWidth = card.offsetWidth;
        const gap = 32;
        const scrollPosition = scrollContainer.current.scrollLeft;
        const newIndex = Math.round(scrollPosition / (cardWidth + gap));

        setActiveIndex(Math.min(newIndex, services.length - 1));
      }
    };

    const container = scrollContainer.current;
    container?.addEventListener("scroll", handleScroll);

    return () => container?.removeEventListener("scroll", handleScroll);
  }, [containerWidth, services.length]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainer.current?.firstElementChild) {
      const card = scrollContainer.current.firstElementChild as HTMLElement;
      const cardWidth = card.offsetWidth;
      const gap = 32;
      const scrollAmount = cardWidth + gap;

      const newScroll =
        direction === "right"
          ? scrollContainer.current.scrollLeft + scrollAmount
          : scrollContainer.current.scrollLeft - scrollAmount;

      scrollContainer.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  const bind = useDrag(({ direction: [dx], movement: [mx], cancel }) => {
    if (Math.abs(mx) > 50) {
      handleScroll(dx > 0 ? "right" : "left");
      cancel();
    }
  });

  const updateArrowsVisibility = () => {
    if (scrollContainer.current && isOverflowing) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    } else {
      setShowLeftArrow(false);
      setShowRightArrow(false);
    }
  };

  return (
    <section className="relative py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Co děláme?</h2>

      <div className="relative max-w-7xl mx-auto">
        <div
          {...bind()}
          ref={scrollContainer}
          className="flex overflow-x-auto scrollbar-hidden gap-8 px-4 pb-4 snap-x snap-mandatory"
          onScroll={updateArrowsVisibility}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-72 ${service.bgColor} p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow snap-start`}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className={`text-xl ${service.textColor} font-semibold mb-4`}>
                {service.title}
              </h3>
              <p className={`${service.textColor} leading-relaxed`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile navigation */}
        <div className="flex items-center justify-center gap-4 mt-8 md:hidden">
          <button
            onClick={() => handleScroll("left")}
            className="p-2 rounded-full bg-primary transition-colors"
            aria-label="Předchozí služba"
          >
            <ArrowLeft size={24} weight="bold" color="white" />
          </button>

          <div className="flex gap-2 mx-4">
            {services.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => handleScroll("right")}
            className="p-2 rounded-full bg-primary transition-colors"
            aria-label="Následující služba"
          >
            <ArrowRight size={24} weight="bold" color="white" />
          </button>
        </div>

        {/* Desktop arrows */}
        <div className="hidden md:block">
          {isOverflowing && showLeftArrow && (
            <button
              onClick={() => handleScroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Předchozí služba"
            >
              <ArrowLeft size={32} weight="bold" color="black" />
            </button>
          )}

          {isOverflowing && showRightArrow && (
            <button
              onClick={() => handleScroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Následující služba"
            >
              <ArrowRight size={32} weight="bold" color="black" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
