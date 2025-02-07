import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar
        logoVariant="default"
        textVariant="black"
        headerVariant="blurishWhite"
      />
      <div>
        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-lg">
              I’m Taofil Anifowose, a Chartered Accountant with a passion for
              excellence.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex flex-col items-center justify-center bg-gray-200 px-4"
        >
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg">
              With years of experience in financial management, auditing, and
              strategic planning, I bring a wealth of expertise to every
              project.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="min-h-screen flex flex-col items-center justify-center bg-gray-300 px-4"
        >
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <p className="text-lg">
              Over the years, I have worked with various prestigious firms,
              developing strategies that drive growth and efficiency.
            </p>
          </div>
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
