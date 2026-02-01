const Chatbot = () => {
    return (
        <div className="reveal bg-[#f7f6ff] rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row-reverse items-center gap-10 overflow-hidden">
            <div className="flex-1 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">WhatsApp Chatbot</h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                    WhatsApp AI chatbot ile sohbetleri otomatikleştirin, toplu mesajlar gönderin ve müşteri
                    etkileşimini profesyonelce yönetin.
                </p>
                <a href="#" className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary/70 transition-colors">
                    Daha çox məlumat <i className="fa-solid fa-arrow-right text-sm"></i>
                </a>
            </div>
            <div className="flex-1 w-full -translate-x-4 md:-translate-x-10 translate-y-4">
                <img src="https://images.assets-landingi.com/uc/b5fcdbc2-528f-42af-8165-0c5991efef1b/Whatsappchatbot.webp" alt="Chatbot" className="w-full h-auto rounded-tr-3xl shadow-xl" />
            </div>
        </div>
    );
};

export default Chatbot;
