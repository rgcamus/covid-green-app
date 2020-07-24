import en from '../../assets/lang/en.json';
import es from '../../assets/lang/es.json';
import ga from '../../assets/lang/ga.json';

export const fallback = 'en';
export const defaultNamespace = 'common';
export const namespaces = ['common'];

export const supportedLocales = {
  en: {
    name: 'English',
    ...en
  },
  es:{
    name: 'Spanish',
    ...es
  },
  ga: {
    name: 'Irish',
    ...ga
  }
};
