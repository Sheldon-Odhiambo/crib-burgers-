import { ShoppingBag, Phone, Menu, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data';

export const MobileBottomNav = ({ onOpenCart }: { onOpenCart: () => void }) => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-stone-200 md:hidden flex justify-around p-3 z-40">
      <button onClick={scrollToMenu} className="flex flex-col items-center text-stone-600">
        <Menu className="w-6 h-6" />
        <span className="text-xs">Menu</span>
      </button>
      <button onClick={onOpenCart} className="flex flex-col items-center text-stone-600">
        <ShoppingBag className="w-6 h-6" />
        <span className="text-xs">Cart</span>
      </button>
      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-stone-600">
        <MessageCircle className="w-6 h-6" />
        <span className="text-xs">Contact</span>
      </a>
    </div>
  );
};
