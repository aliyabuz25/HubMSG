const Navbar = ({ onLangClick }) => {
    return (
        <header className="fixed top-0 w-full z-[1000] px-6 py-4 md:px-14 md:py-6 nav-blur">
            <nav className="max-w-[1400px] mx-auto flex justify-between items-center text-sm md:text-base">
                <div className="logo flex items-center gap-2.5 group cursor-pointer select-none">
                    <div className="w-10 h-10 md:w-11 md:h-11 bg-primary rounded-[14px] flex items-center justify-center -rotate-[12deg] shadow-xl shadow-primary/10 transition-all duration-500 group-hover:rotate-0">
                        <i className="fa-brands fa-whatsapp text-white text-xl md:text-2xl"></i>
                    </div>
                    <span className="text-2xl md:text-3xl font-extrabold tracking-tighter text-primary">HubMSG</span>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                    <div
                        onClick={onLangClick}
                        className="lang-selector text-xl cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
                    >
                        <i className="fa-solid fa-globe"></i>
                    </div>
                    <div className="w-[1.5px] h-5 bg-primary/10"></div>
                    <a
                        href="#"
                        className="px-6 py-2 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/10 hover:bg-[#1a0b5a] hover:-translate-y-0.5 transition-all"
                    >
                        Yönetim Girişi
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
