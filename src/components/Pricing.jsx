import { useState } from 'react';

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        {
            name: "Başlanğıc",
            desc: "Kiçik komandalar üçün",
            monthly: 29,
            yearly: 23,
            features: ["1 WhatsApp Nömrəsi", "1000 Mesaj/Gün", "Ortaq Panel Dəstəyi"],
            missing: ["Reklam API İnteqrasiyası"],
            button: "Sınaqdan keçir",
            highlight: false
        },
        {
            name: "Professional",
            desc: "Böyüyən bizneslər üçün",
            monthly: 79,
            yearly: 63,
            features: ["5 WhatsApp Nömrəsi", "Limitsiz Mesajlaşma", "Reklam API & Flows", "7/24 VIP Dəstək"],
            missing: [],
            button: "İndi Başla",
            highlight: true
        },
        {
            name: "Korporativ",
            desc: "Genişmiqyaslı həllər",
            customPrice: true,
            features: ["Limitsiz Nömrə Bağlantısı", "Fərdi İnteqrasiyalar", "Ağ Etiket (White Label)", "Xüsusi Server İmkanları"],
            missing: [],
            button: "Bizimlə Əlaqə",
            highlight: false
        }
    ];

    return (
        <section className="reveal py-20 bg-[#fbfaff]">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary tracking-tight">
                        Şəffaf Paketlər, Güclü İnfrastruktur
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-10">
                        Ehtiyacınıza uyğun olanı seçin. İstənilən vaxt dəyişdirin və ya ləğv edin.
                    </p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className={`text-sm font-bold transition-colors ${!isYearly ? 'text-primary' : 'text-primary/40'}`}>Aylıq</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="relative w-14 h-7 bg-primary/10 rounded-full p-1 transition-colors duration-300"
                        >
                            <div
                                className={`w-5 h-5 bg-primary rounded-full transition-transform duration-300 transform ${isYearly ? 'translate-x-7' : 'translate-x-0'}`}
                            ></div>
                        </button>
                        <span className={`text-sm font-bold transition-colors ${isYearly ? 'text-primary' : 'text-primary/40'}`}>
                            İllik <span className="ml-1 text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full">-20%</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`bg-white rounded-[32px] p-10 border transition-all duration-300 flex flex-col ${plan.highlight
                                    ? 'border-2 border-primary shadow-2xl scale-105 z-10'
                                    : 'border-black/5 hover:shadow-xl'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                                    Ən Çox Seçilən
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-2">{plan.name}</h3>
                                <p className="text-gray-400 text-sm">{plan.desc}</p>
                            </div>

                            <div className="mb-8 font-bold text-primary">
                                {plan.customPrice ? (
                                    <h3 className="text-3xl font-bold text-primary">Fərdi Qiymət</h3>
                                ) : (
                                    <>
                                        <span className="text-4xl transition-all duration-300 inline-block overflow-hidden h-[44px]">
                                            {isYearly ? plan.yearly : plan.monthly}
                                        </span>
                                        <span className="text-2xl ml-1">AZN</span>
                                        <span className="text-gray-400 font-normal">/ay</span>
                                    </>
                                )}
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow text-left">
                                {plan.features.map((feat, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-600">
                                        <i className="fa-solid fa-check text-green-500"></i> {feat}
                                    </li>
                                ))}
                                {plan.missing.map((feat, mIdx) => (
                                    <li key={mIdx} className="flex items-center gap-3 text-sm text-gray-400 line-through">
                                        <i className="fa-solid fa-xmark"></i> {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.highlight
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-[#1a0b5a]'
                                    : 'border-2 border-black/10 text-primary hover:bg-primary hover:text-white hover:border-primary'
                                }`}>
                                {plan.button}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
