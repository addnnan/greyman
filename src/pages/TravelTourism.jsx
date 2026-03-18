import { motion } from "framer-motion";

export default function TravelTourism() {
  return (
    <section className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
            Mobility Solutions
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Travel & Tourism
          </h1>

          <p className="text-white/60 max-w-xl leading-relaxed">
            Corporate travel coordination and tourism advisory services,
            ensuring seamless mobility for business and leisure across Bahrain and beyond.
          </p>
        </motion.div>

        {/* Image Banner */}
        <div className="relative h-[400px] mb-20 overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300">
          <img
            src="/tour-travel.webp"
            className="absolute inset-0 w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-black/60 hover:bg-black/40 transition-colors"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-6">
              Travel Coordination
            </h2>

            <p className="text-white/60 leading-relaxed mb-6">
              We provide structured travel solutions tailored for corporate
              clients and individuals, ensuring smooth planning and execution.
            </p>

            <p className="text-white/60 leading-relaxed">
              From itinerary management to travel advisory, our services
              ensure efficiency, convenience, and reliability.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-6">
              Core Services
            </h2>

            <ul className="space-y-4 text-white/70">
              <li>Corporate travel planning</li>
              <li>Flight & accommodation coordination</li>
              <li>Travel documentation support</li>
              <li>Tourism advisory services</li>
              <li>End-to-end travel assistance</li>
            </ul>
          </motion.div>

        </div>

        {/* CTA */}
        <div className="mt-24 border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60">
            Planning business or leisure travel with precision?
          </p>

          <a
            href="/#contact"
            className="px-8 py-4 bg-white text-black uppercase tracking-widest text-sm hover:bg-white/90 transition-colors"
          >
            Initiate Request
          </a>
        </div>

      </div>
    </section>
  );
}