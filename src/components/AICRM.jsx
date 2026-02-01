const AICRM = () => {
    return (
        <div className="reveal bg-[#0d0630] rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 overflow-hidden text-white">
            <div className="flex-1 space-y-6">
                <div className="flex items-center gap-2">
                    <i className="fa-solid fa-sparkles text-accent text-2xl"></i>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight">AI WhatsApp CRM</h3>
                </div>
                <p className="text-white/70 text-lg leading-relaxed">
                    HubMSG yapay zeka özetleri, yanıt önerileri ve dil bilgisi düzeltmeleri sunarak
                    iletişiminizde etkileşimi artırır ve daha profesyonel hale getirir.
                </p>
                <a href="#" className="inline-flex items-center gap-2 font-bold hover:text-accent transition-colors">
                    Daha çox məlumat <i className="fa-solid fa-arrow-right text-sm"></i>
                </a>
            </div>
            <div className="flex-1 w-full translate-x-4 md:translate-x-10 translate-y-4">
                <img src="https://images.assets-landingi.com/uc/1f01d54d-6134-4fb4-ad8a-c7d73fd4cb6b/whatsappIA.webp" alt="AI CRM" className="w-full h-auto rounded-tl-3xl shadow-2xl" />
            </div>
        </div>
    );
};

export default AICRM;
