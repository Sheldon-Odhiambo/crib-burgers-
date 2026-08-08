import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuCard } from './components/MenuCard';
import { OrderTracker } from './components/OrderTracker';
import { CartDrawer } from './components/CartDrawer';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { CribChef } from './components/CribChef';
import { MobileBottomNav } from './components/MobileBottomNav';
import { CheckCircle2, Phone } from 'lucide-react';
import { MENU_DATA, WHATSAPP_NUMBER, PHONE_NUMBER } from './data';
import { MenuItem, CartItem } from './types';
import { WhatsAppIcon } from './components/WhatsAppIcon';
import { Loader } from './components/Loader';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [orderId, setOrderId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.id === id) {
        const newQty = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQty };
      }
      return i;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const categories = ['All', 'Signature', 'Extras'];
  
  const filteredMenu = activeCategory === 'All' 
    ? MENU_DATA 
    : MENU_DATA.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar cartCount={cart.reduce((s, i) => s + i.quantity, 0)} onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-stone-100">
                  <img 
                    src="./images/grill-action.jpg" 
                    alt="Grill Action" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-orange-600 p-8 rounded-3xl shadow-xl hidden sm:block">
                  <p className="text-white text-5xl font-bold mb-1">100%</p>
                  <p className="text-orange-100 text-xs font-bold uppercase tracking-widest leading-none">Seasoned <br />Beef & Chicken</p>
                </div>
              </div>
              <div>
                <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Our Story</h2>
                <h3 className="text-4xl md:text-5xl font-heading text-stone-900 mb-6 uppercase leading-tight">
                  Started from the Crib, <br />
                  <span className="text-stone-400">Now we're grilling.</span>
                </h3>
                <p className="text-stone-600 text-lg leading-relaxed mb-8 italic font-serif">
                  "Crib Burgers is a story of growth. We started in the kitchen with a passion for the perfect seasoning and a dream to feed our community. Every layer, every drop of cheese, and every roasted bun is a testament to how far we've come."
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0" />
                    <div>
                      <p className="font-bold text-stone-900">Fresh Daily</p>
                      <p className="text-stone-500 text-sm">Locally sourced produce</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-600 shrink-0" />
                    <div>
                      <p className="font-bold text-stone-900">Signature Sauces</p>
                      <p className="text-stone-500 text-sm">Secret Crib recipes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-heading text-stone-900 mb-4 uppercase">The Menu</h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                Discover our range of expertly crafted burgers, from our triple-layered signatures to the classic crowd favorites.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat 
                      ? 'bg-orange-600 text-white shadow-lg' 
                      : 'bg-white text-stone-600 hover:bg-stone-100 shadow-sm'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMenu.map(item => (
                <MenuCard key={item.id} item={item} onAdd={addToCart} />
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
        <CribChef />

        {/* CTA Section */}
        <section className="py-24 bg-orange-600 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-900/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-heading text-white mb-8 leading-tight uppercase">
              HUNGRY? LET'S GET IT <br />
              TO YOUR DOORSTEP.
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="bg-white text-orange-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-stone-50 transition-all flex items-center gap-3 shadow-2xl"
              >
                <Phone className="w-6 h-6" />
                {PHONE_NUMBER}
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="bg-stone-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-stone-800 transition-all flex items-center gap-3 shadow-2xl"
              >
                <WhatsAppIcon className="w-6 h-6 text-green-500" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Floating WhatsApp FAB */}
      <div className="fixed bottom-8 right-8 z-30 flex items-center">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
        
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2 group overflow-hidden"
          aria-label="Order on WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold text-sm">
            Order on WhatsApp
          </span>
        </a>
      </div>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        onUpdateQty={updateQuantity}
        onRemove={removeFromCart}
        onPlaceOrder={(id: string) => { setOrderId(id); setCart([]); setIsCartOpen(false); }}
      />
      <MobileBottomNav onOpenCart={() => setIsCartOpen(true)} />
      {orderId && <OrderTracker orderId={orderId} onClose={() => setOrderId(null)} />}
    </div>
  );
}
