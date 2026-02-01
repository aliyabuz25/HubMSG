const CTA = () => {
    return (
        <section className="reveal py-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="relative bg-primary rounded-[48px] p-10 md:p-20 overflow-hidden text-center text-white">
                    {/* Background Graphics */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

                    <div className="relative z-10 max-w-2xl mx-auto space-y-10">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            WhatsApp CRM ilə satışlarınızı artırmağa hazırsınız?
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
                            <a href="#" className="w-full md:w-auto px-10 py-4 bg-white text-primary rounded-full font-bold hover:bg-white/90 transition-all">İndi başlayın</a>
                            <a href="#" className="w-full md:w-auto px-10 py-4 border-2 border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-all">Bizimlə əlaqə</a>
                        </div>
                    </div>

                    <div className="hidden md:block absolute -bottom-10 -left-10 w-48 h-48 opacity-20 pointer-events-none">
                        <i className="fa-solid fa-heart text-[200px] text-accent rotate-12"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
