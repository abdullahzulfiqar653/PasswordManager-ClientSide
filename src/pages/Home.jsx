import React from "react";

function Home() {
  return (
    <>
      <section className="main-banner w-full relative">
        <section className="hero-section relative w-full h-full mx-auto max-w-screen-2xl">
          
        </section>
      </section>
      <video
        className="fixed top-0 w-full h-full md:object-cover"
        autoPlay
        muted
        loop={true}
      >
        <source src="/video.mp4" />
      </video>
    </>
  );
}

export default Home;
