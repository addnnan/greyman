import { motion } from "framer-motion";

export default function Contracting() {
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
            Services
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Project Contracting
          </h1>

          <p className="text-white/60 max-w-xl leading-relaxed">
            Structured execution and on-ground project coordination across Bahrain,
            ensuring compliance, efficiency, and operational clarity.
          </p>
        </motion.div>

        {/* Image Banner */}
        <div className="relative h-[400px] mb-20 overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300">
          <img
            src="contracting.webp"
            className="absolute inset-0 w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-black/60 hover:bg-black/40 transition-colors"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-6">
              What We Do
            </h2>

            <p className="text-white/60 leading-relaxed mb-6">
              We provide structured contracting solutions tailored for businesses
              operating in Bahrain. From project planning to execution oversight,
              we ensure seamless coordination and compliance at every stage.
            </p>

            <p className="text-white/60 leading-relaxed">
              Our approach focuses on precision, regulatory alignment, and efficient
              delivery — allowing your business to operate without friction.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-6">
              Key Capabilities
            </h2>

            <ul className="space-y-4 text-white/70">
              <li>Project coordination & execution</li>
              <li>Vendor & stakeholder management</li>
              <li>Regulatory compliance support</li>
              <li>Operational structuring</li>
              <li>Documentation & approvals</li>
            </ul>
          </motion.div>

        </div>

        {/* CTA */}
        <div className="mt-24 border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60">
            Looking to execute your next project with precision?
          </p>

          <a
            href="/#contact"
            className="px-8 py-4 bg-white text-black uppercase tracking-widest text-sm hover:bg-white/90 transition-colors"
          >
            Initiate Contact
          </a>
        </div>

      </div>
    </section>
  );
}