import { Truck, CreditCard, Siren as Fire } from 'lucide-react';

const StoreInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
      <div className="bg-blue-800/50 backdrop-blur p-4 rounded-lg">
        <Truck className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
        <p className="text-white text-center">Entrega na FATEC GRÁTIS</p>
      </div>
      <div className="bg-blue-800/50 backdrop-blur p-4 rounded-lg">
        <CreditCard className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
        <p className="text-white text-center">Parcele em até 3x</p>
      </div>
      <div className="bg-blue-800/50 backdrop-blur p-4 rounded-lg">
        <Fire className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
        <p className="text-white text-center">20% OFF para SÓCIOS</p>
      </div>
    </div>
  );
};

export default StoreInfo;
