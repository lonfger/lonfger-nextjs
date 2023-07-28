import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
.use(backend)
  // 检测用户当前使用的语言
  // 文档: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // 注入 react-i18next 实例
  .use(initReactI18next)
  // 初始化 i18next
  // 配置参数的文档: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          welcome: 'English welcome',
          author: `Author is: lonfger`,
          time: `time is {{time, DD/MM/YYYY}}`
        }
      },
      zh: {
        translation: {
          welcome: '欢迎来到我的网站',
          author: `作者是：龙凤珠`,
          time: `当前时间是 {{time, DD-MM-YYYY}}`
        }
      }
    }
  });

  i18n.services.formatter.add('DD/MM/YY', (value, lng, options) => {
    return dayjs(value).format('DD/MM/YY')
  });

  i18n.services.formatter.add('YYYY-MM-DD', (value, lng, options) => {
    return dayjs(value).format('YYYY-MM-DD')
  });

export default i18n;
