import { useState } from 'react';
import { membershipPlans } from './arrays';
import MembershipCard from './components/MembershipCard';
import MembershipBenefits from './components/MembershipBenefits';
import MembershipFAQ from './components/MembershipFAQ';
import MembershipForm from './components/MembershipForm';

const MembershipScreen = () => {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-deepblue via-brand-navyblue to-brand-mediumblue">
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-brand-softblue blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-brand-lightblue blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-brand-navyblue rounded-2xl mb-6 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-brand-paleblue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"></path>
                <path d="M16 6h4v4"></path>
              </svg>
            </div>
            <h1 className="text-5xl font-bebas text-shadow-md text-brand-light mb-4 tracking-wide">
              SEJA <span className="text-brand-lightblue">SÓCIO</span> BULLDOGS
            </h1>
            <p className="text-xl text-brand-paleblue mb-8 max-w-2xl mx-auto">
              Vantagens exclusivas, descontos em eventos e produtos, e muito mais! 🏆
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-softblue to-transparent mx-auto"></div>
          </div>

          {/* Planos de Sócio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {membershipPlans.map((plan, index) => (
              <MembershipCard 
                key={index} 
                plan={plan} 
                onClick={() => setSelectedPlan(plan)}
              />
            ))}
          </div>

          {/* Benefícios */}
          <MembershipBenefits />

          {/* FAQ */}
          <MembershipFAQ />
        </div>
      </section>

      {/* Modal de inscrição */}
      {selectedPlan && (
        <MembershipForm 
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)} 
        />
      )}
    </div>
  );
};

export default MembershipScreen;
