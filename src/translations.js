import LocalizedStrings from 'react-native-localization';
export const DEFAULT_LANGUAGE = 'en';

const translations = {
  es: {
    AGAIN: 'De nuevo',
    HOW_MUCH_IS_KILO: '¿Cuánto está el kilo?',
    HOW_MUCH_WEIGH: '¿Cuánto pesa?',
    HOW_MUCH_COST: 'Sale',
    THEME: 'Tema',
    GREEN: 'Verde',
    BLUE: 'Azul',
    PINK: 'Rosa',
    ORANGE: 'Naranja',
    VIOLET: 'Violeta',
    MONEY_SIMBOL: 'Símbolo de moneda',
    SYMBOL_KILO: 'Kg',
    SYMBOL_GRAMO: 'gr',
    LANGUAGE: 'Idioma',
    APPLIED: 'aplicado',
  },
  en: {
    AGAIN: 'Again',
    HOW_MUCH_IS_KILO: 'How much is the kilo?',
    HOW_MUCH_WEIGH: 'How much does it weigh?',
    HOW_MUCH_COST: 'Cost',
    THEME: 'Theme',
    GREEN: 'Green',
    BLUE: 'Blue',
    PINK: 'Pink',
    ORANGE: 'Orange',
    VIOLET: 'Violet',
    MONEY_SIMBOL: 'Money symbol',
    SYMBOL_KILO: 'Kg',
    SYMBOL_GRAMO: 'gr',
    LANGUAGE: 'Language',
    APPLIED: 'applied',
  },
  zh: {
    AGAIN: '重新',
    HOW_MUCH_IS_KILO: '一公斤要多少钱？',
    HOW_MUCH_WEIGH: '这东西有多重？',
    HOW_MUCH_COST: '成本',
    THEME: '主题',
    GREEN: '绿色',
    BLUE: '蓝色',
    PINK: '粉紅色',
    ORANGE: '橙色',
    VIOLET: '紫',
    MONEY_SIMBOL: '金钱符号',
    SYMBOL_KILO: '公斤',
    SYMBOL_GRAMO: '斤',
    LANGUAGE: '语言',
    APPLIED: '​应​用',
  },
  hi: {
    AGAIN: 'फिर',
    HOW_MUCH_IS_KILO: 'एक किलो पर कितना खर्च होता है?',
    HOW_MUCH_WEIGH: 'इसका वजन कितना है?',
    HOW_MUCH_COST: 'लागत',
    THEME: 'थीम',
    GREEN: 'हरा',
    BLUE: 'नीला',
    PINK: 'गुलाबी रंग',
    ORANGE: 'संतरा',
    VIOLET: 'बैंगनी',
    MONEY_SIMBOL: 'धन का प्रतीक',
    SYMBOL_KILO: 'किलोग्राम',
    SYMBOL_GRAMO: 'चना',
    LANGUAGE: 'भाषा: हिन्दी',
    APPLIED: '​लगाया',
  },
  fr: {
    AGAIN: 'de nouveau',
    HOW_MUCH_IS_KILO: 'Combien coûte un kilo?',
    HOW_MUCH_WEIGH: 'combien cela pèse-t-il',
    HOW_MUCH_COST: 'Coût',
    THEME: 'thème',
    GREEN: 'vert',
    BLUE: 'bleu',
    PINK: 'rose',
    ORANGE: 'Orange',
    VIOLET: 'violette',
    MONEY_SIMBOL: 'symbole de la monnaie',
    SYMBOL_KILO: 'Kg',
    SYMBOL_GRAMO: 'gr',
    LANGUAGE: 'langage',
    APPLIED: 'appliqué',
  },
  ar: {
    AGAIN: 'مرة أخرى',
    HOW_MUCH_IS_KILO: 'كم يكلف كيلو؟',
    HOW_MUCH_WEIGH: 'كم يزن كيلو؟',
    HOW_MUCH_COST: 'كلفة',
    THEME: 'موضوع',
    GREEN: 'أخضر',
    BLUE: 'أزرق',
    PINK: 'زهري',
    ORANGE: 'البرتقالي',
    VIOLET: 'البنفسجي',
    MONEY_SIMBOL: 'رمز العملة',
    SYMBOL_KILO: 'كلغ',
    SYMBOL_GRAMO: 'جرام',
    LANGUAGE: 'لغة',
    APPLIED: 'تنفيذ',
  },
  pt: {
    AGAIN: 'De novo',
    HOW_MUCH_IS_KILO: 'Quanto custa um quilo?',
    HOW_MUCH_WEIGH: 'Quanto pesa?',
    HOW_MUCH_COST: 'Custo',
    THEME: 'Tema',
    GREEN: 'Verde',
    BLUE: 'Azul',
    PINK: 'Rosa',
    ORANGE: 'Laranja',
    VIOLET: 'Violeta',
    MONEY_SIMBOL: 'Símbolo de moeda',
    SYMBOL_KILO: 'Kg',
    SYMBOL_GRAMO: 'gr',
    LANGUAGE: 'Língua',
    APPLIED: 'aplicado',
  },
};

// LanguagesAndCodeISO_639_1
export const AvailableLanguages = [
  {language: 'Español', label: 'Español', value: 'es'},
  {language: 'Inglés', label: 'English', value: 'en'},
  {language: 'Chino', label: '普通话', value: 'zh'},
  {language: 'Hindú', label: 'हिंदू', value: 'hi'},
  {language: 'Frances', label: 'français', value: 'fr'},
  {language: 'Árabe', label: 'العرب', value: 'ar'},
  {language: 'Portugués', label: 'Portugués', value: 'pt'},
];

/**
 * Next languages:
 * Bengalí
 * Ruso
 * Indonesio
 * Urdu
 * Alemán
 * Japonés
 * Panyabí occidental
 * Javanés
 * Chino Wu
 * Telugú
 * Turco
 * Coreano
 * fuente: https://es.wikipedia.org/wiki/Anexo:Idiomas_por_el_total_de_hablantes
 * code iso: http://utils.mucattu.com/iso_639-1.html
 * traductor: https://context.reverso.net/traduccion/
 *
 */
export default new LocalizedStrings(translations);
