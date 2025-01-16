import { h } from 'preact';

const LogoSection = () => {
    // Example logos (replace with actual image paths or URLs)
    const supportedByLogos = [
        '/images/logos/supports/d4d.png',
        '/images/logos/supports/taf.png',
        '/images/logos/supports/ukaid.png',
    ];
    const managedByLogos = [
        '/images/logos/committee/okn.png',
    ];
    const organizedByLogos = [
        '/images/logos/committee/wlit.png',
        '/images/logos/committee/drn.png',
        '/images/logos/committee/naxa.png',
        '/images/logos/committee/ran.png',
        '/images/logos/committee/smartcheli.png',
        '/images/logos/committee/udhesya.png',
        '/images/logos/committee/wlit.png',
        '/images/logos/committee/wiit.png',
    ];

    const LogoGrid = ({ logos }) => (
        <div class="flex flex-wrap gap-4 justify-left">
            {logos.map((logo, index) => (
                <div
                    key={index}
                    class="flex items-center justify-center p-2 rounded-md shadow-sm bg-white w-44 border border-[#40ADE3] hover:shadow-lg transition-all cursor-pointer"
                >
                    <img src={logo} alt={`Logo ${index + 1}`} class="max-h-16 object-contain" />
                </div>
            ))}
        </div>
    );

    return (
        <div class="space-y-8 py-8 bg-[#f6f6f6] container mx-auto px-4">
            <section class="mx-auto container">
                <h2 class="text-lg font-bold mb-4 text-gray-800">Organized By</h2>
                <LogoGrid logos={organizedByLogos} />
            </section>
            <section class="mx-auto container flex justify-left gap-8">
                <div class="w-1/3">
                    <h2 class="text-lg font-bold mb-4 text-gray-800">Supported by</h2>
                    <div class="rounded-md shadow-sm bg-white shadow-lg border border-[#40ADE3] hover:shadow-lg transition-all cursor-pointer">
                        <img src="/images/logos/supports/stacked.png" alt="Funding partners" />
                    </div>
                </div>
                <div class="w-1/3">
                    <h2 class="text-lg font-bold mb-4 text-gray-800">Managed by</h2>
                    <div class="rounded-md shadow-sm bg-white shadow-lg border border-[#40ADE3] hover:shadow-lg transition-all cursor-pointer p-4 w-fit">
                        <img src="/images/logos/committee/okn.png" alt="Open Knowledge Nepal" class="h-12" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LogoSection;
