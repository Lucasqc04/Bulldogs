
import { useState } from 'react';
import SocialLinks from './components/SocialLinks';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import WhatsAppGroups from './components/WhatsAppGroups';
import { events } from './arrays';

const PartiesScreen = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800">
      {/* Hero Section */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-white mb-4">
              FESTAS <span className="text-yellow-500">BULLDOGS</span> 🎉
            </h1>
            <p className="text-xl text-gray-300">
              As festas mais INSANAS de São Paulo! 🔥
            </p>
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
