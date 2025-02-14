import React from 'react';
import { Calendar, MapPin, Music, Timer } from 'lucide-react';

interface EventCardProps {
  event: any;
  onClick: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  return (
    <div
      className="bg-blue-800/50 backdrop-blur rounded-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-[1.02] cursor-pointer"
      onClick={onClick}
    >
      <div className="md:flex">
        <div className="md:w-1/3 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent" />
          <img
            src={event.image}
            alt={event.name}
            className="h-64 md:h-full w-full object-cover"
          />
        </div>
        <div className="p-8 md:w-2/3">
          <div className="uppercase tracking-wide text-yellow-500 font-bold mb-2">
            {event.type}
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {event.name}
          </h2>
          <p className="text-gray-300 mb-6">{event.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center text-gray-300">
              <Calendar className="w-5 h-5 mr-2 text-yellow-500" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Timer className="w-5 h-5 mr-2 text-yellow-500" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-5 h-5 mr-2 text-yellow-500" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Music className="w-5 h-5 mr-2 text-yellow-500" />
              <span>{event.attractions}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-3xl font-bold text-yellow-500">
                R$ {event.price.toFixed(2)}
              </span>
              <span className="text-gray-300 ml-2">(antecipado)</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(
                  `https://wa.me/5511999999999?text=Olá! Gostaria de comprar ingressos para: ${event.name}`,
                  '_blank'
                );
              }}
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-6 py-3 rounded-md font-bold transform hover:scale-105 transition-all flex items-center gap-2"
            >
              COMPRAR INGRESSO 🎟️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
