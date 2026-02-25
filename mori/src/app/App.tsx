import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { Journey } from "./components/Journey";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { ScrollNavigation } from "./components/ScrollNavigation";

export default function App() {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      {/* Skip to main content link - accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <ScrollNavigation />
      <main id="main-content">
        <Hero />
        <Work />
        <Journey />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}