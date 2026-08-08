import { Phone, Instagram, MapPin, Clock } from 'lucide-react';
import { WHATSAPP_NUMBER, PHONE_NUMBER } from '../data';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
                <div className="p-1"> 
                  <img 
                    src="/images/crib-logo.png"
                    alt="Crib Burgers Logo" 
                    className="h-20 w-20 object-contain"
                  />
                </div>
              <div>
                <h1 className="text-2xl font-heading text-white tracking-wider uppercase">Crib Burgers</h1>
                <p className="text-[10px] text-orange-500 font-bold tracking-[0.2em] uppercase -mt-1">The Crib Kitchen</p>
              </div>
            </div>
            <p className="text-stone-500 leading-relaxed mb-8 max-w-sm">
              We started small, but our taste is huge. Join the family and experience what real burgers taste like.
            </p>
            <div className="flex items-center gap-4">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all">
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a href={`tel:${PHONE_NUMBER}`} className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all">
                <Phone className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#menu" className="hover:text-orange-500 transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition-colors">Our Story</a></li>
              <li><a href="#testimonials" className="hover:text-orange-500 transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div id="contact">
            <h4 className="text-white font-bold mb-6">Store Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-600 shrink-0" />
                <span>New Malborough, Harare</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-600 shrink-0" />
                <span>{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-orange-600 shrink-0" />
                <span>Open: 10:00 AM - 7:00 PM Mon-Sat</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-center">
          <p>© 2026 Crib Burgers. All rights reserved.</p>
          <p>Designed with ❤️ with Amazing.</p>
        </div>
      </div>
    </footer>
  );
};
