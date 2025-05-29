import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap, Globe, Building, Cpu } from 'lucide-react';
import { useTranslation } from './I18nProvider';
import { siteData } from '../config/data';
import ScrollSection from './ScrollSection';
import MagneticButton from './MagneticButton';

const Vision2030Section = () => {
  const { t, locale } = useTranslation();
  const isRTL = locale === 'ar';

  const stats = [
    {
      icon: TrendingUp,
      value: siteData.vision2030.digitalTransformation,
      label: t('vision2030.stats.digitalTransformation'),
      color: '#10B981'
    },
    {
      icon: Cpu,
      value: siteData.vision2030.aiAdoption,
      label: t('vision2030.stats.aiAdoption'),
      color: '#F59E0B'
    },
    {
      icon: Building,
      value: siteData.vision2030.techStartups,
      label: t('vision2030.stats.techStartups'),
      color: '#7F3FFF'
    },
    {
      icon: Globe,
      value: siteData.vision2030.digitalEconomy,
      label: t('vision2030.stats.digitalEconomy'),
      color: '#EF4444'
    },
    {
      icon: Users,
      value: siteData.vision2030.jobsCreated,
      label: t('vision2030.stats.jobsCreated'),
      color: '#3B82F6'
    },
    {
      icon: Zap,
      value: siteData.vision2030.saudiTalent,
      label: t('vision2030.stats.saudiTalent'),
      color: '#8B5CF6'
    }
  ];

  // Get goals with fallback
  const goalsFromTranslation = t('vision2030.goals.items');
  const fallbackGoals = locale === 'ar' ? [
    'تطوير البحث والتطوير في الذكاء الاصطناعي',
    'تدريب المواهب المحلية في التقنيات الناشئة',
    'دعم مبادرات التحول الرقمي',
    'إنشاء حلول تقنية مبتكرة',
    'تعزيز النظام البيئي لريادة الأعمال',
    'الترويج لاقتصاد المعرفة'
  ] : [
    'Advancing AI research and development',
    'Training local talent in emerging technologies',
    'Supporting digital transformation initiatives',
    'Creating innovative tech solutions',
    'Fostering entrepreneurship ecosystem',
    'Promoting knowledge-based economy'
  ];

  // Ensure goals is always an array
  const goals = Array.isArray(goalsFromTranslation) ? goalsFromTranslation : fallbackGoals;

  return (
    <section id="vision2030" className="py-32 relative overflow-hidden">
      {/* Vision 2030 Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${siteData.images.vision2030Background})`,
          filter: 'brightness(0.3) contrast(1.2)',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blackened-kaaba/90 via-blackened-kaaba/80 to-blackened-kaaba/90" />
      
      {/* Additional themed overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-transparent to-amber-900/20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-saudi-emerald/10 border border-saudi-emerald/30 rounded-full px-6 py-2 mb-6">
              <span className="text-saudi-emerald font-medium">🇸🇦</span>
              <span className="text-saudi-emerald font-medium">رؤية 2030</span>
            </div>
            
            <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${isRTL ? 'font-arabic' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
              <span className="text-white">{t('vision2030.title').split(' ').slice(0, -2).join(' ')} </span>
              <span className="bg-gradient-to-r from-emerald-400 via-amber-400 to-violet-400 bg-clip-text text-transparent">
                {t('vision2030.title').split(' ').slice(-2).join(' ')}
              </span>
            </h2>
            
            <p className={`text-xl text-gray-300 max-w-4xl mx-auto mb-8 ${isRTL ? 'font-arabic' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
              {t('vision2030.description')}
            </p>
            
            <div className="inline-block bg-gradient-to-r from-emerald-500/20 via-amber-500/20 to-violet-500/20 rounded-2xl p-1 backdrop-blur-lg border border-saudi-emerald/30">
              <h3 className={`text-2xl font-bold text-white px-6 py-3 ${isRTL ? 'font-arabic' : ''}`}>
                {t('vision2030.subtitle')}
              </h3>
            </div>
          </motion.div>
        </ScrollSection>

        {/* Statistics Grid */}
        <ScrollSection className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-black/40 backdrop-blur-xl border border-gray-600/30 rounded-2xl p-8 hover:border-saudi-emerald/40 transition-all duration-500"
                style={{
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${stat.color}, ${stat.color}CC)`,
                      boxShadow: `0 0 20px ${stat.color}40`,
                    }}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div 
                      className="text-3xl font-bold mb-1"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    <p className={`text-gray-300 text-sm ${isRTL ? 'font-arabic text-right' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollSection>

        {/* Goals Section */}
        <ScrollSection className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Goals Content */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={isRTL ? 'lg:order-2' : ''}
            >
              <h3 className={`text-4xl font-bold text-white mb-8 ${isRTL ? 'font-arabic text-right' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
                {t('vision2030.goals.title')}
              </h3>
              
              <div className="space-y-4">
                {goals.map((goal, index) => (
                  <motion.div
                    key={`goal-${index}`}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}
                  >
                    <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full" />
                    <p className={`text-gray-300 ${isRTL ? 'font-arabic text-right' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
                      {goal}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`relative ${isRTL ? 'lg:order-1' : ''}`}
            >
              <div className="bg-gradient-to-br from-saudi-emerald/20 to-amber-500/20 rounded-3xl p-8 backdrop-blur-xl border border-saudi-emerald/30">
                {/* Saudi Arabia Outline or Vision 2030 Logo would go here */}
                <div className="text-center">
                  <div className="text-8xl mb-6">🇸🇦</div>
                  <div className="text-6xl font-bold bg-gradient-to-r from-emerald-400 via-amber-400 to-violet-400 bg-clip-text text-transparent mb-4">
                    2030
                  </div>
                  <p className={`text-gray-300 text-lg ${isRTL ? 'font-arabic' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
                    {locale === 'ar' 
                      ? 'نحو مستقبل رقمي مزدهر'
                      : 'Towards a Thriving Digital Future'
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollSection>

        {/* CTA Section */}
        <ScrollSection className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-black/40 backdrop-blur-xl border border-saudi-emerald/30 rounded-3xl p-12"
          >
            <h3 className={`text-3xl font-bold text-white mb-6 ${isRTL ? 'font-arabic' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
              {locale === 'ar' 
                ? 'انضم إلى رحلة التحول الرقمي'
                : 'Join the Digital Transformation Journey'
              }
            </h3>
            
            <p className={`text-gray-300 max-w-2xl mx-auto mb-8 ${isRTL ? 'font-arabic' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
              {locale === 'ar' 
                ? 'كن جزءاً من مستقبل الذكاء الاصطناعي في المملكة العربية السعودية'
                : 'Be part of the AI-powered future in Saudi Arabia'
              }
            </p>
            
            <MagneticButton 
              variant="primary" 
              className="bg-gradient-to-r from-emerald-500 via-amber-500 to-violet-500 hover:from-emerald-400 hover:via-amber-400 hover:to-violet-400"
              style={{ boxShadow: '0 0 40px rgba(16, 185, 129, 0.5)' }}
            >
              <span className={`${isRTL ? 'font-arabic' : ''}`}>
                {locale === 'ar' ? 'ابدأ معنا الآن' : 'Start With Us Today'}
              </span>
            </MagneticButton>
          </motion.div>
        </ScrollSection>
      </div>
    </section>
  );
};

export default Vision2030Section; 