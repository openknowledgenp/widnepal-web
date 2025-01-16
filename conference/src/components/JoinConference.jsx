export const JoinConference = () => {
    return (
        <section id="about" class="py-20 px-4 bg-[#f6f6f6] backdrop-blur-sm">
            <div class="container mx-auto">
                    <h2 class="text-center text-black font-bold md:text-2xl mb-12">Why Join WiD Conference?</h2>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 ">
                        <div className='bg-[#40ADE3] p-0.5 rounded-xl'>
                            <div class="bg-[#FBBC0A] h-full rounded-xl p-3 text-black">
                                <img src="/images/icons/network.png" alt="networking event" height={50} class="rounded-lg" />
                                <h3 class="text-xl mb-2 mt-4 font-semibold">Build Your Network</h3>
                                <p class="text-sm ">
                                    Connect with policymakers, practitioners, and thought leaders.
                                </p>
                            </div>
                        </div>
                        <div className='bg-[#40ADE3] p-0.5 rounded-xl'>
                            <div class="bg-[#FBBC0A] h-full rounded-xl p-4 text-black">
                                <img src="/images/icons/skills.png" alt="networking event" height={50} class="rounded-lg" />
                                <h3 class="text-xl mb-2 mt-4 font-semibold">Enhance Your Skills</h3>
                                <p class="text-sm ">
                                    Learn practical tools and methods for data-driven solutions.
                                </p>
                            </div>
                        </div>
                        <div className='bg-[#40ADE3] p-0.5 rounded-xl'>
                            <div class="bg-[#FBBC0A] h-full rounded-xl p-4 text-black">
                                <img src="/images/icons/inspire.png" alt="networking event" height={50} class="rounded-lg" />
                                <h3 class="text-xl mb-2 mt-4 font-semibold">Be Inspired</h3>
                                <p class="text-sm ">
                                    Discover success stories and insights from leading women in data.
                                </p>
                            </div>
                        </div>
                        <div className='bg-[#40ADE3] p-0.5 rounded-xl'>
                            <div class="bg-[#FBBC0A] h-full rounded-xl p-4 text-black">
                                <img src="/images/icons/future.png" alt="networking event" height={50} class="rounded-lg" />
                                <h3 class="text-xl mb-2 mt-4 font-semibold">Shape the Future</h3>
                                <p class="text-sm ">
                                    Contribute to a movement advancing data-driven gender equality.
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default JoinConference;