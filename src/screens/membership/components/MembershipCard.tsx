import { Check } from 'lucide-react';

interface MembershipCardProps {
  plan: {
    id: string;
    name: string;
    tagline: string;
    type: string;
    price: number;
    description: string;
    benefits: string[];
    color: string;
    textColor: string;
    icon: string;
    featured: boolean;
  };
  onClick: () => void;
}

const MembershipCard: React.FC<MembershipCardProps> = ({ plan, onClick }) => {
  return (
    <div 
      className={`rounded-xl overflow-hidden transform transition-all hover:scale-105 ${
        plan.featured ? 'ring-4 ring-brand-lightblue/30 shadow-xl scale-105 md:scale-110' : ''
      }`}
    >
      {/* Cabeçalho */}
      <div className={`bg-gradient-to-r ${plan.color} p-6 relative overflow-hidden`}>
        {plan.featured && (
          <div className="absolute top-0 right-0">
            <div className="bg-brand-light text-brand-deepblue text-xs font-bold px-3 py-1 transform rotate-45 translate-x-6 translate-y-3 shadow-lg">
              POPULAR
            </div>
          </div>
        )}

        <div className="text-center">
          <div className="text-5xl mb-2">{plan.icon}</div>
          <h3 className={`text-2xl font-bebas text-shadow ${plan.textColor}`}>
            {plan.name}
          </h3>
          <p className={`text-sm ${plan.textColor} opacity-90`}>
            {plan.tagline}
          </p>
          <div className="flex justify-center items-baseline mt-4">
            <span className={`text-4xl font-bold ${plan.textColor}`}>
              R$ {plan.price}
            </span>
            <span className={`ml-1 text-xl ${plan.textColor} opacity-80`}>
              /{plan.type === 'Mensal' ? 'mês' : 'semestre'}
            </span>
          </div>
          <div className={`inline-block mt-2 px-3 py-1 rounded-full ${
            plan.textColor === 'text-brand-deepblue' ? 
            'bg-brand-deepblue/20' : 'bg-brand-light/20'
          } text-xs font-medium`}>
            Plano {plan.type}
          </div>
        </div>
      </div>
      
      {/* Corpo */}
      <div className="bg-gradient-to-br from-brand-navyblue to-brand-deepblue p-6 h-full">
        <p className="text-brand-paleblue mb-6 text-sm">
          {plan.description}
        </p>
        
        <ul className="mb-8 space-y-3">
          {plan.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <Check className="h-5 w-5 text-brand-lightblue" />
              </div>
              <span className="ml-3 text-brand-light text-sm">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
        
        <button
          onClick={onClick}
          className={`w-full group relative overflow-hidden ${
            plan.featured 
              ? 'bg-gradient-to-r from-brand-lightblue to-brand-paleblue text-brand-deepblue'
              : 'bg-gradient-to-r from-brand-mediumblue to-brand-softblue text-brand-light'
          } py-3 px-4 rounded-lg font-bebas text-lg tracking-wide shadow-lg transform hover:translate-y-[-2px] transition-all`}
        >
          QUERO SER SÓCIO
          <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-[45deg] group-hover:left-[100%] transition-all duration-700"></span>
        </button>
      </div>
    </div>
  );
};

export default MembershipCard;
