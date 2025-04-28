import { AboutSection } from "@/components/about-section";
import { FeaturesSection } from "@/components/feature-section";
import { ParallaxShape } from "@/components/parallax-shape";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";

export default async function Home() {

  return (
    <main className="min-h-screen relative">
      <Navbar />

      <div className="container mx-auto pt-20 pb-24 text-center relative">
        <h1 className="text-[2.8rem] font-bold text-[#2F281E] mb-6">Empowering Young Learners with Skills</h1>
        <p className="max-w-2xl mx-auto text-lg text-[#544837] mb-12">
          Unlock the potential of young minds with our learner-centered digital skills content. Join us in providing
          research support services to postgraduates and university faculties.
        </p>
        <Button
          className="bg-primary hover:bg-blue-700 rounded-sm !py-6 px-10 hover:cursor-pointer"
        >Contact Us
        </Button>

        {/* Purple curved shape in top left */}
        <ParallaxShape speed={-0.05} className="absolute top-40 left-0 w-48 h-48 opacity-80 z-0 float-slow">
          <img src="/images/objects/Object (1).png" alt="" />
        </ParallaxShape>

        {/* Purple triangle shape in top right */}
        <ParallaxShape speed={0.1} className="absolute top-48 right-0 w-64 h-64 opacity-80 z-0 float float-delay-2">
          <img src="/images/objects/Object.png" alt="" />
        </ParallaxShape>

        {/* Spiral shape */}
        <ParallaxShape speed={0.07} className="absolute bottom-96 right-0 w-32 h-32 opacity-60 z-0 float-slow float-delay-3">
          <img src="/images/objects/Object (2).png" alt="" />
        </ParallaxShape>

        {/* Circle shape in bottom left */}
        <ParallaxShape speed={0.15} className="absolute bottom-64 left-28 w-24 h-24 opacity-60 z-0 float-reverse float-delay-1">
          <img src="/images/objects/Object (3).png" alt="" />
        </ParallaxShape>

        {/* Image grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-14 max-w-5xl mx-auto">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/images/Rectangle1.png"
              alt="Child with educational toys"
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-lg overflow-hidden mt-80">
            <img src="/images/Rectangle2.png" alt="Child reading on tablet" className="w-full h-auto" />
          </div>
          <div className="rounded-lg overflow-hidden mt-40">
            <img
              src="/images/Rectangle3.png"
              alt="Child working on electronics project"
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="/images/Rectangle4.png"
              alt="Child working on electronics project"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <AboutSection />

      {/* Features Section */}
      <FeaturesSection />
    </main>
  );
}
