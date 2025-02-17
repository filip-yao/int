import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen  px-20 ">{children}</div>
      <Footer />
    </div>
  );
}
