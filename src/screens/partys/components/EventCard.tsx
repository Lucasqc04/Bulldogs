import React from 'react';
import { Calendar, MapPin, Clock, Tag } from 'lucide-react';

interface EventCardProps {
  event: any;
  onClick: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  return (
    <div
      className="bg-gradient-to-br from-brand-navyblue to-brand-deepblue backdrop-blur rounded-2xl overflow-hidden hover:shadow-xl transition-all transform hover:scale-[1.02] cursor-pointer border border-brand-softblue/20"
      onClick={onClick}
    >
      <div className="md:flex">
        <div className="md:w-1/3 relative h-72 md:h-auto overflow-hidden">
          <img
            src={event.image}
            alt={event.name}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-navyblue via-transparent to-transparent"></div>
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-mediumblue/70 text-brand-light font-medium border border-brand-softblue/40">
            {event.type}
          </div>
        </div>
        <div className="p-8 md:w-2/3">
          <h2 className="text-4xl font-bebas text-shadow text-brand-light mb-2">
            {event.name}
          </h2>
          <p className="text-brand-paleblue mb-6 border-l-4 border-brand-lightblue/40 pl-3">
            {event.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-brand-light">
              <Calendar className="w-5 h-5 mr-2 text-brand-lightblue" />
              <span className="text-brand-paleblue">{event.date}</span>
            </div>
            <div className="flex items-center text-brand-light">
              <Clock className="w-5 h-5 mr-2 text-brand-lightblue" />
              <span className="text-brand-paleblue">{event.time}</span>
            </div>
            <div className="flex items-center text-brand-light">
              <MapPin className="w-5 h-5 mr-2 text-brand-lightblue" />
              <span className="text-brand-paleblue truncate">{event.location}</span>
            </div>
            <div className="flex items-center text-brand-light">
              <Tag className="w-5 h-5 mr-2 text-brand-lightblue" />
              <span className="text-brand-paleblue">
                R$ <span className="text-brand-light font-bold">{event.price.toFixed(2)}</span>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-brand-softblue/20">
            <div>
              <span className="text-brand-paleblue">Vendas limitadas!</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              className="group relative overflow-hidden bg-brand-lightblue hover:bg-brand-paleblue text-brand-navyblue font-bold px-6 py-3 rounded-lg flex items-center gap-2 transform hover:scale-105 transition-all shadow-lg"
            >
              <span className="font-bebas tracking-wide">COMPRAR AGORA 🎟️</span>
              <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-[45deg] group-hover:left-[100%] transition-all duration-700"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
