
interface FilterBarProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-center gap-4 mb-8">
      <button
        onClick={() => setFilter('default')}
        className={`px-4 py-2 rounded-md font-bold transition-all ${
          filter === 'default'
            ? 'bg-yellow-500 text-blue-900'
            : 'bg-blue-800 text-white hover:bg-blue-700'
        }`}
      >
        Todos
      </button>
      <button
        onClick={() => setFilter('low')}
        className={`px-4 py-2 rounded-md font-bold transition-all ${
          filter === 'low'
            ? 'bg-yellow-500 text-blue-900'
            : 'bg-blue-800 text-white hover:bg-blue-700'
        }`}
      >
        Menor Preço
      </button>
      <button
        onClick={() => setFilter('high')}
        className={`px-4 py-2 rounded-md font-bold transition-all ${
          filter === 'high'
            ? 'bg-yellow-500 text-blue-900'
            : 'bg-blue-800 text-white hover:bg-blue-700'
        }`}
      >
        Maior Preço
      </button>
    </div>
  );
};

export default FilterBar;
