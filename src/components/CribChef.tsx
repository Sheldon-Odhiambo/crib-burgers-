import { useState } from 'react';
import { ChefHat, Clock, Zap, CreditCard } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BookingForm } from './BookingForm';
import { PAYMENT_METHODS } from '../data';

export const CribChef = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section id="chef-at-home" className="py-24 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ChefHat className="w-16 h-16 text-orange-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-heading text-white mb-4 uppercase">Crib Chef At Home</h2>
          <p className="text-xl text-stone-400 font-serif italic">Bringing the Crib to your kitchen</p>
        </div>

        {/* Concept */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-stone-800 rounded-3xl p-8 md:p-12 border border-stone-700">
            <h3 className="text-2xl font-heading text-orange-500 mb-6 uppercase">The Concept</h3>
            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              Life is busy. But good food is non-negotiable. Crib Chef At Home brings a professional Crib Chef to your house to cook the meals you love, your way. From traditional Zimbabwean dishes that take hours, to international cuisines, to party platters — we handle the cooking so you can enjoy the moments.
            </p>
            <p className="text-lg font-bold text-white">We’re not just a burger joint anymore. We’re now your personal kitchen team.</p>
          </div>
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-stone-700">
            <img src="./images/chef-at-home.jpg" alt="Chef at Home" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* How it Works */}
        <div className="mb-20">
          <h3 className="text-3xl font-heading text-white mb-10 text-center uppercase">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Place Your Offer", desc: "Tell us the menu, number of people, date & time. Send us what you’re willing to pay." },
              { icon: Clock, title: "We Respond", desc: "If it works, we confirm. If we need to adjust, we’ll suggest an amount." },
              { icon: ChefHat, title: "We Cook", desc: "Our chef arrives, cooks, serves, and leaves your kitchen clean." },
            ].map((step, i) => (
              <div key={i} className="bg-stone-800 p-8 rounded-3xl border border-stone-700 text-center">
                <step.icon className="w-12 h-12 text-orange-600 mx-auto mb-6" />
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-stone-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-20">
          <h3 className="text-3xl font-heading text-white mb-10 text-center uppercase">Crib Chef In Action</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-stone-800">
               <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600" alt="Cooking" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-stone-800 md:row-span-2">
               <img src="https://images.unsplash.com/photo-1577219491135-ce1dda5e1fee?auto=format&fit=crop&q=80&w=600" alt="Chef" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-stone-800 md:row-span-2">
               <img src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&fit=crop&q=80&w=600" alt="Plated Meal" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-stone-800">
               <img src="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?auto=format&fit=crop&q=80&w=600" alt="Preparation" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-stone-800 col-span-2 md:col-span-1">
               <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600" alt="Final Dish" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-stone-800">
               <img src="https://images.unsplash.com/photo-1550966871-3ed39b5ed030?auto=format&fit=crop&q=80&w=600" alt="Plating" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-stone-800">
               <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a741?auto=format&fit=crop&q=80&w=600" alt="Ingredients" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-stone-800">
               <img src="https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&q=80&w=600" alt="Happy Clients" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-20">
          <h3 className="text-3xl font-heading text-white mb-10 text-center uppercase">Payment Methods</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {PAYMENT_METHODS.map((method, i) => (
              <div key={i} className="bg-stone-800 p-6 rounded-2xl border border-stone-700 text-center">
                <CreditCard className="w-8 h-8 text-orange-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2">{method.name}</h4>
                <p className="text-stone-400 text-sm">{method.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Options & CTA */}
        <div className="bg-orange-600 rounded-3xl p-10 text-center">
          <h3 className="text-3xl font-heading text-white mb-6 uppercase">Ready to Book?</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">Click below to book your Crib Chef and get a custom quote for your event.</p>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="inline-flex items-center gap-3 bg-white text-orange-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-stone-100 transition-all shadow-xl"
          >
            <ChefHat className="w-6 h-6" />
            Book Crib Chef
          </button>
        </div>
      </div>
      
      {isBookingOpen && <BookingForm onClose={() => setIsBookingOpen(false)} />}
    </section>
  );
};
