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
    <div className="min-h-screen bg-gradient-to-br from-brand-deepblue via-brand-blue to-brand-mediumblue">
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-brand-lightblue blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-brand-softblue blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-brand-navyblue rounded-2xl mb-6 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-brand-paleblue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
            <h1 className="text-5xl font-bebas text-shadow-md text-brand-light mb-4 tracking-wide">
              STORE <span className="text-brand-lightblue">BULLDOGS</span> 🛍️
            </h1>
            <p className="text-xl text-brand-paleblue mb-8 max-w-2xl mx-auto">
              Vista-se com ORGULHO! Aqui é BULLDOGS no coração! 🐶
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-softblue to-transparent mx-auto"></div>
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
