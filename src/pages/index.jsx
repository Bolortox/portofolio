import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";

import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Experience } from "@/components/Experience";
import { Toggle } from "@/components/Toggle";
import { useState } from "react";


export default function Home() {

  const [isDark, setIsDark] = useState(true)

  return (
    <div data-theme={isDark ? "dark" : "light" }>

      <Toggle 
        isChecked = {isDark}
        handleChange = {() => setIsDark(!isDark)}
      />
      
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      {/* <Work /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}
