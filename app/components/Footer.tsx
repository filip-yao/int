import { Aperture, Globe, ShareNetwork } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-background px-9 py-2 h-32 flex justify-between items-stretch border-t border-white border-opacity-5 ">
      <div>
        <div className="h-full flex flex-col p-4 ">
          <text className="text-xl font-bold mb-2 ">Základní informace </text>
          <div>
            <text className="text-base font-semibold "> Email: </text>

            <Link href="mailto:info@kosmoproduction.eu">
              <text className="text-base ">info@kosmoproduction.eu</text>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-full flex flex-col justify-center ">
        <div className="flex flex-col items-center">
          <text className=" font-semibold">MADE WITH LOVE IN </text>
          <Link href="https://en.wikipedia.org/wiki/Moravia">
            <text className=" font-semibold ">MORAVIA </text>
          </Link>
        </div>
      </div>
    </div>
  );
}
