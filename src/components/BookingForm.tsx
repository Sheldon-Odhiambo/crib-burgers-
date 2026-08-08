import { useState } from 'react';
import { X, Calendar, Clock, Users, BookOpen, DollarSign, MessageCircle, Mail } from 'lucide-react';
import { WHATSAPP_NUMBER, EMAIL_ADDRESS } from '../data';
import { WhatsAppIcon } from './WhatsAppIcon';

export const BookingForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    menu: '',
    offer: ''
  });

  const message = `*Booking Request - Crib Chef at Home*\n\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\nMenu Ideas: ${formData.menu}\nMy Offer: KSh ${formData.offer}`;

  const sendWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`);
  };

  const sendEmail = () => {
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=Booking Request - Crib Chef at Home&body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-stone-100 rounded-full">
          <X className="w-6 h-6 text-stone-500" />
        </button>
        <h2 className="text-2xl font-heading text-stone-900 mb-6 uppercase">Book Crib Chef</h2>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="date" className="w-full p-3 rounded-xl border border-stone-200 text-stone-900 bg-stone-50" onChange={(e) => setFormData({...formData, date: e.target.value})} placeholder="Date" />
            <input type="time" className="w-full p-3 rounded-xl border border-stone-200 text-stone-900 bg-stone-50" onChange={(e) => setFormData({...formData, time: e.target.value})} placeholder="Time" />
          </div>
          <input type="number" className="w-full p-3 rounded-xl border border-stone-200 text-stone-900 bg-stone-50" onChange={(e) => setFormData({...formData, guests: e.target.value})} placeholder="Number of People" />
          <textarea className="w-full p-3 rounded-xl border border-stone-200 text-stone-900 bg-stone-50" onChange={(e) => setFormData({...formData, menu: e.target.value})} placeholder="Menu Ideas" rows={3} />
          <input type="number" className="w-full p-3 rounded-xl border border-stone-200 text-stone-900 bg-stone-50" onChange={(e) => setFormData({...formData, offer: e.target.value})} placeholder="Your Offer (KSh)" />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <button onClick={sendWhatsApp} className="flex items-center justify-center gap-2 bg-green-600 text-white p-4 rounded-xl font-bold hover:bg-green-700">
            <WhatsAppIcon className="w-5 h-5" /> WhatsApp
          </button>
          <button onClick={sendEmail} className="flex items-center justify-center gap-2 bg-orange-600 text-white p-4 rounded-xl font-bold hover:bg-orange-700">
            <Mail className="w-5 h-5" /> Email
          </button>
        </div>
      </div>
    </div>
  );
};
