import Image from "next/image";
import Title from "./Title";

const teamMembers = [
  {
    name: "Filip Yao",
    role: "Frontend Developer and IT Specialist",
    email: "philip@kosmoproduction.eu",
    description:
      "A visual magician of the digital space. Transforms design concepts into interactive websites and solves all IT challenges for you.",
    imageSrc: "/PP/philip.png",
  },
  {
    name: "Oskar Petr",
    role: "Web Developer",
    email: "oskar@kosmoproduction.eu",
    description:
      "The architect of your web solutions. Creates and optimizes custom websites that are fast, secure, and technically perfect.",
    imageSrc: "/PP/oskar.png",
  },
  {
    name: "Matouš Jašek",
    role: "Social Media & Communication Specialist",
    email: "matthew@kosmoproduction.eu",
    description:
      "Your connection to the world of online marketing. Manages your corporate image on social media and ensures smooth communication with the community.",
    imageSrc: "/PP/matthew.png",
  },
  {
    name: "Daniel Hons",
    role: "Photographer",
    email: "daniel@kosmoproduction.eu",
    description:
      "A dynamic creator of multimedia content. From graphic design to video production and motion design, your partner for moving visuals.",
    imageSrc: "/PP/daniel.png",
  },
  {
    name: "Martin Čeman",
    role: "Graphic Designer",
    email: "martin@kosmoproduction.eu",
    description:
      "A visual storyteller of your stories. Captures unique moments through photography and transforms them into engaging graphic visuals.",
    imageSrc: "/PP/martin.png",
  },
];

export default function TeamContacts() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-20 mt-32 relative z-10">
      <div className="mb-12 text-center">
        <Title title="Our Team" />
      </div>

      {/* Decorative background elements */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-pink-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col w-full max-w-sm items-center p-8 rounded-xl transition-all duration-300 hover:translate-y-[-8px]"
            style={{
              background: "rgba(24, 24, 74, 0.4)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)"
            }}
          >
            <div className="relative w-36 h-36 mb-6 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-1 rounded-full overflow-hidden">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>

            <div className="text-center space-y-3">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
                {member.name}
              </h3>
              <p className="text-white/90 font-medium">{member.role}</p>
              <a
                href={`mailto:${member.email}`}
                className="text-blue-300 hover:text-purple-300 block transition-colors duration-300"
              >
                {member.email}
              </a>
              <p className="text-white/70 text-sm leading-relaxed pt-2 px-2">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
