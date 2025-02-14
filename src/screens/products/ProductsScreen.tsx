import{ useState } from 'react';
import { products as productsData } from './arrays';
import StoreInfo from './components/StoreInfo';
import StoreLinks from './components/StoreLinks';
import FilterBar from './components/FilterBar';
import ProductCard from './components/ProductCard';
import KitHighlight from './components/KitHighlight';

const ProductsScreen = () => {
  const [filter, setFilter] = useState('default');

  // Cria uma cópia do array de produtos e aplica ordenação com base no filtro
  let filteredProducts = [...productsData];
  if (filter === 'low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (filter === 'high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800">
      {/* Hero Section */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-white mb-4">
              STORE <span className="text-yellow-500">BULLDOGS</span> 🛍️
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Vista-se com ORGULHO! Aqui é BULLDOGS, P#@$*! 🐶
            </p>
          </div>

          {/* Informações da Loja */}
          <StoreInfo />

          {/* Links da Loja */}
          <StoreLinks />

          {/* Filtro */}
          <FilterBar filter={filter} setFilter={setFilter} />

          {/* Grid de Produtos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Destaque para o Kit Calouros */}
          <KitHighlight />
        </div>
      </section>
    </div>
  );
};

export default ProductsScreen;
