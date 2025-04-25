import { whatsappGroups } from '../arrays';

const WhatsAppGroups = () => {
  return (
    <section className="py-16 bg-brand-blue backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bebas text-shadow text-center text-brand-light mb-8">
          GRUPOS <span className="text-brand-gray">OFICIAIS</span> 📱
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatsappGroups.map((group, index) => (
            <a
              key={index}
              href={group.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-dark hover:bg-opacity-80 p-6 rounded-lg text-brand-light text-center transform hover:scale-105 transition-all"
            >
              <h3 className="text-xl font-bebas text-shadow mb-2">{group.name}</h3>
              <p className="text-brand-gray">{group.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsAppGroups;
