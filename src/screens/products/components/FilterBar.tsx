interface FilterBarProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-center gap-4 mb-8">
      <button
        onClick={() => setFilter('default')}
        className={`px-5 py-2 rounded-lg font-bebas text-shadow transition-all ${
          filter === 'default'
            ? 'bg-brand-light text-brand-deepblue border-2 border-brand-lightblue/30'
            : 'bg-brand-mediumblue/50 text-brand-light hover:bg-brand-mediumblue border border-brand-softblue/30'
        }`}
      >
        TODOS
      </button>
      <button
        onClick={() => setFilter('low')}
        className={`px-5 py-2 rounded-lg font-bebas text-shadow transition-all ${
          filter === 'low'
            ? 'bg-brand-light text-brand-deepblue border-2 border-brand-lightblue/30'
            : 'bg-brand-mediumblue/50 text-brand-light hover:bg-brand-mediumblue border border-brand-softblue/30'
        }`}
      >
        MENOR PREÇO
      </button>
      <button
        onClick={() => setFilter('high')}
        className={`px-5 py-2 rounded-lg font-bebas text-shadow transition-all ${
          filter === 'high'
            ? 'bg-brand-light text-brand-deepblue border-2 border-brand-lightblue/30'
            : 'bg-brand-mediumblue/50 text-brand-light hover:bg-brand-mediumblue border border-brand-softblue/30'
        }`}
      >
        MAIOR PREÇO
      </button>
    </div>
  );
};

export default FilterBar;
