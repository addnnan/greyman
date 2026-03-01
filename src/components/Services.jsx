import { motion } from "framer-motion";

export function Services() {
  const services = [
    {
      title: "Contracting",
      desc: "Structured execution and project coordination",
    },
    {
      title: "Business Consultancy",
      desc: "Strategic advisory and structured planning to establish and scale businesses in Bahrain.",
    },
    {
      title: "PRO Services",
      desc: "Government liaison and documentation support ensuring regulatory compliance.",
    },
    {
      title: "Financial Services",
      desc: "Accounting, bookkeeping, VAT registration, and financial advisory solutions.",
    },
    {
      title: "HR Consultancy",
      desc: "Workforce planning, recruitment advisory, and HR policy structuring.",
    },
    {
      title: "Document Clearance",
      desc: "Efficient processing of legal and corporate documentation.",
    },
    {
      title: "Visa Services",
      desc: "Investor, employment, and residency visa assistance.",
    },
    {
      title: "Travel & Tourism",
      desc: "Corporate travel solutions and tourism advisory services.",
    },
    
  ];

  return (
    <section
      id="services"
      className="bg-neutral-950 text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-white/30" />
            <span className="uppercase tracking-[0.4em] text-xs text-white/60">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            (WHAT WE DO)
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 1, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-white/10 p-8 hover:border-white/30 transition-all duration-300"
            >
              
              <h3 className="text-lg font-medium mb-4 font-semibold">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}