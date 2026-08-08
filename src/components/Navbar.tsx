import { ShoppingBag, Phone } from 'lucide-react';
import { PHONE_NUMBER } from '../data';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Navbar = ({ cartCount, onOpenCart }: { cartCount: number, onOpenCart: () => void }) => {
  return (
    <nav className="sticky top-0 z-40 bg-stone-900/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="p-1"> 
                  <img 
                    src="/images/crib-logo.png"
                    alt="Crib Burgers Logo" 
                    className="h-20 w-20 object-contain"
                  />
            </div> 
            <div>
              <h1 className="text-2xl font-heading text-white tracking-wider">CRIB BURGERS</h1>
              <p className="text-[10px] text-orange-600 font-bold tracking-[0.2em] uppercase -mt-1">The Crib Kitchen</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 font-semibold text-white">
            <a href="#menu" className="hover:text-orange-600 transition-colors">Menu</a>
            <a href="#about" className="hover:text-orange-600 transition-colors">About</a>
            <a href="#chef-at-home" className="hover:text-orange-600 transition-colors">Crib Chef</a>
            <a href="#testimonials" className="hover:text-orange-600 transition-colors">Reviews</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenCart}
              className="relative p-2 text-stone-600 hover:text-orange-600 transition-all active:scale-95"
            >
              <ShoppingBag className="w-6 h-6 text-white hover:text-orange-600 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="hidden sm:flex items-center gap-2 bg-white text-stone-900 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-orange-600 hover:text-white transition-colors shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
