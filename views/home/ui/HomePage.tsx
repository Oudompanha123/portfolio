import Hero from "@/widgets/Hero/ui/Hero";
import About from "@/widgets/About/ui/About";
import Skills from "@/widgets/Skills/ui/Skills";
import Experience from "@/widgets/Experience/ui/Experience";
import Projects from "@/widgets/Projects/ui/Projects";
import ProjectSpotlight from "@/widgets/ProjectSpotlight/ui/ProjectSpotlight";
import Contact from "@/widgets/Contact/ui/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <ProjectSpotlight />
      <Contact />
    </main>
  );
}
