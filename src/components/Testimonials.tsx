import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Quote className="w-6 h-6 text-orange-600" />
              <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm">Testimonials</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-heading text-stone-900 uppercase">
              What Our <span className="text-stone-400">Customers Say</span>
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 relative">
              <div className="flex text-orange-400 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-stone-600 text-lg italic leading-relaxed mb-8 font-serif">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4 border-t border-stone-100 pt-6">
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center font-bold text-stone-400">
                  {item.name[0]}
                </div>
                <div>
                  <p className="font-bold text-stone-900">{item.name}</p>
                  <p className="text-xs text-stone-400 font-bold uppercase tracking-widest">{item.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
