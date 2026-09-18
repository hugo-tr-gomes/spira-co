import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const common = {
  en: {
    translation: {
      collection: 'Collection', cart: 'Cart', browse: 'Browse the catalogue',
      hero: 'Eight sculptural lamps, each printed and hand-finished one piece at a time.',
      catalogue: 'The catalogue', intro: 'Each piece starts as one line, wrapped around a form until the light finds its own way out.',
      footer: 'One-of-a-kind lamps, made to order.', cartTitle: 'Your cart', subtotal: 'Subtotal', checkout: 'Checkout',
      empty: 'Your cart is empty.', add: 'Add to cart', added: 'Added', form: 'Form', each: 'each', remove: 'Remove',
      name: 'Name', email: 'Email', address: 'Shipping address', note: 'Note (optional)', send: 'Continue to Stripe',
      paymentNote: "Pay securely with Stripe. You'll be redirected to a secure checkout page.",
      missingLink: 'Add your live Stripe Payment Link before going live.', flagship: 'Flagship', addedToCart: '{{product}} added to cart.',
      products: {
        helix: { name: 'Helix', desc: 'A sphere built from dozens of curved ribs, wound around a single axis so the whole form reads as one continuous line.', form: 'Spiral-ribbed sphere' },
        torque: { name: 'Torque', desc: 'A waisted cylinder, twisted along its own axis — light escapes in diagonal bands that shift as you move around it.', form: 'Twisted, waisted cylinder' },
        current: { name: 'Current', desc: 'Straight ribs bent into a single running wave, wrapped evenly around a plain cylinder.', form: 'Wave-ribbed cylinder' },
        tide: { name: 'Tide', desc: 'The same running wave as Current, drawn out over a squared column instead of a circle.', form: 'Wave-ribbed square column' },
        reed: { name: 'Reed', desc: 'Dozens of hairline ribs, pulled the full length of a tapered egg from base to opening.', form: 'Fine-ribbed ellipsoid' },
        orb: { name: 'Orb', desc: 'The same hairline ribs as Reed, wrapped instead around a plain sphere, close and even.', form: 'Fine-ribbed sphere' },
        column: { name: 'Column', desc: 'Wide, flat-faced flutes running straight up a broad cylinder — the most architectural of the set.', form: 'Fluted cylinder' },
        vessel: { name: 'Vessel', desc: 'The same fluting as Column, drawn long and narrow over a rounded vase silhouette.', form: 'Fluted vase' }
      }
    }
  },
  pt: {
    translation: {
      collection: 'Coleção', cart: 'Carrinho', browse: 'Ver o catálogo',
      hero: 'Oito lâmpadas escultóricas, impressas e acabadas à mão uma peça de cada vez.',
      catalogue: 'O catálogo', intro: 'Cada peça começa com uma linha, enrolada numa forma até a luz encontrar o seu próprio caminho.',
      footer: 'Lâmpadas únicas, feitas por encomenda.', cartTitle: 'O teu carrinho', subtotal: 'Subtotal', checkout: 'Finalizar',
      empty: 'O teu carrinho está vazio.', add: 'Adicionar ao carrinho', added: 'Adicionado', form: 'Forma', each: 'cada', remove: 'Remover',
      name: 'Nome', email: 'Email', address: 'Morada de entrega', note: 'Observações (opcional)', send: 'Continuar para o Stripe',
      paymentNote: 'Paga com segurança via Stripe. Serás redirecionado para um checkout seguro.',
      missingLink: 'Adiciona o teu Stripe Payment Link antes de publicar.', flagship: 'Marca', addedToCart: '{{product}} adicionado ao carrinho.',
      products: {
        helix: { name: 'Helix', desc: 'Uma esfera formada por dezenas de costelas curvas, enroladas em torno de um único eixo para que toda a forma pareça uma linha contínua.', form: 'Esfera de costelas em espiral' },
        torque: { name: 'Torque', desc: 'Um cilindro afilado, torcido ao longo do seu eixo — a luz escapa em faixas diagonais que mudam conforme te moves à sua volta.', form: 'Cilindro torcido e afunilado' },
        current: { name: 'Current', desc: 'Costelas rectas curvadas numa única onda contínua, envolvidas de forma uniforme em torno de um cilindro simples.', form: 'Cilindro com nervuras onduladas' },
        tide: { name: 'Tide', desc: 'A mesma onda contínua de Current, estendida por uma coluna quadrada em vez de um círculo.', form: 'Coluna quadrada com nervuras onduladas' },
        reed: { name: 'Reed', desc: 'Dezenas de nervuras finas, estendidas ao longo de um ovo afunilado desde a base até à abertura.', form: 'Elipsoide de nervuras finas' },
        orb: { name: 'Orb', desc: 'As mesmas nervuras finas de Reed, mas envolvidas em torno de uma esfera lisa, próximas e uniformes.', form: 'Esfera de nervuras finas' },
        column: { name: 'Column', desc: 'Canaletas largas e planas a correr em linha recta por um cilindro largo — o mais arquitectónico do conjunto.', form: 'Cilindro com ranhuras' },
        vessel: { name: 'Vessel', desc: 'As mesmas ranhuras de Column, alongadas e estreitas sobre uma silhueta de vaso arredondado.', form: 'Vaso com ranhuras' }
      }
    }
  },
  fr: {
    translation: {
      collection: 'Collection', cart: 'Panier', browse: 'Parcourir le catalogue',
      hero: 'Huit lampes sculpturales, imprimées et finies à la main une pièce à la fois.',
      catalogue: 'Le catalogue', intro: 'Chaque pièce commence par une ligne, enroulée autour d’une forme jusqu’à ce que la lumière trouve son propre chemin.',
      footer: 'Lampes uniques, faites sur mesure.', cartTitle: 'Votre panier', subtotal: 'Sous-total', checkout: 'Commander',
      empty: 'Votre panier est vide.', add: 'Ajouter au panier', added: 'Ajouté', form: 'Forme', each: 'chacune', remove: 'Retirer',
      name: 'Nom', email: 'Email', address: 'Adresse de livraison', note: 'Note (facultatif)', send: 'Continuer vers Stripe',
      paymentNote: 'Payez en toute sécurité via Stripe.', missingLink: 'Ajoutez votre Stripe Payment Link avant la mise en ligne.', flagship: 'Vedette', addedToCart: '{{product}} ajouté au panier.',
      products: {
        helix: { name: 'Helix', desc: 'Une sphère composée de dizaines de nervures courbes, enroulées autour d’un seul axe pour que toute la forme soit lue comme une seule ligne continue.', form: 'Sphère à nervures spirales' },
        torque: { name: 'Torque', desc: 'Un cylindre cintré, torsadé sur son propre axe — la lumière s’échappe en bandes diagonales qui changent quand on se déplace autour.', form: 'Cylindre torsadé et évasé' },
        current: { name: 'Current', desc: 'Des nervures droites pliées en une seule vague continue, enroulées uniformément autour d’un cylindre simple.', form: 'Cylindre à nervures ondulées' },
        tide: { name: 'Tide', desc: 'La même vague que Current, mais prolongée sur une colonne carrée au lieu d’un cercle.', form: 'Colonne carrée à nervures ondulées' },
        reed: { name: 'Reed', desc: 'Des dizaines de nervures très fines, tirées sur toute la longueur d’un œuf effilé, de la base à l’ouverture.', form: 'Ellipsoïde à nervures fines' },
        orb: { name: 'Orb', desc: 'Les mêmes nervures fines que Reed, mais cette fois autour d’une sphère simple, serrées et régulières.', form: 'Sphère à nervures fines' },
        column: { name: 'Column', desc: 'De larges cannelures plates qui montent droit le long d’un cylindre large — le plus architectural de la série.', form: 'Cylindre cannelé' },
        vessel: { name: 'Vessel', desc: 'Les mêmes cannelures que Column, allongées et étroites sur une silhouette de vase arrondie.', form: 'Vase cannelé' }
      }
    }
  },
  de: {
    translation: {
      collection: 'Kollektion', cart: 'Warenkorb', browse: 'Katalog durchsuchen',
      hero: 'Acht skulpturale Lampen, jede einzeln gedruckt und handveredelt.',
      catalogue: 'Der Katalog', intro: 'Jedes Stück beginnt mit einer Linie, die um eine Form gewickelt wird, bis das Licht seinen eigenen Weg findet.',
      footer: 'Einzigartige Lampen, auf Bestellung gefertigt.', cartTitle: 'Ihr Warenkorb', subtotal: 'Zwischensumme', checkout: 'Zur Kasse',
      empty: 'Ihr Warenkorb ist leer.', add: 'In den Warenkorb', added: 'Hinzugefügt', form: 'Form', each: 'jeweils', remove: 'Entfernen',
      name: 'Name', email: 'E-Mail', address: 'Lieferadresse', note: 'Hinweis (optional)', send: 'Weiter zu Stripe',
      paymentNote: 'Zahlen Sie sicher mit Stripe.', missingLink: 'Fügen Sie vor dem Start Ihren Stripe Payment Link hinzu.', flagship: 'Highlight', addedToCart: '{{product}} wurde zum Warenkorb hinzugefügt.',
      products: {
        helix: { name: 'Helix', desc: 'Eine Kugel aus Dutzenden gebogener Rippen, die um eine einzelne Achse gewickelt sind, sodass die gesamte Form wie eine durchgehende Linie wirkt.', form: 'Spiralgerippte Kugel' },
        torque: { name: 'Torque', desc: 'Ein taillierter Zylinder, der entlang seiner eigenen Achse verdreht ist — Licht entweicht in diagonalen Bändern, die sich ändern, wenn man sich darum bewegt.', form: 'Gedrehter, taillierter Zylinder' },
        current: { name: 'Current', desc: 'Gerade Rippen, die zu einer einzigen laufenden Welle gebogen sind und gleichmäßig um einen einfachen Zylinder gewickelt sind.', form: 'Wellenförmiger Rippenzylinder' },
        tide: { name: 'Tide', desc: 'Dieselbe laufende Welle wie bei Current, aber auf eine quadratische Säule statt auf einen Kreis gezogen.', form: 'Quadratische Säule mit Wellenrippen' },
        reed: { name: 'Reed', desc: 'Dutzende feiner Rippen, die über die gesamte Länge eines verjüngten Eies von der Basis bis zur Öffnung reichen.', form: 'Fein gerippter Ellipsoid' },
        orb: { name: 'Orb', desc: 'Dieselben feinen Rippen wie bei Reed, diesmal jedoch um eine glatte Kugel gelegt, dicht und gleichmäßig.', form: 'Fein gerippte Kugel' },
        column: { name: 'Column', desc: 'Breite, flache Rillen, die gerade an einem großen Zylinder hochlaufen — das architektonischste Stück der Serie.', form: 'Gerillter Zylinder' },
        vessel: { name: 'Vessel', desc: 'Die gleichen Rillen wie bei Column, lang und schmal über eine abgerundete Vasenform gezogen.', form: 'Gerillte Vase' }
      }
    }
  }
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: common,
  fallbackLng: 'en',
  supportedLngs: ['en', 'pt', 'fr', 'de'],
  interpolation: { escapeValue: false },
  detection: { order: ['localStorage', 'navigator'], caches: ['localStorage'], lookupLocalStorage: 'spira-lang' }
});

export default i18n;
