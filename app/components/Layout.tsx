import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen  md:px-20 sm:px-20 px-10">{children}</div>
      <Footer />
    </div>
  );
}
