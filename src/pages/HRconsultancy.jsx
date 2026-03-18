import { motion } from "framer-motion";

export default function HrConsultancy() {
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
            Workforce Solutions
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            HR Consultancy
          </h1>

          <p className="text-white/60 max-w-xl leading-relaxed">
            Structured human resource solutions designed to build, manage,
            and optimize your workforce in alignment with Bahrain’s labor regulations.
          </p>
        </motion.div>

        {/* Image Banner */}
        <div className="relative h-[400px] mb-20 overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300">
          <img
            src="/HR.webp"
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
              Workforce Structuring
            </h2>

            <p className="text-white/60 leading-relaxed mb-6">
              We assist businesses in building efficient workforce structures
              that align with operational goals and regulatory requirements.
            </p>

            <p className="text-white/60 leading-relaxed">
              Our approach ensures clarity in roles, optimized team performance,
              and compliance with Bahrain’s labor laws.
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
              <li>Workforce planning & structuring</li>
              <li>Recruitment advisory</li>
              <li>HR policies & documentation</li>
              <li>Employee lifecycle management</li>
              <li>Labor law compliance support</li>
            </ul>
          </motion.div>

        </div>

        {/* CTA */}
        <div className="mt-24 border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60">
            Looking to build a structured and compliant workforce?
          </p>

          <a
            href="/#contact"
            className="px-8 py-4 bg-white text-black uppercase tracking-widest text-sm hover:bg-white/90 transition-colors"
          >
            Initiate Consultation
          </a>
        </div>

      </div>
    </section>
  );
}