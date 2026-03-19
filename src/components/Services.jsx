import { motion } from "framer-motion";
import {Link} from 'wouter'


export function Services() {
  const services = [
    {
      id: 1,
      url: "contracting",
      image: "/contracting.webp",
      title: "Contracting",
      desc: "Structured execution and project coordination",
    },
    {
      id: 2,
      url: "consultancy",
      image: "/consultancy.webp",
      title: "Business Consultancy",
      desc: "Strategic advisory and structured planning to establish and scale businesses in Bahrain.",
    },
    {
      id: 3,
      url: "pro-services",
      image: "/PRO-1.webp",
      title: "PRO Services",
      desc: "Government liaison and documentation support ensuring regulatory compliance.",
    },
    {
      id: 4,
      url: "financial-services",
      image: "/financial-service.webp",
      title: "Financial Services",
      desc: "Accounting, bookkeeping, VAT registration, and financial advisory solutions.",
    },
    {
      id: 5,
      url: "hr-consultancy",
      image: "/HR.webp",
      title: "HR Consultancy",
      desc: "Workforce planning, recruitment advisory, and HR policy structuring.",
    },
    {
      id: 6,
      url: "document-clearance",
      image: "/document-clr.webp",
      title: "Document Clearance",
      desc: "Efficient processing of legal and corporate documentation.",
    },
    {
      id: 7,
      url: "visa-services",
      image: "/visa-service.webp",
      title: "Visa Services",
      desc: "Investor, employment, and residency visa assistance.",
    },
    {
      id: 8,
      url: "travel-tourism",
      image: "/tour-travel.webp",
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
            <Link to={`/${service.url}`} key={service.id}>
            <motion.div
              key={service.title}
              initial={{ opacity: 1, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative border border-white/10 p-8 bg-black/30 hover:bg-black hover:border-white/30 transition-all duration-300 h-full"
            >
              {/* Background Image */}


              <img
                src={service.image}
                className="z-0 absolute inset-0 w-full h-full object-cover opacity-30  transition-transform duration-500 "
                alt=""
              />

              {/* Dark Overlay */}
             


              <h1 className=" z-20 text-2xl font-bold mb-4 text-white/20 ">({service.id})</h1>
              
              <h3 className=" z-20 text-2xl  font-medium mb-4 font-semibold text-white ">
                {service.title}
              </h3>
              <p className=" z-20 text-white/70 text-sm leading-relaxed font-semibold">
                {service.desc}
              </p>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}