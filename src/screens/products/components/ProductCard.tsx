import { MessageCircle, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import PurchaseModal from './PurchaseModal';

interface ProductCardProps {
  product: {
    name: string;
    description: string;
    price: number;
    images: string[];
    isNew?: boolean;
    isBestSeller?: boolean;
    installments?: boolean;
    available?: boolean;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentImage < product.images.length - 1) {
      setCurrentImage(prev => prev + 1);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentImage > 0) {
      setCurrentImage(prev => prev - 1);
    }
  };

  const handleCheckAvailability = () => {
    const message = `Olá! Estou interessado no produto: ${product.name}. Quando estará disponível para compra?`;
    const whatsappUrl = `https://wa.me/5511993288916?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <div className="group bg-gradient-to-br from-brand-navyblue to-brand-deepblue backdrop-blur rounded-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-[1.02] border border-brand-softblue/20">
        <div className="relative overflow-hidden">
          {/* Container de imagens com navegação */}
          <div className="relative aspect-[4/3]">
            <div className="relative h-full overflow-hidden bg-white">
              <div 
                className="flex transition-transform duration-500 h-full"
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.name} - Imagem ${index + 1}`}
                    className={`w-full h-full object-contain flex-shrink-0 ${!product.available ? 'opacity-70' : ''}`}
                  />
                ))}
              </div>
            </div>

            {/* Botões de navegação - Só aparecem se houver mais de uma imagem */}
            {product.images.length > 1 && (
              <>
                {currentImage > 0 && (
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}
                {currentImage < product.images.length - 1 && (
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
              </>
            )}

            {/* Indicadores de imagem */}
            {product.images.length > 1 && (
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                {product.images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      index === currentImage 
                        ? "bg-white w-3" 
                        : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {product.isNew && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-brand-lightblue to-brand-paleblue text-brand-deepblue px-3 py-1 rounded-full font-bold text-sm z-20 shadow-md border border-brand-light/30">
              NOVO 🔥
            </div>
          )}
          {product.isBestSeller && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-brand-mediumblue to-brand-blue text-brand-light px-3 py-1 rounded-full font-bold text-sm z-20 border border-brand-softblue/30 shadow-md">
              MAIS VENDIDO 🏆
            </div>
          )}
          {!product.available && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 text-white px-4 py-2 rounded-lg font-bold text-lg z-20 border border-red-500/50 shadow-lg">
              INDISPONÍVEL
            </div>
          )}
        </div>
        <div className="p-6 relative">
          <h2 className="text-2xl font-bebas text-shadow text-brand-light mb-2">{product.name}</h2>
          <p className="text-brand-paleblue/80 mb-4">{product.description}</p>
          <div className="flex items-center justify-between pt-4 border-t border-brand-softblue/20">
            <div>
              <span className="text-3xl font-bold text-brand-lightblue">
                R$ {product.price.toFixed(2)}
              </span>
              {product.installments && (
                <p className="text-sm text-brand-paleblue">
                  ou 3x de R$ {(product.price / 3).toFixed(2)}
                </p>
              )}
            </div>
            {product.available ? (
              <button
                onClick={() => setIsPurchaseModalOpen(true)}
                className="group relative overflow-hidden bg-brand-mediumblue hover:bg-brand-softblue text-brand-light px-4 py-2 rounded-md flex items-center gap-2 transform hover:scale-105 transition-all border border-brand-lightblue/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="font-bebas tracking-wide">Comprar</span>
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-[45deg] group-hover:left-[100%] transition-all duration-700"></span>
              </button>
            ) : (
              <button
                onClick={handleCheckAvailability}
                className="group relative overflow-hidden bg-red-500/60 hover:bg-red-600/70 text-white px-4 py-2 rounded-md flex items-center gap-2 transform hover:scale-105 transition-all border border-red-400/30"
              >
                <AlertCircle className="w-4 h-4" />
                <span className="font-bebas tracking-wide">PERGUNTAR DISPONIBILIDADE</span>
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-[45deg] group-hover:left-[100%] transition-all duration-700"></span>
              </button>
            )}
          </div>
        </div>
      </div>

      {product.available && (
        <PurchaseModal
          product={product}
          isOpen={isPurchaseModalOpen}
          onClose={() => setIsPurchaseModalOpen(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
