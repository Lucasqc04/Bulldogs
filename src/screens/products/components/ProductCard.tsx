import { MessageCircle } from 'lucide-react';

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-blue-800/50 backdrop-blur rounded-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-[1.02]">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        {product.isNew && (
          <div className="absolute top-4 right-4 bg-yellow-500 text-blue-900 px-3 py-1 rounded-full font-bold text-sm">
            NOVO 🔥
          </div>
        )}
        {product.isBestSeller && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
            MAIS VENDIDO 🏆
          </div>
        )}
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white mb-2">{product.name}</h2>
        <p className="text-gray-300 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl font-bold text-yellow-500">
              R$ {product.price.toFixed(2)}
            </span>
            {product.installments && (
              <p className="text-sm text-gray-400">
                ou 3x de R$ {(product.price / 3).toFixed(2)}
              </p>
            )}
          </div>
          <a
            href={`https://wa.me/5511999999999?text=Fala! Quero comprar: ${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2 transform hover:scale-105 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
