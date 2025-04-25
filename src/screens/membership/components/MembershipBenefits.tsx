import { membershipBenefits } from '../arrays';

const MembershipBenefits = () => {
  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bebas text-shadow-md text-brand-light mb-4 tracking-wide">
          VANTAGENS DE SER <span className="text-brand-lightblue">SÓCIO</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-softblue to-transparent mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {membershipBenefits.map((benefit, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-brand-navyblue to-brand-deepblue p-6 rounded-xl border border-brand-softblue/20 transform transition-all hover:translate-y-[-5px] group"
          >
            <div className="bg-gradient-to-br from-brand-blue to-brand-mediumblue w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bebas text-shadow text-brand-light mb-2">
              {benefit.title}
            </h3>
            <p className="text-brand-paleblue text-sm">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MembershipBenefits;
