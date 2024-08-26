import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";

import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />

      {/* <Work /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}
