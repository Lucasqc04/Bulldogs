import { Instagram, Share2 } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-4 mb-12">
      <a
        href="https://www.instagram.com/atletica.fatecsp/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transform hover:scale-105 transition-all"
      >
        <Instagram className="w-5 h-5" />
        <span>@atleticafatecsp</span>
      </a>
      <a
        href="https://linktr.ee/atletica.fatecsp?fbclid=PAZXh0bgNhZW0CMTEAAaYpqFdGhWewp5RZ29A8SlADJzhHFM5MwdsI91PDsW3NnTsPS1iCEtzEuWE_aem_a1jW4iJ1DfLNRFbRxFukgQ"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full flex items-center gap-2 transform hover:scale-105 transition-all"
      >
        <Share2 className="w-5 h-5" />
        <span>Linktree</span>
      </a>
    </div>
  );
};

export default SocialLinks;
