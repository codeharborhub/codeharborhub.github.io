
export const SocialProofFullWidth = () => {
    const partners = [
        { name: "GirlScript Summer Of Code", src: "https://miro.medium.com/v2/resize:fit:1400/1*UcTA3sdGKFdZDkcwYi1U4Q.png" },
        { name: "Hacktoberfest", src: "https://hacktoberfest.com/_next/static/media/logo-hacktoberfest-12--nav.0ac01b46.svg" },
        { name: "GSoC", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/GSoC-logo-horizontal.svg" },
        // Add more partners to make the scroll look continuous
        { name: "GirlScript Summer Of Code", src: "https://miro.medium.com/v2/resize:fit:1400/1*UcTA3sdGKFdZDkcwYi1U4Q.png" },
        { name: "Hacktoberfest", src: "https://hacktoberfest.com/_next/static/media/logo-hacktoberfest-12--nav.0ac01b46.svg" },
        { name: "GSoC", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/GSoC-logo-horizontal.svg" },
    ];

    return (
        <section className="relative overflow-hidden bg-primary py-20">
            {/* Subtle Gradient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-tertiary/20 to-transparent" />
            
            <div className="mx-auto max-w-container px-6">
                <div className="flex flex-col items-center gap-12">
                    {/* Modern Typography with Tracking */}
                    <p className="text-center text-2xl font-semibold tracking-wide text-fg-on-primary max-w-3xl space-y-2">
                        Join thousands of developers at CodeHarborHub, building the future of open source together.
                    </p>

                    {/* Logo Container with Fade Effect on Edges */}
                    <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                        <div className="flex w-max animate-scroll gap-12 py-4">
                            {[...partners, ...partners].map((logo, index) => (
                                <div 
                                    key={index}
                                    className="group flex items-center justify-center grayscale transition-all duration-500 hover:grayscale-0"
                                >
                                    <img
                                        alt={logo.name}
                                        src={logo.src}
                                        className="h-10 w-auto object-contain opacity-60 transition-opacity duration-300 group-hover:opacity-100 md:h-14"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Divider */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-tertiary/10 to-transparent" />

            {/* Custom Animation Style - Add to your globals.css or Tailwind Config */}
            <style jsx>{`
                @keyframes scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};