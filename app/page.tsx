import About from "@/components/About";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black w-screen h-screen overflow-x-hidden">
      <Hero/>
      <About />
    </main>
  );
}
