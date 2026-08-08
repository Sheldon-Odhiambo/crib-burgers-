import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-stone-950 flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="w-32 h-32 bg-orange-600 rounded-full flex items-center justify-center mb-8">
            <span className="text-white font-bold text-4xl">C</span>
        </div>
        
        <h1 className="text-4xl font-heading text-white mb-2 uppercase tracking-wider">Crib Burgers</h1>
        <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-12">The Kitchen Ministry</p>
        
        <div className="w-64 h-2 bg-stone-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-orange-600"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-stone-500 text-xs mt-4 uppercase tracking-widest">
            Grilling your experience... {progress}%
        </p>
      </motion.div>
    </div>
  );
};
