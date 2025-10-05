// Language System
let currentLanguage = 'tr';

const translations = {
    tr: {
        mainTitle: "Rezidans Tadilatları",
        mainDescription: "Mürettebatınız Mars'a indi ve yaşam alanınızı şişirdi. Artık habitat çerçevesi ve ambalaj malzemeleri yeniden kullanıma hazır. Bu kaynakları Mars kolonizasyonu için nasıl kullanabilirsiniz?",
        materialsTitle: "Mevcut Malzemeler",
        ideasTitle: "Yeniden Kullanım Fikirleri",
        noResults: "Bu kategoride henüz fikir bulunmamaktadır.",
        categories: {
            'tümü': 'Tümü',
            'güvenlik': 'Güvenlik',
            'altyapı': 'Altyapı',
            'yaşam-desteği': 'Yaşam Desteği',
            'gıda-üretimi': 'Gıda Üretimi',
            'tıbbi': 'Tıbbi',
            'enerji': 'Enerji',
            'bakım': 'Bakım',
            'sağlık': 'Sağlık',
            'konfor': 'Konfor'
        },
        priorities: {
            'YÜKSEK ÖNCELİK': 'YÜKSEK ÖNCELİK',
            'ORTA ÖNCELİK': 'ORTA ÖNCELİK',
            'DÜŞÜK ÖNCELİK': 'DÜŞÜK ÖNCELİK'
        }
    },
    en: {
        mainTitle: "Residence Renovations",
        mainDescription: "Your crew has landed on Mars and inflated your habitat. Now the habitat frame and packaging materials are ready for reuse. How can you utilize these resources for Mars colonization?",
        materialsTitle: "Available Materials",
        ideasTitle: "Reuse Ideas",
        noResults: "No ideas found in this category yet.",
        categories: {
            'tümü': 'All',
            'güvenlik': 'Security',
            'altyapı': 'Infrastructure',
            'yaşam-desteği': 'Life Support',
            'gıda-üretimi': 'Food Production',
            'tıbbi': 'Medical',
            'enerji': 'Energy',
            'bakım': 'Maintenance',
            'sağlık': 'Health',
            'konfor': 'Comfort'
        },
        priorities: {
            'YÜKSEK ÖNCELİK': 'HIGH PRIORITY',
            'ORTA ÖNCELİK': 'MEDIUM PRIORITY',
            'DÜŞÜK ÖNCELİK': 'LOW PRIORITY'
        }
    }
};

const materialTranslations = {
    tr: [
        { title: "3 Boyutlu Küp Yapısı", subtitle: "1 tam çerçeve" },
        { title: "Alüminyum Destekler", subtitle: "Çoklu parçalar" },
        { title: "Polimer Kompozitler", subtitle: "Karbon fiber ve reçine" },
        { title: "Köpük Ambalaj", subtitle: "Büyük hacim" },
        { title: "Balonlu Naylon ve Hava Yastıkları", subtitle: "Çoklu tabakalar" }
    ],
    en: [
        { title: "3D Cube Structure", subtitle: "1 complete frame" },
        { title: "Aluminum Supports", subtitle: "Multiple pieces" },
        { title: "Polymer Composites", subtitle: "Carbon fiber and resin" },
        { title: "Foam Packaging", subtitle: "Large volume" },
        { title: "Bubble Wrap and Air Cushion Bags", subtitle: "Multiple layers" }
    ]
};

const ideaTranslations = {
    tr: {
        titles: [
            "Acil Durum Hava Kilidi Çerçevesi",
            "Ekipman Depolama Rafları",
            "Termal Yalıtım Bariyerleri",
            "Toz Filtreleme Sistemi",
            "Hidroponik Yetiştirme İstasyonları",
            "Acil Durum Onarım Kitleri",
            "İlk Yardım İstasyonu Muhafazası",
            "Güneş Paneli Montaj Sistemleri",
            "Ekipman Bakım İstasyonu",
            "Hava Kalitesi İzleme Kabinleri",
            "Ses Yalıtım Panelleri",
            "Su Geri Dönüşüm Filtre Muhafazaları",
            "Egzersiz Ekipmanı Desteği",
            "Batarya Depolama Modülleri",
            "Kişisel Alan Ayırıcıları"
        ],
        tags: {
            "3 Boyutlu Küp Yapısı": "3 Boyutlu Küp Yapısı",
            "Alüminyum Destekler": "Alüminyum Destekler",
            "Polimer Kompozitler": "Polimer Kompozitler",
            "Köpük Ambalaj": "Köpük Ambalaj",
            "Balonlu Naylon ve Hava Yastıkları": "Balonlu Naylon ve Hava Yastıkları"
        }
    },
    en: {
        titles: [
            "Emergency Airlock Frame",
            "Equipment Storage Racks",
            "Thermal Insulation Barriers",
            "Dust Filtration System",
            "Hydroponic Growing Stations",
            "Emergency Repair Kits",
            "First Aid Station Enclosure",
            "Solar Panel Mounting Systems",
            "Equipment Maintenance Station",
            "Air Quality Monitoring Cabinets",
            "Sound Insulation Panels",
            "Water Recycling Filter Housings",
            "Exercise Equipment Support",
            "Battery Storage Modules",
            "Personal Space Dividers"
        ],
        tags: {
            "3 Boyutlu Küp Yapısı": "3D Cube Structure",
            "Alüminyum Destekler": "Aluminum Supports",
            "Polimer Kompozitler": "Polymer Composites",
            "Köpük Ambalaj": "Foam Packaging",
            "Balonlu Naylon ve Hava Yastıkları": "Bubble Wrap & Air Cushions"
        }
    }
};

const ideaDescriptionsEN = [
    "Habitat integrity is vital on Mars - pressure loss can be fatal within 60 seconds. The aluminum strut system (>90% aluminum alloy, 1000 kg total mass according to NASA data) can function as an emergency airlock frame during EVA (Extravehicular Activity) operations thanks to its 3D cube geometry. Against Mars' 600 Pascal (0.006 atm) atmospheric pressure, this frame provides structural strength to support 101,325 Pascal (1 atm) internal pressure. According to Perseverance rover data, temperature in Jezero Crater varies between -90°C and +20°C; aluminum 6061-T6 alloy maintains its modulus of elasticity (68.9 GPa) in this range. Micro-meteorite impact risk exists (approximately 1000 small impacts per year on ISS), this frame can create a 2x2x2 meter temporary pressurized zone within 15 minutes. System is modular: 4 base struts + 8 corner connectors = quick assembly. Kept ready at checkpoint before each EVA. Thermoset/thermoplastic composites (10% mass) provide additional reinforcement. Real scenarios: 1) Habitat tear - frame isolates damaged area, 2) EVA extension - emergency return airlock, 3) Equipment failure - temporary repair area. Reusable design withstands 50+ setup cycles. Compliant with NASA ISS Emergency Protocols.",
    "Organized storage in a Mars habitat increases efficiency in limited living space. Aluminum supports and carbon fiber reinforced polymer composites create stable modular shelves even in Mars' 0.38g gravity. This system can safely carry 50 kg of equipment and can be coated to protect against electrostatic Mars dust. The modular structure of shelves can be rearranged according to habitat needs. Composite materials help reduce radiation levels inside the habitat while their lightweight structure provides energy savings. According to NASA's ISS experience, organized storage increases crew efficiency by 30%.",
    "Mars' day-night temperature difference can reach 100°C. Foam packaging material functions as an excellent thermal insulator thanks to its closed-cell structure. These foam layers placed between habitat walls and critical equipment can reduce heat loss by 40%. Especially when used around water recycling systems, battery banks, and life support units, it significantly reduces energy consumption. The foam's low density (30-50 kg/m³) provides maximum protection while adding minimum weight. Inspired by Mars Perseverance rover's thermal control systems, multi-layer foam application can offer protection down to -80°C.",
    "Mars dust (regolith) contains sharp, electrostatically charged particles 2-3 microns in diameter and poses a serious threat to human health. The multi-layered structure of bubble wrap and air cushions creates an effective mechanical filtration system. Each layer captures different particle sizes: outer layer 100+ microns, middle layer 10-100 microns, inner layer 2-10 microns. Two-stage filtration at airlock entrances: first coarse dust cleaning with compressed air, then passage through these soft filters. According to NASA's Apollo program experience, lunar dust filtration extended life support systems' lifespan by 3 times. The same principle is critically important on Mars.",
    "Fresh food production is essential for long-term life on Mars. Aluminum frames provide ideal structure for vertical farming and maximize limited habitat space. Foam packaging can be optimized as hydroponic growing medium: pH neutral, sterile, reusable, and excellent structure for plant root attachment. ISS Veggie and APH (Advanced Plant Habitat) experiments have proven foam-based systems successful in growing lettuce, spinach, and tomatoes. Mars' low gravity provides advantages for plant growth. Each 1 m² growing area can produce 200g fresh vegetables per day. With LED lighting, 24-hour growth cycle means 50% faster harvest compared to Earth.",
    "Loss of habitat integrity is the greatest danger on Mars. Polymer composites and bubble wrap create lightweight, flexible, and strong emergency repair kits. Carbon fiber reinforced patches can withstand 101 kPa internal pressure and maintain flexibility even at -60°C. Application is simple: damaged area is cleaned, patch is prepared for activation with heater (120°C), held with pressure for 30 seconds, and full bonding achieved in 2 minutes. Each kit can repair holes 5-50 cm in diameter. Bubble wrap is used as first response material to prevent temporary pressure loss. Designed according to SpaceX Starship and ISS repair protocols, these systems can save crew lives.",
    "Medical emergencies on Mars are much more critical than on Earth - the nearest hospital is 225 million km away. Foam packaging protects medical supplies from radiation, temperature changes, and physical shocks. To provide sterile environment, foam can be treated with antimicrobial solutions. Wall-mounted stations made from polymer composite panels are placed at strategic points in each habitat module: bedrooms, laboratory, greenhouse, workshop. Each station contains: wound care supplies, emergency medications, diagnostic equipment, pressure bandages. According to NASA's ISS Medical Support System standard, 3 stations are required for a 6-person crew. Foam insulation keeps temperature-sensitive medications in the 15-25°C range.",
    "On Mars, energy = life. While solar energy is the most reliable source, Mars receives 43% less sunlight than Earth (590 W/m² vs 1000 W/m²). Dust storms can completely cover solar panels. Aluminum cube and support systems mount panels 2 m above ground and reduce dust accumulation. Adjustable angle mechanism (0-90°) is optimized for Mars' 25° axial tilt. If each panel produces 100W, a 10-panel system provides 1 kW - sufficient for basic habitat needs. Thanks to low gravity, lightweight aluminum frames support large panels. Vibration system motors can be added for dust cleaning. According to InSight and Perseverance experience, elevated mounting reduces dust accumulation by 60%.",
    "Every piece of equipment is critical on Mars and spare parts are limited. Periodic maintenance reduces failures by 80%. Special maintenance station provides organized maintenance with aluminum shelves and foam-protected work surfaces. Station features: electrostatic protective foam surface (protects sensitive electronics), magnetic tool holder panels (prevents tool loss in low gravity), LED magnifying work lamps, vacuum dust extraction system. After each maintenance operation, foam pads wrap tools and are stored. Mars' thin atmosphere increases electrostatic discharge - foam insulation prevents this. Average maintenance time on ISS: 2.5 hours daily. Organized station reduces this to 1.5 hours, giving crew 40% more research time.",
    "Air quality must be continuously monitored in a closed habitat environment. Parameters to be monitored: O₂ (19.5-23%), CO₂ (<0.5%), humidity (30-70%), temperature (18-27°C), VOC (Volatile Organic Compounds), particulate matter. Polymer composite cabinets protect sensitive sensors from Mars dust, electromagnetic interference, and physical damage. Bubble wrap creates a second protective layer inside the cabinet and preserves sensor calibration. 2 cabinets in each module: one at ceiling level (CO₂ is heavy, settles down), one at floor level. Cabinets wirelessly transmit data to central life support system. According to NASA's ISS Air Quality standard: measurement every 15 minutes. Automatic alarm and ventilation activation when low quality detected. Critical early warning system for crew health.",
    "Psychological health is as important as physical health for Mars mission success. ISS astronauts reported that constant machine noise (60-70 dB) reduced sleep quality by 40%. Foam and bubble wrap show excellent sound absorption properties: 80% absorption in 500-2000 Hz frequency range. Multi-layer panel system for bedroom walls: 1) Bubble wrap outer layer (breaks sound waves), 2) Foam middle layer (absorbs energy), 3) Inner nylon layer (prevents reflection). Each panel reduces noise by 20 dB. On Mars, pressure differences and life support systems create constant noise. Quiet bedrooms allow crew to sleep 7-8 hours uninterrupted. NASA psychological health reports: quality sleep reduces stress levels by 50% and increases team harmony.",
    "Water is the most valuable resource on Mars. Transporting 1 kg of water from Earth costs approximately $10,000. ISS achieves 93% water recycling rate; target is 98% on Mars. Polymer composite housings are ideal for multi-stage filtration system: 1) Mechanical filter (large particles), 2) Active carbon filter (organic molecules), 3) Ion exchange resin (minerals), 4) UV disinfection. Composite material is chemically inert, corrosion-resistant, and pressure-resistant (3 bar). Aluminum frames support heavy filter units and reduce vibration. System recycles urine, moisture, used water, and EVA suit water. 6-person crew consumes 30 liters water daily; 98% recycling = only 0.6 liters/day new water needed. This system is the foundation of survival.",
    "Mars' low gravity (0.38g) leads to serious health problems long-term: muscle loss (20-30% in 6 months), bone density loss (1-2%/month), cardiovascular deconditioning. Astronauts on ISS exercise 2.5 hours daily; at least 2 hours recommended on Mars. Aluminum frames create wall-mounted exercise station: resistance bands, pull-up bar, squat platform, cardio bike mounting points. Foam-padded handles prevent hand slipping and provide comfort. In low gravity, equipment must be firmly secured - aluminum structure withstands 200 kg pulling force. Exercise protocol: resistance exercises (for muscles), cardiovascular exercises (for heart), bone loading exercises (for bone density). Regular exercise reduces post-Mars return recovery time from 6 months to 2 months.",
    "Solar energy on Mars is intermittent: dust storms can last 20-40 days and cover solar panels by 99%. In 2018, Opportunity rover lost communication after global dust storm. Backup battery bank is vitally important. Lithium-ion batteries work optimally at 20-25°C; thermal control is critical on Mars. Foam insulation keeps batteries at optimal temperature and reduces thermal runaway risk. Polymer composite compartments physically separate each battery - one battery failure doesn't affect others. Storage module features: fire-resistant compartments, temperature sensors, automatic circuit breakers, ventilation channels. Minimum energy storage for habitat: 50 kWh (10 days sunless operation). Batteries are replaced in 3-5 years; modular system provides easy maintenance. Energy security = life security.",
    "Journey to Mars takes 6-9 months, surface stay 500+ days. 4-6 people live in 50-100 m² habitat area. Long-term isolation studies (Mars500, HI-SEAS) have shown that personal privacy is critical for psychological health. Lack of privacy: increased stress, team conflicts, depression risk. Lightweight aluminum frames and bubble wrap curtains create flexible partition systems. 2x2 m personal space for each crew member: sleep, reading, communication, hobbies. Bubble wrap: visual privacy, partial sound insulation, air permeability (CO₂ doesn't accumulate). System sets up/dismantles in 5 minutes. Modular design rearranges according to common activities. NASA psychology reports: personal space increases mission success rate by 35%. Crew happiness = mission success."
];

function switchLanguage() {
    try {
        currentLanguage = currentLanguage === 'tr' ? 'en' : 'tr';
        const langBtn = document.getElementById('langText');
        if (langBtn) {
            langBtn.textContent = currentLanguage === 'tr' ? 'EN' : 'TR';
        }
        document.documentElement.lang = currentLanguage;
        
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(el => {
            el.classList.add('changing');
        });
        
        setTimeout(() => {
            updateTranslations();
            elements.forEach(el => {
                el.classList.remove('changing');
            });
        }, 200);

        // Dil tercihini localStorage'a kaydet
        localStorage.setItem('preferredLanguage', currentLanguage);
    } catch (error) {
        console.error('Dil değiştirme hatası:', error);
    }
}

function updateTranslations() {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            el.textContent = translations[currentLanguage][key];
        }
    });
    
    renderCategories();
    renderMaterials();
    renderIdeas();
}

const categories = [
    { id: 'tümü', name: 'Tümü' },
    { id: 'güvenlik', name: 'Güvenlik' },
    { id: 'altyapı', name: 'Altyapı' },
    { id: 'yaşam-desteği', name: 'Yaşam Desteği' },
    { id: 'gıda-üretimi', name: 'Gıda Üretimi' },
    { id: 'tıbbi', name: 'Tıbbi' },
    { id: 'enerji', name: 'Enerji' },
    { id: 'bakım', name: 'Bakım' },
    { id: 'sağlık', name: 'Sağlık' },
    { id: 'konfor', name: 'Konfor' }
];

const materials = [
    {
        title: "3 Boyutlu Küp Yapısı",
        subtitle: "1 tam çerçeve",
        color: "blue",
        icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>'
    },
    {
        title: "Alüminyum Destekler",
        subtitle: "Çoklu parçalar",
        color: "gray",
        icon: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>'
    },
    {
        title: "Polimer Kompozitler",
        subtitle: "Karbon fiber ve reçine",
        color: "cyan",
        icon: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/>'
    },
    {
        title: "Köpük Ambalaj",
        subtitle: "Büyük hacim",
        color: "yellow",
        icon: '<path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>'
    },
    {
        title: "Balonlu Naylon ve Hava Yastıkları",
        subtitle: "Çoklu tabakalar",
        color: "emerald",
        icon: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>'
    }
];

const ideas = [
    {
        id: 1,
        title: "Acil Durum Hava Kilidi Çerçevesi",
        priority: "YÜKSEK ÖNCELİK",
        priorityClass: "priority-high",
        category: "güvenlik",
        categoryDisplay: "Güvenlik",
        tags: ["3 Boyutlu Küp Yapısı", "Alüminyum Destekler"],
        description: "Mars'ta habitat bütünlüğü yaşamsal önem taşır - basınç kaybı 60 saniye içinde fatal olabilir. Alüminyum strut sistemi (>90% alüminyum alaşım, NASA verilerine göre 1000 kg toplam kütle), 3 boyutlu küp geometrisi sayesinde EVA (Extravehicular Activity) operasyonları sırasında acil hava kilidi çerçevesi olarak işlev görebilir. Mars'ın 600 Pascal (0.006 atm) atmosferik basıncına karşı, bu çerçeve 101,325 Pascal (1 atm) iç basıncı destekleyecek yapısal mukavemet sağlar.Perseverance rover verilerine göre, Jezero Krateri'nde sıcaklık -90°C ile +20°C arasında değişir; alüminyum 6061-T6 alaşımı bu aralıkta elastikiyet modülünü korur (68.9 GPa). Mikro-meteorit çarpma riski vardır (ISS'te yılda ~1000 küçük etki), bu çerçeve 15 dakika içinde 2x2x2 metre geçici basınçlı bölge oluşturabilir. Sistem modüler: 4 temel strut + 8 köşe konnektör = hızlı montaj. Her EVA öncesi check-point'te hazır bekletilir. Thermoset/thermoplastic kompozitler (%10 kütle) ek güçlendirme sağlar.Gerçek senaryolar: 1) Habitat yırtığı - çerçeve hasar bölgesini izole eder, 2) EVA uzaması - acil geri dönüş hava kilidi, 3) Ekipman arızası - geçici onarım alanı. Yeniden kullanılabilir tasarım, 50+ kurulum döngüsüne dayanır. NASA ISS Emergency Protocols'e uyguntur."
    },
    {
        id: 2,
        title: "Ekipman Depolama Rafları",
        priority: "YÜKSEK ÖNCELİK",
        priorityClass: "priority-high",
        category: "altyapı",
        categoryDisplay: "Altyapı",
        tags: ["Alüminyum Destekler", "Polimer Kompozitler"],
        description: "Mars habitatında organize depolama, sınırlı 50-100 m² yaşam alanında kritiktir. Alüminyum strut sistemi (>90% Al alaşım, toplam 1000 kg) ve polimer kompozitler (40% resin + 60% carbon fiber, 100 kg) ile modüler raf yapısı oluşturulur. Mars'ın 3.71 m/s² (0.38g) yer çekiminde bile, carbon fiber'ın 230 GPa çekme mukavemeti sayesinde her raf 50 kg ekipman taşıyabilir - Dünya'daki eşdeğeri 132 kg olurdu.Mars tozunun elektrostatik yüklenmesi ciddi tehdit: UCF Mars Simulant verileri, toz parçacıklarının 2-20 mikron çapında, +300V yüke ulaşabildiğini gösterir. Polimer kompozit yüzey anti-statik kaplamayla işlenir (10¹⁰ ohm/square yüzey direnci). Rafların modüler tasarımı: 30 cm birim modüller, istenen yüksekliğe çıkabilir. Tipik konfigürasyon: 6 raf x 4 sütun = 24 depolama alanı, toplam 600 kg kapasiteli.Carbon fiber kompozit radyasyon kalkanı etkisi: Mars yüzeyinde 233 mSv/yıl radyasyon (Dünya'da 3 mSv/yıl), 5 cm kompozit duvar %15 azaltma sağlar. ISS Logistics Module verilerine göre, organize depolama arama süresini 12 dakikadan 3 dakikaya düşürür (%75 kazanç). Hafif yapı (aluminum + composite) toplam 1100 kg, eşdeğer çelik sistem 2800 kg olurdu - 15,000 USD/kg taşıma maliyetinde 25.5 milyon USD tasarruf. " +
"NASA'nın ISS deneyimleri, düzenli depolamanın mürettebat verimliliğini %30 artırdığını göstermiştir."
    },
    {
        id: 3,
        title: "Termal Yalıtım Bariyerleri",
        priority: "ORTA ÖNCELİK",
        priorityClass: "priority-medium",
        category: "yaşam-desteği",
        categoryDisplay: "Yaşam Desteği",
        tags: ["Köpük Ambalaj"],
        description: "Mars'ın gece-gündüz sıcaklık farkı 100°C'yi bulabilir. Köpük ambalaj malzemesi, kapalı hücre yapısı sayesinde mükemmel bir termal yalıtkan olarak işlev görür. Habitat duvarları ile kritik ekipman arasına yerleştirilen bu köpük katmanlar, ısı kaybını %40 azaltabilir. Özellikle su geri dönüşüm sistemleri, batarya bankaları ve yaşam destek ünitelerinin etrafında kullanıldığında, enerji tüketimini önemli ölçüde düşürür. Köpüğün düşük yoğunluğu (30-50 kg/m³) minimum ağırlık eklerken maksimum koruma sağlar. Mars Perseverance rover'ının termal kontrol sistemlerinden esinlenerek, çok katmanlı köpük uygulaması -80°C'ye kadar koruma sunabilir."
    },
    {
        id: 4,
        title: "Toz Filtreleme Sistemi",
        priority: "ORTA ÖNCELİK",
        priorityClass: "priority-medium",
        category: "yaşam-desteği",
        categoryDisplay: "Yaşam Desteği",
        tags: ["Balonlu Naylon ve Hava Yastıkları"],
        description: "Mars tozu (regolith), 2-3 mikron çapında keskin, elektrostatik yüklü parçacıklar içerir ve insan sağlığı için ciddi tehdit oluşturur. Balonlu naylon ve hava yastıklarının çok katmanlı yapısı, etkili bir mekanik filtreleme sistemi yaratır. Her katman farklı parçacık boyutunu yakalar: dış katman 100+ mikron, orta katman 10-100 mikron, iç katman 2-10 mikron. Hava kilidi girişlerinde iki aşamalı filtrasyon: önce basınçlı hava ile kaba toz temizliği, sonra bu yumuşak filtrelerden geçiş. NASA'nın Apollo programı deneyimlerine göre, lunar toz filtreleme yaşam destek sistemlerinin ömrünü 3 kat uzatmıştır. Aynı prensip Mars'ta da kritik öneme sahiptir."
    },
    {
        id: 5,
        title: "Hidroponik Yetiştirme İstasyonları",
        priority: "ORTA ÖNCELİK",
        priorityClass: "priority-medium",
        category: "gıda-üretimi",
        categoryDisplay: "Gıda Üretimi",
        tags: ["Alüminyum Destekler", "Köpük Ambalaj"],
        description: "Mars'ta uzun süreli yaşam için taze besin üretimi şarttır. Alüminyum çerçeveler, dikey tarım için ideal yapı sağlar ve sınırlı habitat alanını maksimize eder. Köpük ambalaj, hidroponik büyüme ortamı olarak optimize edilebilir: pH nötr, steril, yeniden kullanılabilir ve bitki köklerinin tutunması için mükemmel yapı. ISS'teki Veggie ve APH (Advanced Plant Habitat) deneyleri, köpük bazlı sistemlerin marul, ıspanak ve domates yetiştirmede başarılı olduğunu kanıtlamıştır. Mars'ın düşük yer çekimi, bitki büyümesi için avantaj sağlar. Her 1 m² yetiştirme alanı, günde 200g taze sebze üretebilir. LED aydınlatma ile 24 saat büyüme döngüsü, Dünya'ya göre %50 daha hızlı hasat demektir."
    },
    {
        id: 6,
        title: "Acil Durum Onarım Kitleri",
        priority: "YÜKSEK ÖNCELİK",
        priorityClass: "priority-high",
        category: "güvenlik",
        categoryDisplay: "Güvenlik",
        tags: ["Polimer Kompozitler", "Balonlu Naylon"],
        description: "Habitat bütünlüğünün bozulması Mars'taki en büyük tehlikedir. Polimer kompozitler ve balonlu naylon, hafif, esnek ve güçlü acil onarım kitleri oluşturur. Karbon fiber takviyeli yamalar, 101 kPa iç basınca dayanabilir ve -60°C'de bile esnekliğini korur. Uygulanması basittir: hasar bölgesi temizlenir, yama ısıtıcı ile aktivasyona hazırlanır (120°C), 30 saniye basınçla tutulur ve 2 dakikada tam yapışma sağlanır. Her kit 5-50 cm çapında delikleri onarabilir. Balonlu naylon, geçici basınç kaybını önlemek için ilk müdahale materyali olarak kullanılır. SpaceX Starship ve ISS onarım protokollerine uygun olarak tasarlanmış bu sistemler, mürettebatın hayatını kurtarabilir."
    },
    {
        id: 7,
        title: "İlk Yardım İstasyonu Muhafazası",
        priority: "YÜKSEK ÖNCELİK",
        priorityClass: "priority-high",
        category: "tıbbi",
        categoryDisplay: "Tıbbi",
        tags: ["Köpük Ambalaj", "Polimer Kompozitler"],
        description: "Mars'ta tıbbi acil durumlar, Dünya'ya göre çok daha kritiktir - en yakın hastane 225 milyon km uzaktadır. Köpük ambalaj, tıbbi malzemeleri radyasyondan, sıcaklık değişimlerinden ve fiziksel şoklardan korur. Steril ortam sağlamak için köpük, antimikrobiyal çözeltilerle işlenebilir. Polimer kompozit panellerden oluşan duvar montajlı istasyonlar, her habitat modülünde stratejik noktalara yerleştirilir: yatak odaları, laboratuvar, sera, workshop. Her istasyon şunları içerir: yara bakım malzemeleri, acil ilaçlar, tanı ekipmanları, basınç bandajları. NASA'nın ISS Tıbbi Destek Sistemi standardına göre, 6 kişilik mürettebat için 3 istasyon gereklidir. Köpük yalıtım, sıcaklığa duyarlı ilaçları 15-25°C aralığında tutar."
    },
    {
        id: 8,
        title: "Güneş Paneli Montaj Sistemleri",
        priority: "YÜKSEK ÖNCELİK",
        priorityClass: "priority-high",
        category: "enerji",
        categoryDisplay: "Enerji",
        tags: ["Alüminyum Destekler", "3 Boyutlu Küp Yapısı"],
        description: "Mars'ta enerji = hayat. Güneş enerjisi en güvenilir kaynak olsa da, Mars Dünya'dan %43 daha az güneş ışığı alır (590 W/m² vs 1000 W/m²). Toz fırtınaları güneş panellerini tamamen kapatabilir. Alüminyum küp ve destek sistemler, panelleri yerden 2 m yüksekliğe monte eder ve toz birikimini azaltır. Ayarlanabilir açı mekanizması (0-90°), Mars'ın 25° eksen eğimine göre optimize edilir. Her panel 100W üretirse, 10 panellik sistem 1 kW sağlar - temel habitat ihtiyaçları için yeterli. Düşük yer çekimi sayesinde, hafif alüminyum çerçeveler büyük panelleri destekler. Toz temizleme için titreşim sistemli motorlar eklenebilir. InSight ve Perseverance tecrübelerine göre, yüksekte montaj toz birikimini %60 azaltır."
    },
    {
        id: 9,
        title: "Ekipman Bakım İstasyonu",
        priority: "ORTA ÖNCELİK",
        priorityClass: "priority-medium",
        category: "bakım",
        categoryDisplay: "Bakım",
        tags: ["Alüminyum Destekler", "Köpük Ambalaj"],
        description: "Mars'ta her ekipman kritiktir ve yedek parça kısıtlıdır. Periyodik bakım, arızaları %80 azaltır. Özel bakım istasyonu, alüminyum raflar ve köpük korumalı çalışma yüzeyleri ile organize bakım sağlar. İstasyonun özellikleri: elektrostatik koruyucu köpük yüzey (hassas elektroniği korur), manyetik alet tutucu paneller (düşük yer çekiminde araç kaybını önler), LED büyüteçli çalışma lambaları, vakumlu toz emme sistemi. Her bakım işlemi sonrası köpük pedler araçları sarar ve depolanır. Mars'ın ince atmosferi, elektrostatik deşarjı artırır - köpük yalıtım bunu önler. ISS'te ortalama bakım süresi: günde 2.5 saat. Organize istasyon bunu 1.5 saate düşürür, mürettebata %40 daha fazla araştırma zamanı kazandırır."
    },
    {
        id: 10,
        title: "Hava Kalitesi İzleme Kabinleri",
        priority: "ORTA ÖNCELİK",
        priorityClass: "priority-medium",
        category: "sağlık",
        categoryDisplay: "Sağlık",
        tags: ["Polimer Kompozitler", "Balonlu Naylon"],
        description: "Kapalı habitat ortamında hava kalitesi sürekli izlenmelidir. İzlenmesi gereken parametreler: O₂ (19.5-23%), CO₂ (<0.5%), nem (30-70%), sıcaklık (18-27°C), VOC (Uçucu Organik Bileşikler), partikül madde. Polimer kompozit kabinler, hassas sensörleri Mars tozundan, elektromanyetik girişimden ve fiziksel hasardan korur. Balonlu naylon, kabinin içinde ikinci koruma katmanı oluşturur ve sensör kalibrasyonunu korur. Her modülde 2 kabin: biri tavan seviyesinde (CO₂ ağırdır, alta çöker), biri zemin seviyesinde. Kabinler, merkezi yaşam destek sistemine kablosuz veri iletir. NASA'nın ISS Air Quality standardına göre: her 15 dakikada bir ölçüm. Düşük kalite algılandığında otomatik alarm ve havalandırma aktivasyonu. Mürettebat sağlığı için kritik erken uyarı sistemi."
    },
    {
        id: 11,
        title: "Ses Yalıtım Panelleri",
        priority: "DÜŞÜK ÖNCELİK",
        priorityClass: "priority-low",
        category: "konfor",
        categoryDisplay: "Konfor",
        tags: ["Köpük Ambalaj", "Balonlu Naylon"],
        description: "Psikolojik sağlık, Mars misyonunun başarısı için fiziksel sağlık kadar önemlidir. ISS astronotları, sürekli makine gürültüsünün (60-70 dB) uyku kalitesini %40 düşürdüğünü bildirmiştir. Köpük ve balonlu naylon, mükemmel ses emici özellikler gösterir: 500-2000 Hz frekans aralığında %80 emilim. Yatak odası duvarlarına çok katmanlı panel sistemi: 1) Balonlu naylon dış katman (ses dalgalarını kırar), 2) Köpük orta katman (enerji emer), 3) İç naylon katman (yansımayı önler). Her panel 20 dB gürültü azaltır. Mars'ta, basınç farklılıkları ve yaşam destek sistemleri sürekli gürültü yaratır. Sessiz yatak odaları, mürettebatın 7-8 saat kesintisiz uyumasını sağlar. NASA psikolojik sağlık raporları: kaliteli uyku, stres seviyelerini %50 azaltır ve ekip uyumunu artırır."
    },
    {
        id: 12,
        title: "Su Geri Dönüşüm Filtre Muhafazaları",
        priority: "YÜKSEK ÖNCELİK",
        priorityClass: "priority-high",
        category: "yaşam-desteği",
        categoryDisplay: "Yaşam Desteği",
        tags: ["Polimer Kompozitler", "Alüminyum Destekler"],
        description: "Su, Mars'taki en değerli kaynaktır. Dünya'dan 1 kg su taşımak yaklaşık 10,000 USD maliyetlidir. ISS %93 su geri dönüşüm oranına ulaşır; Mars'ta hedef %98'dir. Polimer kompozit muhafazalar, çok aşamalı filtrasyon sistemi için idealdir: 1) Mekanik filtre (büyük partiküller), 2) Aktif karbon filtre (organik moleküller), 3) İyon değişim rezini (mineraller), 4) UV dezenfeksiyon. Kompozit malzeme kimyasal olarak inert, korozyona dayanıklı ve basınca (3 bar) mukavimdir. Alüminyum çerçeveler, ağır filtre ünitelerini destekler ve titreşimi azaltır. Sistem, idrar, nem, kullanılmış su ve EVA suit suyunu geri dönüştürür. 6 kişilik mürettebat günde 30 litre su tüketir; %98 geri dönüşüm = sadece 0.6 litre/gün yeni su gerekir. Bu sistem hayatta kalmanın temelidir."
    },
    {
        id: 13,
        title: "Egzersiz Ekipmanı Desteği",
        priority: "ORTA ÖNCELİK",
        priorityClass: "priority-medium",
        category: "sağlık",
        categoryDisplay: "Sağlık",
        tags: ["Alüminyum Destekler", "Köpük Ambalaj"],
        description: "Mars'ın düşük yer çekimi (0.38g), uzun vadede ciddi sağlık sorunlarına yol açar: kas kaybı (%20-30 6 ayda), kemik yoğunluğu kaybı (%1-2/ay), kardiyovasküler dekondisyon. ISS'te astronotlar günde 2.5 saat egzersiz yapar; Mars'ta en az 2 saat önerilir. Alüminyum çerçeveler, duvar montajlı egzersiz istasyonu oluşturur: direnç bantları, pull-up barı, squat platformu, kardiyo bike montaj noktaları. Köpük dolgulu tutamaçlar, elin kaymasını önler ve konfor sağlar. Düşük yer çekiminde, ekipman sağlam sabitlenmelidir - alüminyum yapı 200 kg çekme kuvvetine dayanır. Egzersiz protokolü: direnç egzersizleri (kas için), kardiyovasküler egzersizler (kalp için), kemik yükleme egzersizleri (kemik yoğunluğu için). Düzenli egzersiz, Mars'tan Dünya'ya dönüş sonrası iyileşme süresini 6 aydan 2 aya düşürür."
    },
    {
        id: 14,
        title: "Batarya Depolama Modülleri",
        priority: "ORTA ÖNCELİK",
        priorityClass: "priority-medium",
        category: "enerji",
        categoryDisplay: "Enerji",
        tags: ["Polimer Kompozitler", "Köpük Ambalaj"],
        description: "Mars'ta güneş enerjisi kesintilidir: toz fırtınaları 20-40 gün sürebilir ve güneş panellerini %99 kapatır. 2018 Opportunity rover, küresel toz fırtınası sonrası iletişimi kaybetti. Yedek batarya bankası hayati önem taşır. Lityum-iyon bataryalar optimize edilmiş 20-25°C'de çalışır; Mars'ta termal kontrol kritiktir. Köpük yalıtım, bataryaları optimal sıcaklıkta tutar ve termal runaway riskini azaltır. Polimer kompozit bölmeler, her bataryayı fiziksel olarak ayırır - bir batarya arızası diğerlerini etkilemez. Depolama modülü özellikleri: yangına dayanıklı kompartmanlar, sıcaklık sensörleri, otomatik devre kesiciler, havalandırma kanalları. Habitat için minimum enerji depolama: 50 kWh (10 gün güneşsiz operasyon). Bataryalar 3-5 yılda değiştirilir; modüler sistem kolay bakım sağlar. Enerji güvenliği = yaşam güvenliği."
    },
    {
        id: 15,
        title: "Kişisel Alan Ayırıcıları",
        priority: "DÜŞÜK ÖNCELİK",
        priorityClass: "priority-low",
        category: "konfor",
        categoryDisplay: "Konfor",
        tags: ["Alüminyum Destekler", "Balonlu Naylon"],
        description: "Mars'a yolculuk 6-9 ay, yüzeyde kalış 500+ gün sürer. 50-100 m² habitat alanında 4-6 kişi yaşar. Uzun süreli izolasyon çalışmaları (Mars500, HI-SEAS) göstermiştir ki, kişisel mahremiyet psikolojik sağlık için kritiktir. Mahremiyet eksikliği: stres artışı, ekip çatışmaları, depresyon riski. Hafif alüminyum çerçeveler ve balonlu naylon perdeler, esnek bölme sistemleri oluşturur. Her mürettebat üyesine 2x2 m kişisel alan: uyku, okuma, iletişim, hobi. Balonlu naylon: görsel mahremiyet, kısmi ses yalıtımı, hava geçirgenliği (CO₂ birikmez). Sistem 5 dakikada kurulur/kaldırılır. Modüler tasarım, ortak aktivitelere göre yeniden düzenlenir. NASA psikoloji raporları: kişisel alan, mission başarı oranını %35 artırır. Mürettebat mutluluğu = mission başarısı."
    }
];

function renderCategories() {
    const container = document.getElementById('categoryFilter');
    container.innerHTML = '';
    
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'category-btn' + (cat.id === 'tümü' ? ' active' : '');
        btn.textContent = translations[currentLanguage].categories[cat.id];
        btn.onclick = function() {
            filterByCategory(cat.id, this);
        };
        container.appendChild(btn);
    });
}

function renderMaterials() {
    const container = document.getElementById('materialsGrid');
    container.innerHTML = '';
    
    const materialData = materialTranslations[currentLanguage];
    
    materials.forEach((material, index) => {
        const card = document.createElement('div');
        card.className = 'material-card';
        card.innerHTML = `
            <div class="material-content">
                <div class="material-icon bg-${material.color}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${material.icon}</svg>
                </div>
                <div class="material-info">
                    <h3>${materialData[index].title}</h3>
                    <p>${materialData[index].subtitle}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderIdeas() {
    const container = document.getElementById('ideasContainer');
    container.innerHTML = '';
    
    const titles = ideaTranslations[currentLanguage].titles;
    const tagTranslations = ideaTranslations[currentLanguage].tags;
    const priorities = translations[currentLanguage].priorities;
    const categoriesDisplay = translations[currentLanguage].categories;
    
    ideas.forEach((idea, index) => {
        const translatedTags = idea.tags.map(tag => tagTranslations[tag]);
        const tagsHTML = translatedTags.map(tag => `
            <div class="tag">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                </svg>
                ${tag}
            </div>
        `).join('');

        const ideaCard = document.createElement('div');
        ideaCard.className = 'idea-card';
        ideaCard.id = 'idea-card-' + idea.id;
        
        const description = currentLanguage === 'en' ? ideaDescriptionsEN[index] : idea.description;
        
        ideaCard.innerHTML = `
            <div class="idea-header" onclick="toggleIdea(${idea.id})">
                <div class="idea-header-content">
                    <div class="idea-info">
                        <div class="idea-title-row">
                            <h3>${titles[index]}</h3>
                            <span class="priority-badge ${idea.priorityClass}">${priorities[idea.priority]}</span>
                            <span class="category-badge">${categoriesDisplay[idea.category]}</span>
                        </div>
                        <div class="tags-container">${tagsHTML}</div>
                    </div>
                    <svg id="chevron-${idea.id}" class="chevron" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
            </div>
            <div id="description-${idea.id}" class="idea-description">${description}</div>
        `;
        container.appendChild(ideaCard);
    });
}

function filterByCategory(categoryId, btnElement) {
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');

    let visibleCount = 0;
    ideas.forEach(idea => {
        const card = document.getElementById('idea-card-' + idea.id);
        if (categoryId === 'tümü' || idea.category === categoryId) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });

    document.getElementById('ideaCount').textContent = '(' + visibleCount + ')';
    document.getElementById('noResults').style.display = visibleCount === 0 ? 'block' : 'none';
}

function toggleIdea(id) {
    const description = document.getElementById('description-' + id);
    const chevron = document.getElementById('chevron-' + id);
    
    description.classList.toggle('show');
    chevron.classList.toggle('rotated');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Kaydedilmiş dil tercihini kontrol et
        const savedLanguage = localStorage.getItem('preferredLanguage');
        if (savedLanguage) {
            currentLanguage = savedLanguage;
            document.documentElement.lang = currentLanguage;
            document.getElementById('langText').textContent = currentLanguage === 'tr' ? 'EN' : 'TR';
        }

        const langBtn = document.getElementById('langBtn');
        if (langBtn) {
            langBtn.addEventListener('click', switchLanguage);
        }

        renderCategories();
        renderMaterials();
        renderIdeas();

        // Sayfa yüklendiğinde ilk kategoriyi aktif et
        const firstCategoryBtn = document.querySelector('.category-btn');
        if (firstCategoryBtn) {
            firstCategoryBtn.click();
        }
    } catch (error) {
        console.error('Başlatıcı hatası:', error);
    }
});
