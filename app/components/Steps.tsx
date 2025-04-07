import { NotePencil, GearSix, ChartBarHorizontal, ShieldCheck } from "@phosphor-icons/react";

export default function Steps() {
  const steps = [
    {
      title: "Konzultace",
      description: "Naše konzultace jsou bezplatné a nastíní Vám, jaké možnosti můžete využít.",
      icon: <NotePencil size={60} className="text-primary mx-auto" />,
    },
    {
      title: "Návrh řešení",
      description: "Předložení optimálního řešení pro Vaši představu o dosažení výsledku.",
      icon: <GearSix size={60} className="text-primary mx-auto" />,
    },
    {
      title: "Podpora",
      description: "Klientská péče v průběhu spolupráce. Analýzy výsledků a optimalizace.",
      icon: <ChartBarHorizontal size={60} className="text-primary mx-auto" />,
    },
    {
      title: "Legislativa",
      description: "Dbáme na dodržování požadavků v legislativě a licenčních právech.",
      icon: <ShieldCheck size={60} className="text-primary mx-auto" />,
    },
  ];

  return (
    <div className="relative text-white py-16">
      {/* Pozadí */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/background.jpg)' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nadpis */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold">
            Proč právě s námi? <span className="text-[#D4B00B]">Jak pracujeme</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Neztrácejte drahocenný čas. Využijte našich nezávazných konzultací a ověřte si, jaké výsledky vám můžeme přinést.
          </p>
        </div>

        {/* Kroky */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white text-gray-900 rounded-lg shadow-md p-6 text-center relative">
              {/* Ikona */}
              <div className="mb-4 flex-row justify-between">{step.icon}</div>
              {/* Název kroku */}
              <h3 className="text-xl font-semibold">{step.title}</h3>
              {/* Popis kroku */}
              <p className="mt-2 text-gray-600">{step.description}</p>
              {/* Dekorativní čára */}
              {index !== steps.length - 1 && (
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
                  <div className="w-px h-12 bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
