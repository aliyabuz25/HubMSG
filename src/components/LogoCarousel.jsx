const LogoCarousel = () => {
    const logos = [
        { type: 'img', src: '/circle-whatsapp.svg', alt: 'WhatsApp' },
        { type: 'img', src: '/circle-telegram.svg', alt: 'Telegram' },
        { type: 'img', src: '/circle-instagram.svg', alt: 'Instagram' },
        { type: 'img', src: '/circle-messenger.svg', alt: 'Messenger' },
        { type: 'icon', class: 'fa-solid fa-envelope' },
        { type: 'icon', class: 'fa-brands fa-skype' },
        { type: 'icon', class: 'fa-brands fa-weixin' },
        { type: 'icon', class: 'fa-brands fa-google' },
        { type: 'icon', class: 'fa-brands fa-line' },
    ];

    return (
        <section className="py-12 bg-white overflow-hidden">
            <div className="flex whitespace-nowrap logo-track">
                {/* First set of logos */}
                <div className="flex items-center gap-12 md:gap-24 px-12">
                    {logos.map((logo, idx) => (
                        logo.type === 'img' ? (
                            <img
                                key={idx}
                                src={logo.src}
                                alt={logo.alt}
                                className="w-12 h-12 md:w-16 md:h-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
                            />
                        ) : (
                            <i key={idx} className={`${logo.class} text-4xl md:text-5xl text-gray-300 hover:text-primary transition-colors cursor-pointer`}></i>
                        )
                    ))}
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex items-center gap-12 md:gap-24 px-12">
                    {logos.map((logo, idx) => (
                        logo.type === 'img' ? (
                            <img
                                key={`dup-${idx}`}
                                src={logo.src}
                                alt={logo.alt}
                                className="w-12 h-12 md:w-16 md:h-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
                            />
                        ) : (
                            <i key={`dup-${idx}`} className={`${logo.class} text-4xl md:text-5xl text-gray-300 hover:text-primary transition-colors cursor-pointer`}></i>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoCarousel;
