const LanguageModal = ({ isOpen, onClose, onSelectLang }) => {
    const languages = [
        { code: 'az', name: 'Azərbaycan' },
        { code: 'tr', name: 'Türkçe' },
        { code: 'en', name: 'English' },
        { code: 'ru', name: 'Русский' },
        { code: 'ph', name: 'Filipino' },
        { code: 'th', name: 'ไทย' },
        { code: 'de', name: 'Deutsch' },
        { code: 'jp', name: '日本語' },
    ];

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[2000] bg-primary/20 backdrop-blur-sm flex items-center justify-center animate-[fadeIn_0.3s_ease-out]"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="bg-white rounded-[32px] p-8 w-full max-w-md shadow-2xl animate-[scaleIn_0.3s_ease-out]">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-primary">Dil seçimi</h3>
                    <button onClick={onClose} className="text-primary/50 hover:text-primary transition-colors text-2xl">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => onSelectLang(lang.code)}
                            className="flex items-center gap-3 p-3 rounded-2xl hover:bg-[#f7f6ff] transition-all text-left font-semibold text-primary group"
                        >
                            <span className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-[10px] font-bold group-hover:bg-accent transition-colors">
                                {lang.code.toUpperCase()}
                            </span>
                            {lang.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LanguageModal;
