import Image from "next/image";
import Title from "./Title";

const teamMembers = [
  {
    name: "Filip Yao",
    role: "Frontend Vývojář a IT specialista",
    email: "philip@kosmoproduction.eu",
    description:
      "Vizuální kouzelník digitálního prostoru. Přetváří designové návrhy v interaktivní weby a řeší veškeré IT výzvy za vás.",
    imageSrc: "/PP/philip.png",
  },
  {
    name: "Oskar Petr",
    role: "Webový vývojář",
    email: "oskar@kosmoproduction.eu",
    description:
      "Architekt vašich webových řešení. Vytváří a optimalizuje weby na míru, které jsou rychlé, bezpečné a technicky dokonalé.",
    imageSrc: "/PP/oskar.png",
  },
  {
    name: "Matouš Jašek",
    role: "Specialista Sociálních Sítí & Komunikace",
    email: "matthew@kosmoproduction.eu",
    description:
      "Vaše spojení se světem online marketingu. Stará se o vaši firemní image na sociálních sítích a plynulou komunikaci s komunitou.",
    imageSrc: "/PP/matthew.png",
  },
  {
    name: "Daniel Hons",
    role: "Fotograf",
    email: "daniel@kosmoproduction.eu",
    description:
      "Dynamický tvůrce multimediálního obsahu. Od návrhů grafiky přes videoprodukci po motion design, váš partner pro pohyblivé obrazy.",
    imageSrc: "/PP/daniel.png",
  },

  {
    name: "Martin Čeman",
    role: "Grafik",
    email: "martin@kosmoproduction.eu",
    description:
      "Vizuální vypravěč vašich příběhů. Zachycuje jedinečné momenty fotografiemi a přetavuje je do poutavých grafických vizuálů.",
    imageSrc: "/projects/martin.png",
  },
];

export default function TeamContacts() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-10 mt-20 ">
      <div className="mb-5">
        <Title title="Náš tým" />
      </div>

      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => {
          return (
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
                  className="rounded-full border-4 border-white/10 " />
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
          );
        })}
      </div>
    </div>
  );
}
