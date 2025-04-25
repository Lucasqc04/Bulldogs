import { Instagram, Share2 } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-4 mb-12">
      <a
        href="https://www.instagram.com/atletica.fatecsp/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden bg-gradient-to-r from-brand-mediumblue to-brand-blue text-brand-light px-6 py-3 rounded-full flex items-center gap-2 transform hover:scale-105 transition-all border border-brand-softblue/30 shadow-lg"
      >
        <Instagram className="w-5 h-5" />
        <span>@atleticafatecsp</span>
        <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-[45deg] group-hover:left-[100%] transition-all duration-700"></span>
      </a>
      <a
        href="https://linktr.ee/atletica.fatecsp"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden bg-gradient-to-r from-brand-blue to-brand-mediumblue text-brand-light px-6 py-3 rounded-full flex items-center gap-2 transform hover:scale-105 transition-all border border-brand-lightblue/20 shadow-lg"
      >
        <Share2 className="w-5 h-5" />
        <span>Linktree</span>
        <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-[45deg] group-hover:left-[100%] transition-all duration-700"></span>
      </a>
    </div>
  );
};

export default SocialLinks;
