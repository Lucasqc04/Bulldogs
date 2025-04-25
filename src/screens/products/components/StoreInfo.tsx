import { Truck, CreditCard, Siren as Fire } from 'lucide-react';

const StoreInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
      <div className="bg-gradient-to-r from-brand-navyblue to-brand-deepblue backdrop-blur p-6 rounded-lg border border-brand-softblue/30 shadow-lg transform hover:translate-y-[-2px] transition-all">
        <Truck className="w-8 h-8 text-brand-paleblue mx-auto mb-2" />
        <p className="text-brand-light text-center">Entrega na FATEC GRÁTIS</p>
      </div>
      <div className="bg-gradient-to-r from-brand-navyblue to-brand-deepblue backdrop-blur p-6 rounded-lg border border-brand-softblue/30 shadow-lg transform hover:translate-y-[-2px] transition-all">
        <CreditCard className="w-8 h-8 text-brand-paleblue mx-auto mb-2" />
        <p className="text-brand-light text-center">Parcele em até 3x</p>
      </div>
      <div className="bg-gradient-to-r from-brand-navyblue to-brand-deepblue backdrop-blur p-6 rounded-lg border border-brand-softblue/30 shadow-lg transform hover:translate-y-[-2px] transition-all">
        <Fire className="w-8 h-8 text-brand-paleblue mx-auto mb-2" />
        <p className="text-brand-light text-center">20% OFF para SÓCIOS</p>
      </div>
    </div>
  );
};

export default StoreInfo;
