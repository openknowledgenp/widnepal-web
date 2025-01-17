import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { CountdownTimer } from './shared/CountdownTimer';
import VantaGlobe from './VantaGlobe';

export const Hero = () => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch('/data/config.json')
      .then(res => res.json())
      .then(data => setConfig(data.conference));
  }, []);

  if (!config) return null;

  return (
    <section class="relative h-screen w-screen text-black overflow-hidden">
      {/* Vanta Globe Background */}
      <div class="absolute top-0 left-0 w-full h-full z-0">
        <VantaGlobe />
      </div>

      {/* Foreground Content */}
      <div class="container mx-auto relative z-10 flex flex-col items-center justify-center px-4 py-24 2xl:py-44 text-center">
        <div class="animate-fadeIn">
          <img src="wid.png" alt="wid logo" class="mx-auto" height={140} width={140} />
          <h1 class="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-white roboto-bold" style={{textShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"}}>
            {config.title}
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-[#FBBC0A] font-semibold italic underline font-sans" style={{textShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"}}>
            {config.tagline}
          </p>

          <div class="flex flex-col md:flex-row justify-center gap-4 mb-12 text-lg text-white">
            <div class="flex items-center justify-center gap-2 font-neutral" style={{textShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"}}>
              <span>📅</span>
              {new Date(config.date).toLocaleDateString('en-US', {
                dateStyle: 'long',
              })}
            </div>
            <div class="flex items-center justify-center gap-2 font-neutral" style={{textShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"}}>
              <span>📍</span>
              {config.venue.name}
            </div>
          </div>

          <div class="max-w-2xl mx-auto mb-12">
            <CountdownTimer targetDate={config.date} />
          </div>

          <div class="flex flex-col md:flex-row justify-center gap-4">
            <button
              class="px-8 py-3 bg-[#FBBC0A] hover:bg-[#FBBC0A]/80 rounded-lg font-semibold transform hover:scale-105 transition-transform text-white hover:outline-black focus:outline-none border-none"
              onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
            >
              Register Now
            </button>
          </div>
          <p class="text-base text-white italic mt-4">
            Spaces are limited - register today to secure your spot!
          </p>
        </div>
      </div>
    </section>
  );
};
