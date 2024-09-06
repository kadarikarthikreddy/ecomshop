import React from "react";
import Hero from "../../components/hero/hero";
import Services from "../../components/services/Services";
import Gallery from "../../components/gallery/Gallery";

function Home() {
  return (
    <div className="pt-[80px]">
      <Hero />
      <Services />
      <Gallery />
    </div>
  );
}

export default Home;
