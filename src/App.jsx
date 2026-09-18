import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CartDrawer from './components/CartDrawer/CartDrawer.jsx';
import CheckoutModal from './components/CheckoutModal/CheckoutModal.jsx';
import Collection from './components/Collection/Collection.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Toast from './components/Toast/Toast.jsx';
import { PRODUCTS } from './data/products.js';

const STRIPE_PAYMENT_LINK = '';

function App() {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || 'en';
  const [theme, setTheme] = useState(() => localStorage.getItem('spira-theme') || 'light');
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('spira-cart') || '{}'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', address: '', note: '' });
  const [checkoutNotice, setCheckoutNotice] = useState('');
  const [toast, setToast] = useState('');
  const text = {
    collection: t('collection'), cart: t('cart'), browse: t('browse'), hero: t('hero'), catalogue: t('catalogue'),
    intro: t('intro'), footer: t('footer'), cartTitle: t('cartTitle'), subtotal: t('subtotal'), checkout: t('checkout'),
    empty: t('empty'), add: t('add'), added: t('added'), form: t('form'), each: t('each'), remove: t('remove'),
    name: t('name'), email: t('email'), address: t('address'), note: t('note'), send: t('send'),
    paymentNote: t('paymentNote'), missingLink: t('missingLink'), flagship: t('flagship')
  };
  const lines = useMemo(() => Object.entries(cart).map(([id, qty]) => ({ ...PRODUCTS.find((product) => product.id === id), qty })).filter((line) => line.id), [cart]);
  const count = lines.reduce((sum, line) => sum + line.qty, 0);
  const subtotal = lines.reduce((sum, line) => sum + line.price * line.qty, 0);

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('spira-theme', theme); }, [theme]);
  useEffect(() => { localStorage.setItem('spira-cart', JSON.stringify(cart)); }, [cart]);
  useEffect(() => {
    if (!toast) return undefined;
    const timeout = window.setTimeout(() => setToast(''), 2600);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const addToCart = (id, productName) => {
    setCart((current) => ({ ...current, [id]: (current[id] || 0) + 1 }));
    setToast(t('addedToCart', { product: productName }));
  };
  const changeQty = (id, delta) => setCart((current) => { const next = { ...current, [id]: (current[id] || 0) + delta }; if (next[id] <= 0) delete next[id]; return next; });
  const submitOrder = (event) => { event.preventDefault(); if (!form.name || !form.email || !form.address) return; if (!STRIPE_PAYMENT_LINK) { setCheckoutNotice(text.missingLink); return; } window.location.href = STRIPE_PAYMENT_LINK; };

    return <>
      <Header text={text} language={lang} i18n={i18n} count={count} theme={theme} onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} onOpenCart={() => setDrawerOpen(true)} />
      <Hero text={text} />
      <Collection products={PRODUCTS} text={text} language={lang} t={t} onAdd={addToCart} />
      <Footer text={text} />
      {drawerOpen && <CartDrawer text={text} lines={lines} language={lang} t={t} subtotal={subtotal} onChangeQty={changeQty} onClose={() => setDrawerOpen(false)} onCheckout={() => { setDrawerOpen(false); setCheckoutOpen(true); }} />}
      {checkoutOpen && <CheckoutModal text={text} language={lang} subtotal={subtotal} form={form} notice={checkoutNotice} onChange={(field, value) => setForm({ ...form, [field]: value })} onSubmit={submitOrder} onClose={() => setCheckoutOpen(false)} />}
      <Toast message={toast} />
    </>;
}

export default App;
