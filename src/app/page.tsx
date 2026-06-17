import { BackgroundGradient } from "@/components/layout/BackgroundGradient";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";
import { About } from "@/components/sections/About";
import { Credentials } from "@/components/sections/Credentials";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <BackgroundGradient />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Credentials />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ThemeSwitcher />
    </>
  );
}
