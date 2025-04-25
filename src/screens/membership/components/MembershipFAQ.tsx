import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { membershipFAQ } from '../arrays';

const MembershipFAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bebas text-shadow-md text-brand-light mb-4 tracking-wide">
          PERGUNTAS <span className="text-brand-lightblue">FREQUENTES</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-softblue to-transparent mx-auto"></div>
      </div>

      <div className="max-w-3xl mx-auto">
        {membershipFAQ.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleItem(index)}
              className={`w-full text-left bg-gradient-to-r ${
                openItem === index 
                  ? 'from-brand-mediumblue to-brand-softblue'
                  : 'from-brand-navyblue to-brand-deepblue hover:from-brand-blue hover:to-brand-mediumblue'
              } p-5 rounded-lg flex justify-between items-center transition-all border border-brand-softblue/20`}
            >
              <span className="font-bebas text-lg text-shadow text-brand-light tracking-wide">
                {item.question}
              </span>
              {openItem === index ? (
                <ChevronUp className="h-5 w-5 text-brand-light" />
              ) : (
                <ChevronDown className="h-5 w-5 text-brand-light" />
              )}
            </button>
            
            {openItem === index && (
              <div className="bg-brand-deepblue/50 p-5 rounded-b-lg border-x border-b border-brand-softblue/20 text-brand-paleblue animate-fadeIn">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MembershipFAQ;
