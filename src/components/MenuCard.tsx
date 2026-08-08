import { Plus } from 'lucide-react';
import { MenuItem } from '../types';

export const MenuCard: React.FC<{ item: MenuItem; onAdd: (item: MenuItem) => void }> = ({ item, onAdd }) => {
  return (
    <div className="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all border border-stone-100 flex flex-col h-full">
      {item.image && (
        <div className="relative h-48 rounded-2xl overflow-hidden mb-4 bg-stone-200">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800';
            }}
          />
          <div className="absolute top-3 right-3">
            <span className="bg-white/90 backdrop-blur-md text-stone-900 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
              $ {item.price}
            </span>
          </div>
        </div>
      )}
      <div className="flex-1">
        {!item.image && (
           <div className="flex justify-between items-start mb-2">
             <h3 className="text-lg font-bold text-stone-900 leading-snug">{item.name}</h3>
             <span className="text-orange-600 font-bold whitespace-nowrap ml-2">$ {item.price}</span>
           </div>
        )}
        {item.image && <h3 className="text-lg font-bold text-stone-900 leading-snug mb-1">{item.name}</h3>}
        <p className="text-stone-500 text-sm mb-4 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
      </div>
      <button 
        onClick={() => onAdd(item)}
        className="w-full bg-stone-50 text-stone-900 font-bold py-3 rounded-xl hover:bg-orange-600 hover:text-white transition-all flex items-center justify-center gap-2 group-hover:bg-orange-600 group-hover:text-white"
      >
        <Plus className="w-4 h-4" />
        Add to Order
      </button>
    </div>
  );
};
