import { useState } from 'react';
import { X } from 'lucide-react';

interface PurchaseModalProps {
  product: {
    name: string;
    price: number;
    installments?: boolean;
    available?: boolean;
  };
  isOpen: boolean;
  onClose: () => void;
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [installments, setInstallments] = useState(1);
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [isMember, setIsMember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const finalPrice = product.price * quantity * (isMember ? 0.8 : 1); // 20% desconto para sócios
    const message = `Olá! Quero fazer um pedido:
- Produto: ${product.name}
- Quantidade: ${quantity}
- Valor Total: R$ ${finalPrice.toFixed(2)}
- Parcelamento: ${installments}x de R$ ${(finalPrice / installments).toFixed(2)}
- Nome: ${name}
${size ? `- Tamanho: ${size}` : ''}
- Sócio Atlética: ${isMember ? 'Sim' : 'Não'}`;

    const whatsappUrl = `https://wa.me/5511993288916?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="relative bg-gradient-to-br from-brand-navyblue to-brand-deepblue rounded-xl max-w-md w-full p-6 shadow-2xl border border-brand-softblue/30">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-paleblue hover:text-brand-light transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bebas text-brand-light mb-6">Finalizar Compra</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-brand-paleblue mb-1">Nome Completo</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-brand-deepblue/50 border border-brand-softblue/30 text-brand-light focus:outline-none focus:border-brand-lightblue"
            />
          </div>

          <div>
            <label className="block text-brand-paleblue mb-1">Quantidade</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full px-4 py-2 rounded-lg bg-brand-deepblue/50 border border-brand-softblue/30 text-brand-light focus:outline-none focus:border-brand-lightblue"
            />
          </div>

          {/* Campo de tamanho apenas para produtos de vestuário */}
          {['Camiseta', 'Moletom', 'Shorts'].some(item => product.name.includes(item)) && (
            <div>
              <label className="block text-brand-paleblue mb-1">Tamanho</label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-brand-deepblue/50 border border-brand-softblue/30 text-brand-light focus:outline-none focus:border-brand-lightblue"
              >
                <option value="">Selecione</option>
                <option value="P">P</option>
                <option value="M">M</option>
                <option value="G">G</option>
                <option value="GG">GG</option>
              </select>
            </div>
          )}

          {product.installments && (
            <div>
              <label className="block text-brand-paleblue mb-1">Parcelamento</label>
              <select
                value={installments}
                onChange={(e) => setInstallments(Number(e.target.value))}
                className="w-full px-4 py-2 rounded-lg bg-brand-deepblue/50 border border-brand-softblue/30 text-brand-light focus:outline-none focus:border-brand-lightblue"
              >
                <option value={1}>À vista - R$ {(product.price * quantity).toFixed(2)}</option>
                <option value={2}>2x de R$ {(product.price * quantity / 2).toFixed(2)}</option>
                <option value={3}>3x de R$ {(product.price * quantity / 3).toFixed(2)}</option>
              </select>
            </div>
          )}

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="isMember"
              checked={isMember}
              onChange={(e) => setIsMember(e.target.checked)}
              className="rounded border-brand-softblue/30 bg-brand-deepblue/50"
            />
            <label htmlFor="isMember" className="text-brand-paleblue">
              Sou sócio da Atlética (-20%)
            </label>
          </div>

          <div className="pt-4 border-t border-brand-softblue/20">
            <p className="text-brand-light mb-4">
              Total: R$ {(product.price * quantity * (isMember ? 0.8 : 1)).toFixed(2)}
            </p>
            <button
              type="submit"
              className="w-full bg-brand-lightblue text-brand-deepblue font-bebas text-lg py-3 rounded-lg hover:bg-brand-paleblue transition-colors"
            >
              CONTINUAR NO WHATSAPP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PurchaseModal;
