import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { createContext, useContext, useState, useEffect } from 'react';

// Simple fallback translations when i18n isn't available
const fallbackTranslations = {
  en: {
    navigation: {
      home: "Home",
      spicylens: "SpicyLens",
      about: "About", 
      products: "Products",
      contact: "Contact",
      language: "Language",
      getStarted: "Get Started"
    },
    hero: {
      title: "Leading AI Innovation",
      subtitle: "in Saudi Arabia",
      description: "SpicyDonut is revolutionizing the digital landscape with cutting-edge AI solutions, empowering businesses and individuals with intelligent technology.",
      cta: "Discover Our AI Solutions",
      stats: {
        clients: "Clients Served",
        projects: "Projects Completed",
        countries: "Countries Served",
        accuracy: "AI Accuracy"
      }
    },
    spicylens: {
      title: "Meet SpicyLens",
      description: "Your AI-Powered Search Companion that understands context, learns from interactions, and delivers insights that matter.",
      searchPlaceholder: "Search products...",
      results: "results",
      result: "result",
      resultsIn: "results in",
      currency: "SAR",
      massiveDataset: "Massive dataset with instant response",
      features: {
        fast: {
          title: "Lightning Fast",
          description: "Sub-second response times with real-time indexing"
        },
        ai: {
          title: "AI-Powered",
          description: "Advanced ML models understand context and intent"
        },
        multilingual: {
          title: "Multilingual",
          description: "Native support for Arabic, English, and 50+ languages"
        }
      },
      cta: "Experience SpicyLens"
    },
    about: {
      title: "About SpicyDonut",
      subtitle: "Pioneering AI Excellence",
      description: "Founded in Saudi Arabia, SpicyDonut is at the forefront of artificial intelligence innovation, developing cutting-edge solutions that transform businesses and empower communities.",
      mission: "Our Mission",
      missionText: "To democratize AI technology and make intelligent solutions accessible to everyone in the Middle East and beyond.",
      vision: "Our Vision",
      visionText: "To be the leading AI company in the region, driving digital transformation and contributing to Saudi Arabia's Vision 2030.",
      values: {
        innovation: {
          title: "Innovation",
          description: "We push boundaries and challenge the status quo"
        },
        excellence: {
          title: "Excellence",
          description: "We strive for the highest quality in everything we do"
        },
        impact: {
          title: "Impact",
          description: "We create meaningful change for our clients and communities"
        },
        integrity: {
          title: "Integrity",
          description: "We operate with transparency and ethical principles"
        }
      }
    },
    vision2030: {
      title: "Supporting Saudi Vision 2030",
      subtitle: "Digital Transformation Goals",
      description: "SpicyDonut is proud to contribute to Saudi Arabia's Vision 2030 by advancing AI technology and digital innovation across the Kingdom.",
      stats: {
        digitalTransformation: "Digital Transformation Progress",
        aiAdoption: "AI Adoption Rate",
        techStartups: "Tech Startups Supported",
        digitalEconomy: "Digital Economy Contribution",
        jobsCreated: "Tech Jobs Created",
        saudiTalent: "Local Talent Development"
      },
      goals: {
        title: "Our Contribution to Vision 2030",
        items: [
          "Advancing AI research and development",
          "Training local talent in emerging technologies",
          "Supporting digital transformation initiatives",
          "Creating innovative tech solutions",
          "Fostering entrepreneurship ecosystem",
          "Promoting knowledge-based economy"
        ]
      }
    },
    products: {
      title: "Our AI Solutions",
      subtitle: "Innovative Products",
      description: "Discover our suite of AI-powered products designed to solve real-world challenges and drive digital transformation.",
      spicylens: {
        title: "SpicyLens",
        description: "Intelligent search platform with advanced AI capabilities",
        features: ["Natural Language Processing", "Real-time Indexing", "Multi-language Support"]
      },
      spicyanalytics: {
        title: "SpicyAnalytics",
        description: "AI-driven analytics platform for business intelligence",
        features: ["Predictive Analytics", "Data Visualization", "Custom Dashboards"]
      },
      spicyassist: {
        title: "SpicyAssist",
        description: "AI-powered virtual assistant for business automation",
        features: ["Natural Language Understanding", "Task Automation", "24/7 Support"]
      }
    },
    footer: {
      description: "Leading AI innovation in Saudi Arabia, empowering businesses with intelligent technology solutions.",
      sections: {
        company: "Company",
        products: "Products",
        resources: "Resources",
        contact: "Contact"
      },
      links: {
        about: "About Us",
        careers: "Careers",
        blog: "Blog",
        documentation: "Documentation",
        support: "Support",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      },
      contact: {
        email: "Email",
        phone: "Phone",
        address: "Address"
      },
      copyright: "© 2024 SpicyDonut. All rights reserved.",
      madeIn: "Made with ❤️ in Saudi Arabia"
    }
  },
  ar: {
    navigation: {
      home: "الرئيسية",
      spicylens: "سبايسي لينس",
      about: "من نحن",
      products: "منتجاتنا", 
      contact: "تواصل معنا",
      language: "اللغة",
      getStarted: "ابدأ الآن"
    },
    hero: {
      title: "رواد الابتكار في الذكاء الاصطناعي",
      subtitle: "في المملكة العربية السعودية",
      description: "سبايسي دونات تقود ثورة رقمية حقيقية بحلول الذكاء الاصطناعي المتطورة، نمكن الشركات والأفراد بتقنيات ذكية مبتكرة.",
      cta: "اكتشف حلولنا الذكية",
      stats: {
        clients: "عميل تم خدمته",
        projects: "مشروع منجز",
        countries: "دولة نخدمها",
        accuracy: "دقة الذكاء الاصطناعي"
      }
    },
    spicylens: {
      title: "تعرف على سبايسي لينس",
      description: "رفيقك المدعوم بالذكاء الاصطناعي للبحث الذي يفهم السياق ويتعلم من التفاعلات ويقدم رؤى مهمة",
      searchPlaceholder: "ابحث عن المنتجات...",
      results: "نتائج",
      result: "نتيجة", 
      resultsIn: "نتائج في",
      currency: "ريال سعودي",
      massiveDataset: "قاعدة بيانات ضخمة مع استجابة فورية",
      features: {
        fast: {
          title: "سريع كالبرق",
          description: "أوقات استجابة أقل من ثانية مع فهرسة فورية"
        },
        ai: {
          title: "مدعوم بالذكاء الاصطناعي",
          description: "نماذج تعلم آلة متقدمة تفهم السياق والقصد"
        },
        multilingual: {
          title: "متعدد اللغات",
          description: "دعم أصلي للعربية والإنجليزية وأكثر من 50 لغة"
        }
      },
      cta: "جرب سبايسي لينس"
    },
    about: {
      title: "عن سبايسي دونات",
      subtitle: "رواد التميز في الذكاء الاصطناعي",
      description: "تأسست في المملكة العربية السعودية، سبايسي دونات في المقدمة لابتكار الذكاء الاصطناعي، نطور حلولاً متطورة تحول الشركات وتمكن المجتمعات.",
      mission: "رسالتنا",
      missionText: "إضفاء الطابع الديمقراطي على تقنية الذكاء الاصطناعي وجعل الحلول الذكية متاحة للجميع في الشرق الأوسط وما وراءه.",
      vision: "رؤيتنا",
      visionText: "أن نكون الشركة الرائدة في مجال الذكاء الاصطناعي في المنطقة، ندفع التحول الرقمي ونساهم في رؤية السعودية 2030.",
      values: {
        innovation: {
          title: "الابتكار",
          description: "نتجاوز الحدود ونتحدى الوضع الراهن"
        },
        excellence: {
          title: "التميز",
          description: "نسعى لأعلى مستويات الجودة في كل ما نقوم به"
        },
        impact: {
          title: "التأثير",
          description: "نخلق تغييراً ذا معنى لعملائنا ومجتمعاتنا"
        },
        integrity: {
          title: "النزاهة",
          description: "نعمل بشفافية ومبادئ أخلاقية"
        }
      }
    },
    vision2030: {
      title: "دعم رؤية السعودية 2030",
      subtitle: "أهداف التحول الرقمي",
      description: "سبايسي دونات فخورة بالمساهمة في رؤية السعودية 2030 من خلال تطوير تقنيات الذكاء الاصطناعي والابتكار الرقمي في جميع أنحاء المملكة.",
      stats: {
        digitalTransformation: "تقدم التحول الرقمي",
        aiAdoption: "معدل اعتماد الذكاء الاصطناعي",
        techStartups: "الشركات التقنية الناشئة المدعومة",
        digitalEconomy: "مساهمة الاقتصاد الرقمي",
        jobsCreated: "الوظائف التقنية المستحدثة",
        saudiTalent: "تطوير المواهب المحلية"
      },
      goals: {
        title: "مساهمتنا في رؤية 2030",
        items: [
          "تطوير البحث والتطوير في الذكاء الاصطناعي",
          "تدريب المواهب المحلية في التقنيات الناشئة",
          "دعم مبادرات التحول الرقمي",
          "إنشاء حلول تقنية مبتكرة",
          "تعزيز النظام البيئي لريادة الأعمال",
          "الترويج لاقتصاد المعرفة"
        ]
      }
    },
    products: {
      title: "حلولنا الذكية",
      subtitle: "منتجات مبتكرة",
      description: "اكتشف مجموعة منتجاتنا المدعومة بالذكاء الاصطناعي المصممة لحل التحديات الحقيقية ودفع التحول الرقمي.",
      spicylens: {
        title: "سبايسي لينس",
        description: "منصة بحث ذكية مع قدرات متقدمة للذكاء الاصطناعي",
        features: ["معالجة اللغة الطبيعية", "الفهرسة الفورية", "دعم متعدد اللغات"]
      },
      spicyanalytics: {
        title: "سبايسي أناليتكس",
        description: "منصة تحليلات مدعومة بالذكاء الاصطناعي لذكاء الأعمال",
        features: ["التحليلات التنبؤية", "تصور البيانات", "لوحات تحكم مخصصة"]
      },
      spicyassist: {
        title: "سبايسي أسيست",
        description: "مساعد افتراضي مدعوم بالذكاء الاصطناعي لأتمتة الأعمال",
        features: ["فهم اللغة الطبيعية", "أتمتة المهام", "دعم على مدار الساعة"]
      }
    },
    footer: {
      description: "رواد الابتكار في الذكاء الاصطناعي في السعودية، نمكن الشركات بحلول تقنية ذكية.",
      sections: {
        company: "الشركة",
        products: "المنتجات",
        resources: "الموارد",
        contact: "تواصل معنا"
      },
      links: {
        about: "من نحن",
        careers: "الوظائف",
        blog: "المدونة",
        documentation: "التوثيق",
        support: "الدعم",
        privacy: "سياسة الخصوصية",
        terms: "شروط الخدمة"
      },
      contact: {
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        address: "العنوان"
      },
      copyright: "© 2024 سبايسي دونات. جميع الحقوق محفوظة.",
      madeIn: "صنع بـ ❤️ في السعودية"
    }
  }
};

const I18nContext = createContext();

export const useTranslation = (namespace = 'common') => {
  const context = useContext(I18nContext);
  if (!context) {
    // Fallback when no context provider
    return {
      t: (key) => {
        const keys = key.split('.');
        let value = fallbackTranslations.en;
        for (const k of keys) {
          value = value?.[k];
        }
        return value || key;
      }
    };
  }
  return context;
};

export const I18nProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    // Get locale from localStorage or browser only on client side
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale') || 'en';
      setLocale(savedLocale);
    }
  }, []);

  const switchLanguage = (newLocale) => {
    setLocale(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = fallbackTranslations[locale] || fallbackTranslations.en;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const contextValue = {
    t,
    locale,
    switchLanguage
  };

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
};

export default I18nProvider; 