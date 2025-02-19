import Image from "next/image";
import Title from "./Title";

const teamMembers = [
  {
    name: "Filip Yao",
    role: "Frontend Vývojář a IT specialista",
    email: "philip@kosmoproduction.eu",
    description: "Specialista na React s vášní pro čistý kód a moderní design.",
    imageSrc: "/projects/Renata Mirková.jpg",
  },
  {
    name: "Oskar Petr",
    role: "Webový vývojář",
    email: "oskar@kosmoproduction.eu",
    description: "Tvořím intuitivní rozhraní s důrazem na uživatelský komfort.",
    imageSrc: "/PP/oskar.png",
  },
  {
    name: "Matouš Jašek",
    role: "Specialista Sociálních Sítí & Komunikace",
    email: "matthew@kosmoproduction.eu",
    description:
      "C Vaše podněty řeším rychleji než svůj ranní proteinový shake.",
    imageSrc: "/PP/matthew.png",
  },
  {
    name: "Daniel Hons",
    role: "Fotograf",
    email: "daniel@kosmoproduction.eu",
    description:
      "Svaly formuje v posilovně, kompozice frame by frame. Propojuji fitness disciplínu s kreativním viděním.",
    imageSrc: "/PP/daniel.png",
  },

  {
    name: "Martin Čeman",
    role: "Grafik",
    email: "martin@kosmoproduction.eu",
    description:
      "Pixel perfect přístup k designu doplňuji pravidelnými výběhy s hasičským týmem. Týmová spolupráce je můj druhý dech.",
    imageSrc: "/projects/Renata Mirková.jpg",
  },
];

export default function TeamContacts() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-10 mt-20 ">
      <div className="mb-5">
        <Title title="Náš tým" />
      </div>

      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className=" flex flex-col w-fit  items-center p-6 bg-[#18184A] rounded-lg shadow-lg"
          >
            <div className="relative w-32 h-32 mb-4">
              <Image
                src={member.imageSrc}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-white/10 "
              />
            </div>

            <div className="text-center ">
              <h3 className="text-xl font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-white mt-1">{member.role}</p>
              <a
                href={`mailto:${member.email}`}
                className="text-white hover:text-purple block mt-2"
              >
                {member.email}
              </a>
              <p className="text-white mt-3 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
