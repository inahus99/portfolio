import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden text-[#1C1C1C] antialiased grid-bg">
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <Hero />
        <main className="container mx-auto px-6 max-w-5xl flex flex-col gap-28 py-16">
          <About />
          <Experience />
          <Projects />
          <Skills />
        </main>

        <footer className="border-t border-[#E5E7EB] mt-16 pb-8 pt-8 bg-white/50">
          <div className="container mx-auto max-w-5xl px-6 text-center text-[#9CA3AF] text-sm">
            &copy; {new Date().getFullYear()} Suhani Tyagi. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
