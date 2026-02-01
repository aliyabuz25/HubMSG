import { useState } from 'react';

const Features = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            title: "Sohbetleri birleştir",
            image: "https://images.assets-landingi.com/uc/5bdf6f71-3b1d-4105-be75-7b0d9b84f035/block11.webp",
            color: "#ffffff",
            desc: "WhatsApp numaranızı erişimi kaybetmeden bağlayın, temsilciler ortak panelden yanıt versin."
        },
        {
            title: "Müşterileri yönlendir",
            image: "https://images.assets-landingi.com/uc/70d312b1-d8b8-465b-a74c-ad089757c0d0/block12.webp",
            color: "#ffffff",
            desc: "Müşterilerinizi doğru temsilcilere otomatik olarak yönlendirin ve verimliliği artırın."
        },
        {
            title: "Satışları tamamla",
            image: "https://images.assets-landingi.com/uc/ea707fca-e722-40ba-be93-226bd84df740/block13.webp",
            color: "#f0f8ff",
            desc: "Sohbet üzerinden satış sürecini yönetin ve ödeme bağlantıları ile süreci hızlandırın."
        },
        {
            title: "Desteği otomatikleştir",
            image: "https://images.assets-landingi.com/uc/d1dc0230-0077-4b7b-b316-ec18724fea43/block14.webp",
            color: "#f8faff",
            desc: "Sıkça sorulan soruları chatbot ile yanıtlayın ve destek yükünüzü %80 azaltın."
        }
    ];

    return (
        <section
            id="features-section"
            className="reveal py-12 md:py-14 bg-white text-center transition-colors duration-700 ease-in-out"
            style={{ backgroundColor: tabs[activeTab].color }}
        >
            <div className="max-w-[1200px] mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-3 text-primary tracking-tight">
                    {tabs[activeTab].title} tek bir yerde birleştir.
                </h2>
                <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-8">
                    {tabs[activeTab].desc}
                </p>

                <div className="max-w-[850px] mx-auto mb-10 relative">
                    <img
                        key={activeTab}
                        src={tabs[activeTab].image}
                        alt="Feature Mockup"
                        className="w-full h-auto transition-all duration-500 animate-[fadeIn_0.5s_ease-out]"
                    />
                </div>

                <div className="inline-flex flex-wrap justify-center bg-[#f7f6ff] p-1.5 rounded-2xl md:rounded-full gap-1 shadow-sm border border-black/5">
                    {tabs.map((tab, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTab(idx)}
                            className={`px-6 py-2.5 rounded-full font-semibold transition-all text-sm md:text-base ${activeTab === idx
                                    ? 'bg-accent text-primary shadow-sm'
                                    : 'text-primary/70 hover:bg-black/5'
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
