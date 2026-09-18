const LOCALES = { en: 'en-IE', pt: 'pt-PT', fr: 'fr-FR', de: 'de-DE' };

export function formatPrice(value, language) {
  return new Intl.NumberFormat(LOCALES[language] || LOCALES.en, {
    style: 'currency',
    currency: 'EUR'
  }).format(value);
}
