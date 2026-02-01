const Footer = () => {
    return (
        <footer className="py-12 bg-white border-t border-gray-100">
            <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-sm">
                <div className="logo flex items-center gap-2.5 group cursor-pointer select-none">
                    <div className="w-8 h-8 bg-primary rounded-[10px] flex items-center justify-center -rotate-[12deg] shadow-lg shadow-primary/10 transition-all duration-300 group-hover:rotate-0">
                        <i className="fa-brands fa-whatsapp text-white text-sm"></i>
                    </div>
                    <span className="text-xl font-extrabold tracking-tighter text-primary">HubMSG</span>
                </div>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-primary transition-colors">Haqqımızda</a>
                    <a href="#" className="hover:text-primary transition-colors">Xidmət Şərtləri</a>
                    <a href="#" className="hover:text-primary transition-colors">Məxfilik Siyasəti</a>
                </div>
                <div>© 2026 HubMSG. Bütün hüquqlar qorunur.</div>
            </div>
        </footer>
    );
};

export default Footer;
