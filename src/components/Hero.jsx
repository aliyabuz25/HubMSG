const Hero = () => {
    return (
        <section className="reveal relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20 active">
            <div className="max-w-[900px] px-6 z-10">
                <p className="text-gray-500 font-medium mb-4 tracking-wide">Baileys WAA İnfrastrukturu</p>
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-10 tracking-tight">
                    Professional WhatsApp API <br className="hidden md:block" /> və Baileys Həlləri
                </h1>
                <div className="cta">
                    <button className="px-10 py-4 bg-primary text-white text-lg font-bold rounded-full hover:bg-[#1a0b5a] hover:scale-105 transition-all">
                        Pulsuz Sına
                    </button>
                </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute animate-float" style={{ top: '15%', left: '10%', animationDelay: '0s' }}>
                    <img src="/circle-messenger.svg" alt="Messenger" className="w-20 md:w-32" />
                </div>
                <div className="absolute animate-float" style={{ top: '35%', left: '15%', animationDelay: '1s' }}>
                    <img src="/circle-whatsapp.svg" alt="WhatsApp" className="w-16 md:w-24" />
                </div>
                <div className="absolute animate-float" style={{ top: '20%', right: '10%', animationDelay: '2s' }}>
                    <img src="/kommo-crm-message-character_1.png" alt="Message Character" className="w-32 md:w-48" />
                </div>
                <div className="absolute animate-float" style={{ bottom: '25%', right: '15%', animationDelay: '0.5s' }}>
                    <img src="/circle-telegram.svg" alt="Telegram" className="w-14 md:w-20" />
                </div>
                <div className="absolute animate-float" style={{ bottom: '18%', right: '25%', animationDelay: '1.5s' }}>
                    <img src="/circle-instagram.svg" alt="Instagram" className="w-24 md:w-32" />
                </div>
                <div className="absolute animate-float" style={{ bottom: '15%', right: '40%', animationDelay: '2.5s' }}>
                    <img src="/kommo-crm-email-character.png" alt="Email Character" className="w-32 md:w-44" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
