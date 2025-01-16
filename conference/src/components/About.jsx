import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

export const About = () => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch('/data/config.json')
      .then(res => res.json())
      .then(data => setConfig(data.conference.about));
  }, []);

  if (!config) return null;

  return (
    <section id="about" class="py-20 px-4 bg-[#f1f1f1] backdrop-blur-sm">
      <div class="container mx-auto max-w-6xl">
        <div class="grid md:grid-cols-2 gap-4 items-center">
          <div class="space-y-6 text-white mb-8">
            <h2 class="text-3xl font-bold bg-clip-text text-black">
              Welcome to the WiD Conference 2025
            </h2>
            <p class="text-base leading-relaxed text-black max-w-5xl mx-auto mb-0">
              {/* {config.introduction} */}
              {/* {config.description} */}
              Join us as we transform promises into progress! This annual event celebrates and empowers women in the data field by fostering collaboration among professionals, policymakers, and data enthusiasts to explore data-driven solutions to societal challenges.
            </p>
            {/* SEE later */}
            <p class="text-base leading-relaxed max-w-5xl mx-auto text-black mt-0" >
              {/* {config.description} */}
              The Women in Data (WiD) Conference is a prestigious annual event organized by the Women in Data Steering Committee. Its mission is to enhance women's capabilities in leveraging data for positive social and economic impact.
            </p>
            <p class="text-base leading-relaxed max-w-5xl mx-auto text-black mt-0" >
              {/* {config.description} */}
              This year’s theme, <span class="font-semibold italic">“सङ्‍कल्प: Using Data to Turn Promises into Progress” </span>, emphasizes the importance of actionable commitments to advance gender equality.
            </p>
          </div>

          {/* <div class="space-y-8">
            <div class="bg-blue-500/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 class="text-2xl font-semibold text-teal-800 mb-4">
                Key Highlights
              </h3>
              <ul class="space-y-3">
                {config.highlights.map(highlight => (
                  <li class="flex items-center text-black">
                    <span class="text-teal-800 mr-2">→</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            
            <div class="bg-blue-800/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 class="text-2xl font-semibold text-teal-800 mb-4">
                Objectives
              </h3>
              <ul class="space-y-3">
                {config.objectives.map(objective => (
                  <li class="flex items-center text-black">
                    <span class="text-teal-800 mr-2">→</span>
                    {objective}
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
          <div class="">
            <div class="p-4 w-fit self-end ">
              <img src="/images/icons/data-tools.png" alt="collaboration" height={60} width={400} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};