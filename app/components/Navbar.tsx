import { Aperture, Globe, ShareNetwork } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="z-50 fixed top-0 w-full bg-background px-48 py-2 flex justify-between items-center border-b border-white border-opacity-5">
      <Link href="/">
        <Image
          src="/Logo.png"
          alt="Kosmo Production logo"
          height={0}
          width={200}
        />
      </Link>

      <div className="flex gap-10 font-medium">
        <Link
          className="flex items-center gap-2 opacity-80 group"
          href="/social-media"
        >
          <ShareNetwork size={20} weight="bold" className="mb-1 opacity-80" />
          <div>
            <span>Social media</span>
            <div className="group-hover:w-full w-0 h-[2px] bg-white bg-opacity-50 rounded-full transition-all duration-300"></div>
          </div>
        </Link>
        <Link
          className="flex items-center gap-2 opacity-80 group"
          href="/web-development"
        >
          <Globe size={20} weight="bold" className="mb-1 opacity-80" />
          <div>
            <span>Web development</span>
            <div className="group-hover:w-full w-0 h-[2px] bg-white bg-opacity-50 rounded-full transition-all duration-300"></div>
          </div>
        </Link>
        <Link
          className="flex items-center gap-2 opacity-80 group"
          href="/photography"
        >
          <Aperture size={20} weight="bold" className="mb-1 opacity-80" />
          <div>
            <span>Photography</span>
            <div className="group-hover:w-full w-0 h-[2px] bg-white bg-opacity-50 rounded-full transition-all duration-300"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}
