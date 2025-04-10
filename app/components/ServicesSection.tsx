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
import { motion } from "framer-motion";

export default function ServicesSection() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOverflowing, setIsOverflowing] = useState(true);

  const services = [
    {
      icon: <Globe size={48} weight="duotone" className="text-black" />,
      title: "Web Development",
      description: "Modern and responsive custom websites with SEO support",
      gradient: "from-blue-400 to-indigo-500",
      path: "../Services/web-development",
    },
    {
      icon: <PaintBrush size={48} weight="duotone" className="text-black" />,
      title: "Graphic Design",
      description: "Logo design, print materials, and complete corporate identity",
      gradient: "from-green-400 to-teal-500",
      path: "../Services/graphic",
    },
    {
      icon: <Camera size={48} weight="duotone" className="text-black" />,
      title: "Professional Photography",
      description: "Product, interior, and event photography in professional quality",
      gradient: "from-purple-400 to-pink-500",
      path: "../Services/photography",
    },
    {
      icon: <TrendUp size={48} weight="duotone" className="text-black" />,
      title: "Social Media",
      description: "Comprehensive profile management and content creation for social media",
      gradient: "from-yellow-400 to-orange-500",
      path: "../Services/social-media",
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
      handleScroll(dx > 0 ? "left" : "right");
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
    <section className="relative py-20 px-4">
      {/* Decorative background elements */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-green-500 rounded-full filter blur-3xl opacity-5"></div>
      </div>
      
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300"
      >
        What We Do?
      </motion.h2>

      <div className="relative max-w-7xl mx-auto">
        <div
          {...bind()}
          ref={scrollContainer}
          className="flex overflow-x-auto scrollbar-hidden gap-8 px-4 pb-8 snap-x snap-mandatory"
          onScroll={updateArrowsVisibility}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-80 p-8 rounded-2xl snap-start block cursor-pointer transition-all duration-300 hover:translate-y-[-8px]"
              style={{
                background: "rgba(20, 20, 40, 0.4)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)"
              }}
            >
              <div className={`p-4 rounded-xl mb-6 bg-gradient-to-br ${service.gradient} bg-opacity-20 inline-block`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex justify-end">
                <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <ArrowRight size={20} className="text-white" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile navigation */}
        <div className="flex items-center justify-center gap-4 mt-8 md:hidden">
          <button
            onClick={() => handleScroll("left")}
            className="p-3 rounded-full transition-all duration-300"
            aria-label="Previous Service"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.1)"
            }}
          >
            <ArrowLeft size={20} weight="bold" className="text-white" />
          </button>

          <div className="flex gap-3 mx-4">
            {services.map((_, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? "bg-gradient-to-r from-blue-400 to-purple-400 scale-125" 
                    : "bg-white/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => handleScroll("right")}
            className="p-3 rounded-full transition-all duration-300"
            aria-label="Next Service"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.1)"
            }}
          >
            <ArrowRight size={20} weight="bold" className="text-white" />
          </button>
        </div>

        {/* Desktop arrows */}
        <div className="hidden md:block">
          {isOverflowing && showLeftArrow && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={() => handleScroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-4 rounded-full transition-all duration-300 z-10"
              aria-label="Previous Service"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
              }}
            >
              <ArrowLeft size={24} weight="bold" className="text-white" />
            </motion.button>
          )}

          {isOverflowing && showRightArrow && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={() => handleScroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-4 rounded-full transition-all duration-300 z-10"
              aria-label="Next Service"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
              }}
            >
              <ArrowRight size={24} weight="bold" className="text-white" />
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
}
