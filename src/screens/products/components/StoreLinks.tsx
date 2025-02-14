import { MessageCircle } from 'lucide-react';

const StoreLinks = () => {
  return (
    <div className="flex justify-center gap-4 mb-12">
      <a
        href="https://www.instagram.com/bulldogstore.fatecsp/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-full flex items-center gap-2 transform hover:scale-105 transition-all"
      >
        <span>@storebulldogs</span>
      </a>
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full flex items-center gap-2 transform hover:scale-105 transition-all"
      >
        <MessageCircle className="w-5 h-5" />
        <span>Comprar</span>
      </a>
    </div>
  );
};

export default StoreLinks;
