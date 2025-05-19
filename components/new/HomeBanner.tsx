import React from "react";
import Title from "../Title";

const HomeBanner = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-5 bg-cover bg-center bg-no-repeat w-full min-h-[400px] px-4"
      style={{ backgroundImage: "url('https://saffonaremedies.com/wp-content/uploads/2023/10/green-test-1.png')" }}
    >
      <Title className="uppercase text-3xl md:text-4xl font-bold text-center text-white">
        100% Natural, 0% Nonesense
      </Title>
      <p className="text-sm text-center text-white/90 font-medium max-w-[480px]">
        Nature&apos;s Real Deal, Not Your Average Beauty Hype, No Fillers. No Fluff. Just Pure Ayurvedic Goodness.
      </p>
    </div>
  );
};

export default HomeBanner;
