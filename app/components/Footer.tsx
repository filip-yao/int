import { Aperture, Globe, ShareNetwork } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-background px-9 py-2 h-32 flex justify-between items-stretch border-t border-white border-opacity-5 flex-row-reverse">
      <div className="h-full flex flex-col justify-center ">
        <div>
          <text className="text-l font-semibold">MADE WITH LOVE IN </text>
          <Link href="https://en.wikipedia.org/wiki/Moravia">
            <text className="text-l font-semibold underline">MORAVIA</text>
          </Link>
        </div>
      </div>
    </div>
  );
}
