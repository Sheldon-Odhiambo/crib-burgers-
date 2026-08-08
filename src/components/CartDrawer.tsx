import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, X, Minus, Plus, Phone, MapPin, Smartphone, Landmark, Banknote, Globe } from 'lucide-react';
import { CartItem } from '../types';
import { WHATSAPP_NUMBER, PHONE_NUMBER, PAYMENT_METHODS } from '../data';
import { WhatsAppIcon } from './WhatsAppIcon';
import { jsPDF } from "jspdf";

const iconMap: Record<string, any> = {
  Smartphone,
  Landmark,
  Banknote,
  Globe
};

export const CartDrawer = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQty, 
  onRemove,
  onPlaceOrder
}: { 
  isOpen: boolean, 
  onClose: () => void, 
  items: CartItem[], 
  onUpdateQty: (id: string, delta: number) => void,
  onRemove: (id: string) => void,
  onPlaceOrder: (id: string) => void
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutData, setCheckoutData] = useState({
    address: '',
    location: '',
    deliveryOption: 'Standard',
    paymentMethod: PAYMENT_METHODS[0].name,
    courierTip: 0
  });

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tipAmount = subtotal * (checkoutData.courierTip / 100);
  const total = subtotal + tipAmount;
  
  const generateWhatsAppMessage = (orderId: string) => {
    let message = `*NEW ORDER - CRIB BURGERS*\n\n`;
    message += `*Order ID: ${orderId}*\n\n`;
    items.forEach(item => {
      message += `• ${item.quantity}x ${item.name} - $ ${item.price * item.quantity}\n`;
    });
    message += `\n*SUBTOTAL: $ ${subtotal}*\n`;
    message += `*COURIER TIP (${checkoutData.courierTip}%): $ ${tipAmount}*\n`;
    message += `*TOTAL: $ ${total}*\n\n`;
    message += `*Delivery Address:* ${checkoutData.address}\n`;
    message += `*Location (Map Link/Description):* ${checkoutData.location}\n`;
    message += `*Delivery Option:* ${checkoutData.deliveryOption}\n`;
    message += `*Payment Method:* ${checkoutData.paymentMethod}\n\n`;
    message += `Please confirm my order. Thanks!`;
    return encodeURIComponent(message);
  };

  const downloadReceipt = (orderId: string) => {
    const doc = new jsPDF();
    
    // Header with Logo
    doc.setFillColor(234, 88, 12); // orange-600
    doc.rect(0, 0, 210, 30, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.addImage('/images/crib-logo.png', 'PNG', 10, 5, 20, 20);
    doc.text("CRIB BURGERS", 35, 20);
    
    // Receipt Details
    doc.setTextColor(28, 25, 23); // stone-900
    doc.setFontSize(12);
    doc.text(`Order ID: ${orderId}`, 10, 40);
    doc.text(`Date: ${new Date().toLocaleString()}`, 10, 48);

    let y = 60;
    doc.setFontSize(14);
    doc.setTextColor(234, 88, 12); // orange-600
    doc.text("Items:", 10, y);
    doc.setTextColor(28, 25, 23); // stone-900
    doc.setFontSize(12);
    y += 10;
    
    items.forEach(item => {
      doc.text(`• ${item.quantity}x ${item.name} - $ ${item.price * item.quantity}`, 10, y);
      y += 8;
    });

    y += 10;
    doc.setDrawColor(234, 88, 12); // orange-600
    doc.line(10, y, 200, y);
    y += 10;
    
    doc.text(`Subtotal: $ ${subtotal.toFixed(2)}`, 10, y);
    y += 8;
    doc.text(`Tip (${checkoutData.courierTip}%): $ ${tipAmount.toFixed(2)}`, 10, y);
    y += 8;
    doc.setFontSize(14);
    doc.setTextColor(234, 88, 12); // orange-600
    doc.text(`Total: $ ${total.toFixed(2)}`, 10, y);
    doc.setTextColor(28, 25, 23); // stone-900
    
    y += 20;
    doc.setFontSize(12);
    doc.text(`Delivery Address: ${checkoutData.address}`, 10, y);
    y += 8;
    doc.text(`Location: ${checkoutData.location}`, 10, y);
    y += 8;
    doc.text(`Delivery Option: ${checkoutData.deliveryOption}`, 10, y);
    y += 8;
    doc.text(`Payment Method: ${checkoutData.paymentMethod}`, 10, y);

    doc.save(`receipt-${orderId}.pdf`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-start">
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />
      <motion.div 
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col"
        >
        <div className="p-6 border-b border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-orange-600" />
            <h2 className="text-xl font-bold">{isCheckingOut ? 'Checkout' : 'Your Order'}</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {isCheckingOut ? (
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-stone-900 mb-4">Delivery address</h3>
                <div className="space-y-4">
                  <input type="text" className="w-full p-3 rounded-xl border border-stone-200 text-stone-900 bg-stone-50" placeholder="Delivery Address" onChange={(e) => setCheckoutData({...checkoutData, address: e.target.value})} />
                  <button className="w-full p-3 rounded-xl border border-stone-200 text-stone-500 flex items-center gap-2 hover:bg-stone-50" onClick={() => setCheckoutData({...checkoutData, location: 'Current Coordinates: -1.29, 36.82'})}>
                    <MapPin className="w-4 h-4" />
                    {checkoutData.location || 'Set Location on Map'}
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-stone-900 mb-4">Courier tip</h3>
                <div className="flex gap-2">
                  {[0, 5, 10, 15].map(tip => (
                    <button
                      key={tip}
                      onClick={() => setCheckoutData({...checkoutData, courierTip: tip})}
                      className={`flex-1 p-3 rounded-xl border font-medium ${checkoutData.courierTip === tip ? 'border-orange-500 bg-orange-50' : 'border-stone-200'}`}
                    >
                      {tip}%
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-stone-900 mb-4">Delivery options</h3>
                <div className="space-y-2">
                  <button 
                    className={`w-full p-4 rounded-xl border ${checkoutData.deliveryOption === 'Standard' ? 'border-orange-500 bg-orange-50' : 'border-stone-200'} text-left text-stone-900 font-medium`}
                    onClick={() => setCheckoutData({...checkoutData, deliveryOption: 'Standard'})}
                  >Standard</button>
                  <button 
                    className={`w-full p-4 rounded-xl border ${checkoutData.deliveryOption === 'Schedule' ? 'border-orange-500 bg-orange-50' : 'border-stone-200'} text-left text-stone-900 font-medium`}
                    onClick={() => setCheckoutData({...checkoutData, deliveryOption: 'Schedule'})}
                  >Schedule</button>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-stone-900 mb-4">Payment method</h3>
                <div className="space-y-2">
                  {PAYMENT_METHODS.map(m => {
                    const Icon = iconMap[m.icon];
                    return (
                      <button 
                        key={m.name}
                        className={`w-full p-4 rounded-xl border ${checkoutData.paymentMethod === m.name ? 'border-orange-500 bg-orange-50' : 'border-stone-200'} text-left flex items-center justify-between`}
                        onClick={() => setCheckoutData({...checkoutData, paymentMethod: m.name})}
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-stone-100 rounded-lg">
                            <Icon className="w-5 h-5 text-stone-700" />
                          </div>
                          <div>
                            <p className="font-bold text-stone-900">{m.name}</p>
                            <p className="text-sm text-stone-500">{m.details}</p>
                          </div>
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 ${checkoutData.paymentMethod === m.name ? 'border-orange-500 bg-orange-500' : 'border-stone-300'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag className="w-10 h-10 text-stone-300" />
                </div>
                <p className="text-stone-500 font-medium">Your cart is empty.</p>
                <button onClick={onClose} className="mt-4 text-orange-600 font-bold hover:underline">
                  Go browse the menu
                </button>
              </div>
            ) : (
              items.map(item => (
                <div key={item.id} className="flex gap-4">
                  {item.image && (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 rounded-xl object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800'; }}
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-stone-900 text-sm leading-tight">{item.name}</h3>
                      <button onClick={() => onRemove(item.id)} className="text-stone-300 hover:text-red-500">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-stone-500 text-xs mb-3">$ {item.price}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden">
                        <button onClick={() => onUpdateQty(item.id, -1)} className="p-1 hover:bg-stone-50">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center text-sm font-bold">{item.quantity}</span>
                        <button onClick={() => onUpdateQty(item.id, 1)} className="p-1 hover:bg-stone-50">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="font-bold text-stone-900">$ {item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))
            )
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-stone-50 border-t border-stone-200">
            {!isCheckingOut && (
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-stone-500 text-sm">
                  <span>Subtotal</span>
                  <span>$ {subtotal}</span>
                </div>
                <div className="flex justify-between text-stone-900 font-bold text-lg">
                  <span>Total</span>
                  <span>$ {total}</span>
                </div>
              </div>
            )}
            
            {isCheckingOut && (
              <div className="space-y-2 mb-6 border-t pt-4">
                <div className="flex justify-between text-stone-500 text-sm">
                  <span>Subtotal</span>
                  <span>$ {subtotal}</span>
                </div>
                <div className="flex justify-between text-stone-500 text-sm">
                  <span>Tip ({checkoutData.courierTip}%)</span>
                  <span>$ {tipAmount}</span>
                </div>
                <div className="flex justify-between text-stone-900 font-bold text-lg">
                  <span>Total</span>
                  <span>$ {total}</span>
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 gap-3">
              {isCheckingOut ? (
                <button 
                  onClick={() => {
                    const id = Math.random().toString(36).substr(2, 9);
                    onPlaceOrder(id);
                    downloadReceipt(id);
                    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${generateWhatsAppMessage(id)}`, '_blank');
                  }}
                  className="w-full bg-green-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-green-900/10 hover:bg-green-700 transition-all active:scale-95"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Confirm & Order
                </button>
              ) : (
                <button 
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full bg-orange-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-900/10 hover:bg-orange-700 transition-all active:scale-95"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Proceed to Checkout
                </button>
              )}
            </div>
          </div>
        )}
        </motion.div>
      </div>
  );
};
