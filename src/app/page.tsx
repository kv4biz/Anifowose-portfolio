import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
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
          className="min-h-screen flex flex-col items-center justify-center bg-gray-400 px-4"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
            <p className="text-lg">
              I’m Taofil Anifowose, a Chartered Accountant with a passion for
              excellence.
            </p>
          </div>
        </section>
        {/* contact Section */}
        <section
          id="contact"
          className="min-h-screen flex flex-col items-center justify-center bg-gray-600 px-4"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">My Contact</h1>
            <p className="text-lg">
              I’m Taofil Anifowose, a Chartered Accountant with a passion for
              excellence.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
