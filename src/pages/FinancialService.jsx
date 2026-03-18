import { motion } from "framer-motion";

export default function FinancialServices() {
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
            Financial Advisory
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Financial Services
          </h1>

          <p className="text-white/60 max-w-xl leading-relaxed">
            Structured financial solutions including accounting, VAT compliance,
            and advisory services tailored for businesses operating in Bahrain.
          </p>
        </motion.div>

        {/* Image Banner */}
        <div className="relative h-[400px] mb-20 overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300">
          <img
            src="/financial-service.webp"
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
              Financial Structuring
            </h2>

            <p className="text-white/60 leading-relaxed mb-6">
              We provide comprehensive financial support designed to ensure
              transparency, compliance, and operational efficiency across your
              business operations.
            </p>

            <p className="text-white/60 leading-relaxed">
              Our approach focuses on aligning financial systems with Bahrain’s
              regulatory framework, enabling sustainable and compliant growth.
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
              <li>Accounting & bookkeeping</li>
              <li>VAT registration & filing</li>
              <li>Financial reporting</li>
              <li>Payroll management</li>
              <li>Financial advisory & planning</li>
            </ul>
          </motion.div>

        </div>

        {/* CTA */}
        <div className="mt-24 border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60">
            Looking to streamline your financial operations?
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