import { useState } from 'react';
import { X, Check } from 'lucide-react';

interface MembershipFormProps {
  plan: {
    id: string;
    name: string;
    type: string;
    price: number;
    color: string;
    benefits: string[];
    icon: string;
  };
  onClose: () => void;
}

const MembershipForm: React.FC<MembershipFormProps> = ({ plan, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [document, setDocument] = useState('');
  const [isStudent, setIsStudent] = useState(false);
  const [studentId, setStudentId] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Olá! Quero me tornar sócio Bulldogs:
- Plano: ${plan.name} (${plan.type})
- Valor: R$ ${plan.price.toFixed(2)}
- Nome: ${name}
- E-mail: ${email}
- Telefone: ${phone}
- Documento: ${document}
${isStudent ? `- Aluno FATEC: Sim\n- RA: ${studentId}` : '- Aluno FATEC: Não'}`;

    const whatsappUrl = `https://wa.me/5511993288916?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="relative bg-gradient-to-br from-brand-navyblue to-brand-deepblue rounded-xl max-w-2xl w-full p-6 shadow-2xl border border-brand-softblue/30 overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-paleblue hover:text-brand-light transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center mb-8">
          <div className="bg-gradient-to-r from-brand-mediumblue to-brand-softblue w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-4">
            {plan.icon}
          </div>
          <div>
            <h2 className="text-2xl font-bebas text-shadow text-brand-light">
              PLANO {plan.name}
            </h2>
            <p className="text-brand-paleblue">
              {plan.type} - R$ {plan.price.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="bg-brand-deepblue/30 p-4 rounded-lg mb-6 border border-brand-softblue/20">
          <h3 className="text-lg font-bebas text-brand-light mb-2">BENEFÍCIOS INCLUSOS:</h3>
          <ul className="space-y-2">
            {plan.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <Check className="h-4 w-4 text-brand-lightblue mr-2" />
                <span className="text-brand-paleblue text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-brand-paleblue mb-1">Nome Completo</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-brand-deepblue/50 border border-brand-softblue/30 text-brand-light focus:outline-none focus:border-brand-lightblue"
            />
          </div>

          <div>
            <label className="block text-brand-paleblue mb-1">E-mail</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-brand-deepblue/50 border border-brand-softblue/30 text-brand-light focus:outline-none focus:border-brand-lightblue"
            />
          </div>

          <div>
            <label className="block text-brand-paleblue mb-1">Telefone (WhatsApp)</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-brand-deepblue/50 border border-brand-softblue/30 text-brand-light focus:outline-none focus:border-brand-lightblue"
            />
          </div>

          <div>
            <label className="block text-brand-paleblue mb-1">CPF</label>
            <input
              type="text"
              required
              value={document}
              onChange={(e) => setDocument(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-brand-deepblue/50 border border-brand-softblue/30 text-brand-light focus:outline-none focus:border-brand-lightblue"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="isStudent"
              checked={isStudent}
              onChange={(e) => setIsStudent(e.target.checked)}
              className="rounded border-brand-softblue/30 bg-brand-deepblue/50"
            />
            <label htmlFor="isStudent" className="text-brand-paleblue">
              Sou aluno da FATEC-SP
            </label>
          </div>

          {isStudent && (
            <div>
              <label className="block text-brand-paleblue mb-1">RA (Registro Acadêmico)</label>
              <input
                type="text"
                required
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-brand-deepblue/50 border border-brand-softblue/30 text-brand-light focus:outline-none focus:border-brand-lightblue"
              />
            </div>
          )}

          <div className="pt-4 border-t border-brand-softblue/20">
            <button
              type="submit"
              className="w-full bg-brand-lightblue text-brand-deepblue font-bebas text-lg py-3 rounded-lg hover:bg-brand-paleblue transition-colors group relative overflow-hidden"
            >
              <span className="relative z-10">CONTINUAR NO WHATSAPP</span>
              <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-[45deg] group-hover:left-[100%] transition-all duration-700"></span>
            </button>
            <p className="text-brand-paleblue/60 text-xs text-center mt-3">
              Ao continuar, você será redirecionado para o WhatsApp para finalizar o processo de inscrição.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MembershipForm;
