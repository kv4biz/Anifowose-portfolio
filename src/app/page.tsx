import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Trainings from "@/components/Training";
export default function Home() {
  return (
    <div>
      <Navbar
        logoVariant="default"
        textVariant="black"
        headerVariant="blurishWhite"
      />
      <div className="flex flex-col w-full">
        {/* Home Section */}
        <section
          id="home"
          className="flex flex-col w-full items-center justify-center"
        >
          <Hero />
          <Skills />
        </section>

        {/* About Section */}
        <section
          id="about"
          className="flex flex-col w-full items-center justify-center"
        >
          <About />
          <Education />
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="flex flex-col w-full items-center justify-center"
        >
          <Experience />
          <Trainings />
        </section>
        {/* pOrtfolio Section */}
        <section
          id="portfolio"
          className="flex flex-col w-full items-center justify-center"
        >
          <Portfolio />
          <Feedback />
        </section>
        {/* contact Section */}
        <section
          id="contact"
          className="flex flex-col w-full items-center justify-center"
        >
          <Contact />
          <Map />
        </section>
      </div>
    </div>
  );
}
