const StatsSection = () => {
    return (
      <section className="bg-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">15+</div>
              <div className="text-gray-300">Modalidades</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">1000+</div>
              <div className="text-gray-300">Atletas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">50+</div>
              <div className="text-gray-300">Títulos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">25+</div>
              <div className="text-gray-300">Anos de História</div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default StatsSection;
  