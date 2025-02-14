import React from 'react';
import { X } from 'lucide-react';

interface EventModalProps {
  event: any;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-blue-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-yellow-500 z-10"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-64 object-cover rounded-t-lg"
          />
        </div>
        <div className="p-8">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            {event.name}
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-yellow-500 font-bold mb-2">Sobre o Evento</h3>
              <p className="text-gray-300">{event.fullDescription}</p>
            </div>
            <div>
              <h3 className="text-yellow-500 font-bold mb-2">O que está incluso</h3>
              <ul className="list-disc list-inside text-gray-300">
                {event.includes.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-yellow-500 font-bold mb-2">Informações Importantes</h3>
              <ul className="list-disc list-inside text-gray-300">
                {event.important.map((info: string, index: number) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
            </div>
            <div className="pt-6 border-t border-blue-800">
              <button
                onClick={() => {
                  window.open(
                    `https://wa.me/5511999999999?text=Olá! Gostaria de comprar ingressos para: ${event.name}`,
                    '_blank'
                  );
                }}
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-blue-900 py-4 rounded-md font-bold text-lg transform hover:scale-105 transition-all"
              >
                GARANTIR MEU INGRESSO 🎟️
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
