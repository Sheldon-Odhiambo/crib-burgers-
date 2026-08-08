import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Package, ChefHat, Truck, CheckCircle } from 'lucide-react';

export const OrderTracker = ({ orderId, onClose }: { orderId: string, onClose: () => void }) => {
  const [status, setStatus] = useState<'preparing' | 'delivering' | 'delivered'>('preparing');

  useEffect(() => {
    const timer1 = setTimeout(() => setStatus('delivering'), 3000);
    const timer2 = setTimeout(() => setStatus('delivered'), 7000);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  const steps = [
    { id: 'preparing', label: 'Preparing', icon: ChefHat },
    { id: 'delivering', label: 'Out for Delivery', icon: Truck },
    { id: 'delivered', label: 'Delivered', icon: CheckCircle },
  ];

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-3xl p-8 max-w-sm w-full"
        >
          <h2 className="text-2xl font-bold mb-6">Order #{orderId} Status</h2>
          <div className="space-y-6">
            {steps.map((step, index) => {
              const isCompleted = status === 'delivered' || (status === 'delivering' && step.id === 'preparing');
              return (
                <div key={step.id} className={`flex items-center gap-4 ${isCompleted ? 'text-orange-600' : 'text-stone-400'}`}>
                  <div className={`p-3 rounded-full ${isCompleted ? 'bg-orange-100' : 'bg-stone-100'}`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold">{step.label}</span>
                </div>
              );
            })}
          </div>
          <button onClick={onClose} className="mt-8 w-full bg-stone-900 text-white font-bold py-3 rounded-xl">Close</button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
