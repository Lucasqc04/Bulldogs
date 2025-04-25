import { useState } from 'react';
import SocialLinks from './components/SocialLinks';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import WhatsAppGroups from './components/WhatsAppGroups';
import { events } from './arrays';

// Importando a imagem do banner
import farejadaImage from '../../assets/farejada.webp';

const PartiesScreen = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-deepblue via-brand-navyblue to-brand-mediumblue">
      {/* Banner em tela cheia */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={farejadaImage} 
            alt="Farejada 5.0" 
            className="w-full h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-deepblue/60 via-transparent to-brand-navyblue"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-7xl md:text-8xl font-bebas text-shadow-lg text-brand-light mb-6 tracking-wide animate-fadeIn">
            FAREJADA 5.0 <span className="text-brand-lightblue">MODO TURBO</span>
          </h1>
          <p className="text-2xl md:text-3xl text-brand-paleblue mb-8 max-w-3xl mx-auto">
            A tradição da Atlética Fatec SP voltou com tudo! 🐶💙
          </p>
          <button 
            onClick={() => setSelectedEvent(events[0])}
            className="animate-pulse bg-brand-lightblue hover:bg-brand-paleblue text-brand-deepblue px-8 py-4 rounded-full font-bebas text-xl tracking-wide shadow-lg transition-all transform hover:scale-105"
          >
            GARANTA SEU INGRESSO 🎟️
          </button>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-brand-softblue blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-brand-lightblue blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bebas text-shadow-md text-brand-light mb-4 tracking-wide">
              PRÓXIMOS <span className="text-brand-lightblue">EVENTOS</span> 🎉
            </h2>
            <p className="text-xl text-brand-paleblue mb-8 max-w-2xl mx-auto">
              As festas mais INSANAS de São Paulo! 🔥
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-softblue to-transparent mx-auto"></div>
          </div>

          {/* Social Links */}
          <SocialLinks />

          <div className="grid gap-8">
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => setSelectedEvent(event)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}

      {/* WhatsApp Groups Section */}
      <WhatsAppGroups />
    </div>
  );
};

export default PartiesScreen;
