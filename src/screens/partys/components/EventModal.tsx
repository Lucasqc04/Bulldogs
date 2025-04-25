import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Tag, Info, Check, ChevronLeft } from 'lucide-react';

interface EventModalProps {
  event: any;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const [step, setStep] = useState<'info' | 'form'>('info');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isMember, setIsMember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const finalPrice = event.price * quantity * (isMember ? 0.8 : 1); // 20% desconto para sócios
    const message = `Olá! Quero comprar ingressos:
- Evento: ${event.name}
- Quantidade: ${quantity}
- Valor Total: R$ ${finalPrice.toFixed(2)}
- Nome: ${name}
- Idade: ${age}
- Sócio Atlética: ${isMember ? 'Sim' : 'Não'}
- Data: ${event.date}`;

    const whatsappUrl = `https://wa.me/5511993288916?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br from-brand-navyblue to-brand-deepblue rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-brand-softblue/30 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-paleblue hover:text-brand-light z-10 bg-brand-deepblue/50 p-2 rounded-full"
        >
          <X className="w-6 h-6" />
        </button>

        {step === 'info' && (
          <>
            <div className="relative">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navyblue to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="inline-block px-3 py-1 rounded-full bg-brand-mediumblue/70 text-brand-light font-medium border border-brand-softblue/40 mb-4">
                  {event.type}
                </div>
                <h2 className="text-5xl font-bebas text-shadow text-brand-light mb-2">
                  {event.name}
                </h2>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 bg-brand-deepblue/30 p-4 rounded-lg border border-brand-softblue/20">
                <div className="flex items-center">
                  <Calendar className="w-8 h-8 mr-3 text-brand-lightblue" />
                  <div>
                    <div className="text-sm text-brand-paleblue">Data</div>
                    <div className="text-lg text-brand-light">{event.date}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-8 h-8 mr-3 text-brand-lightblue" />
                  <div>
                    <div className="text-sm text-brand-paleblue">Horário</div>
                    <div className="text-lg text-brand-light">{event.time}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-8 h-8 mr-3 text-brand-lightblue" />
                  <div>
                    <div className="text-sm text-brand-paleblue">Local</div>
                    <div className="text-lg text-brand-light">{event.location}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Tag className="w-8 h-8 mr-3 text-brand-lightblue" />
                  <div>
                    <div className="text-sm text-brand-paleblue">Ingresso</div>
                    <div className="text-xl font-bold text-brand-light">R$ {event.price.toFixed(2)}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-brand-lightblue font-bebas text-2xl mb-3 flex items-center">
                    <Info className="w-5 h-5 mr-2" /> SOBRE O EVENTO
                  </h3>
                  <div className="bg-brand-deepblue/30 p-4 rounded-lg border border-brand-softblue/20">
                    <p className="text-brand-light whitespace-pre-line">{event.fullDescription}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-brand-lightblue font-bebas text-2xl mb-3 flex items-center">
                    <Check className="w-5 h-5 mr-2" /> O QUE ESTÁ INCLUSO
                  </h3>
                  <div className="bg-brand-deepblue/30 p-4 rounded-lg border border-brand-softblue/20">
                    <ul className="space-y-2">
                      {event.includes.map((item: string, index: number) => (
                        <li key={index} className="flex items-center text-brand-light">
                          <div className="w-5 h-5 rounded-full bg-brand-lightblue/20 flex items-center justify-center mr-3 text-brand-lightblue">✓</div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-brand-lightblue font-bebas text-2xl mb-3 flex items-center">
                    <Info className="w-5 h-5 mr-2" /> INFORMAÇÕES IMPORTANTES
                  </h3>
                  <div className="bg-brand-deepblue/30 p-4 rounded-lg border border-brand-softblue/20">
                    <ul className="space-y-2">
                      {event.important.map((info: string, index: number) => (
                        <li key={index} className="flex items-start text-brand-light">
                          <div className="w-5 h-5 rounded-full bg-brand-lightblue/20 flex items-center justify-center mr-3 text-brand-lightblue mt-1">!</div>
                          {info}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-softblue/20 flex justify-between items-center">
                <div>
                  <span className="text-3xl font-bold text-brand-lightblue">
                    R$ {event.price.toFixed(2)}
                  </span>
                  <span className="text-brand-paleblue ml-2">(antecipado)</span>
                </div>
                <button
                  onClick={() => setStep('form')}
                  className="bg-brand-lightblue hover:bg-brand-paleblue text-brand-deepblue font-bebas text-lg py-3 px-8 rounded-lg transition-colors shadow-lg flex items-center"
                >
                  COMPRAR AGORA <span className="ml-2">🎟️</span>
                </button>
              </div>
            </div>
          </>
        )}

        {step === 'form' && (
          <div className="p-8">
            <button 
              onClick={() => setStep('info')}
              className="flex items-center text-brand-paleblue hover:text-brand-light mb-6"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Voltar às informações
            </button>
            
            <h2 className="text-4xl font-bebas text-shadow text-brand-light mb-6 text-center">
              COMPRAR INGRESSO
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-brand-deepblue/30 p-6 rounded-lg border border-brand-softblue/20 mb-6">
                <div className="mb-6">
                  <label className="block text-brand-paleblue mb-2 font-medium">Nome Completo</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite seu nome completo"
                    className="w-full px-4 py-3 rounded-lg bg-brand-deepblue/70 border border-brand-softblue/30 text-brand-light focus:outline-none focus:border-brand-lightblue"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-brand-paleblue mb-2 font-medium">Idade</label>
                  <input
                    type="number"
                    required
                    min="18"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Idade (mínimo 18 anos)"
                    className="w-full px-4 py-3 rounded-lg bg-brand-deepblue/70 border border-brand-softblue/30 text-brand-light focus:outline-none focus:border-brand-lightblue"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-brand-paleblue mb-2 font-medium">Quantidade de Ingressos</label>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      className="bg-brand-deepblue/70 text-brand-paleblue px-4 py-3 rounded-l-lg border border-brand-softblue/30"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="w-20 text-center py-3 bg-brand-deepblue/70 border-y border-brand-softblue/30 text-brand-light focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="bg-brand-deepblue/70 text-brand-paleblue px-4 py-3 rounded-r-lg border border-brand-softblue/30"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-3 mb-2">
                  <input
                    type="checkbox"
                    id="isMember"
                    checked={isMember}
                    onChange={(e) => setIsMember(e.target.checked)}
                    className="w-5 h-5 rounded border-brand-softblue/30 bg-brand-deepblue/50"
                  />
                  <label htmlFor="isMember" className="text-brand-light text-lg">
                    Sou sócio da Atlética <span className="text-brand-lightblue">(20% de desconto)</span>
                  </label>
                </div>
              </div>

              <div className="bg-brand-deepblue/30 p-6 rounded-lg border border-brand-softblue/20">
                <h3 className="text-xl font-semibold text-brand-light mb-4">Resumo do Pedido</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-brand-paleblue">Evento:</span>
                    <span className="text-brand-light">{event.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-paleblue">Data:</span>
                    <span className="text-brand-light">{event.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-paleblue">Ingresso(s):</span>
                    <span className="text-brand-light">{quantity} x R$ {event.price.toFixed(2)}</span>
                  </div>
                  {isMember && (
                    <div className="flex justify-between text-brand-lightblue">
                      <span>Desconto de sócio:</span>
                      <span>-20%</span>
                    </div>
                  )}
                  <div className="h-px bg-brand-softblue/20 my-2"></div>
                  <div className="flex justify-between font-bold">
                    <span className="text-brand-paleblue">Total:</span>
                    <span className="text-2xl text-brand-lightblue">R$ {(event.price * quantity * (isMember ? 0.8 : 1)).toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-brand-lightblue text-brand-deepblue font-bebas text-xl py-4 rounded-lg hover:bg-brand-paleblue transition-colors shadow-lg flex items-center justify-center"
                >
                  FINALIZAR NO WHATSAPP
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventModal;
