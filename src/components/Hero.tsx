import { Star, Phone } from 'lucide-react';
import { WHATSAPP_NUMBER, PHONE_NUMBER } from '../data';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-stone-900 pt-16 pb-32 lg:pt-32 lg:pb-48">
      <div className="absolute inset-0 z-0">
        <img 
          src="./images/hero.jpg" 
          alt="Hero Burger" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1920';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-600 text-white text-xs font-bold uppercase tracking-widest mb-6">
            Now Serving the Best in New Malborough, Harare
          </span>
          <h1 className="text-5xl md:text-7xl font-heading text-white mb-6 leading-tight drop-shadow-2xl">
            THE BURGER <br />
            <span className="text-orange-500">YOUR SOUL</span> <br />
            CRAVES.
          </h1>
          <p className="text-xl text-stone-300 mb-10 max-w-xl leading-relaxed">
            Fresh ingredients, seasoned to perfection, and stacked high. At Crib Burgers, we don't just cook—we craft legends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#menu" 
              className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-500 transition-all shadow-xl shadow-orange-900/20 hover:-translate-y-1 active:translate-y-0"
            >
              Explore Our Menu
            </a>
            <button 
              onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'd like to see your menu and order some burgers.`)}
              className="bg-white text-stone-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-stone-100 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5 text-green-600" />
              Chat on WhatsApp
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-white/10 pt-12">
            <div>
              <p className="text-white text-3xl font-bold">$ 1</p>
              <p className="text-stone-400 text-xs font-bold uppercase">Starting From</p>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <div className="flex text-orange-400 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <p className="text-stone-400 text-xs font-bold uppercase tracking-wider">Fastest Growing Brand</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
