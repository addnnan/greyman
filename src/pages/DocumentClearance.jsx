import { motion } from "framer-motion";

export default function DocumentClearance() {
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
            Administrative Support
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Document Clearance
          </h1>

          <p className="text-white/60 max-w-xl leading-relaxed">
            Efficient processing and clearance of legal and corporate
            documentation across Bahrain, ensuring accuracy, speed,
            and full regulatory compliance.
          </p>
        </motion.div>

        {/* Image Banner */}
        <div className="relative h-[400px] mb-20 overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300">
          <img
            src="/document-clr.webp"
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
              Streamlined Processing
            </h2>

            <p className="text-white/60 leading-relaxed mb-6">
              We handle the end-to-end clearance of documents required
              for business operations, minimizing delays and ensuring
              smooth processing through all necessary authorities.
            </p>

            <p className="text-white/60 leading-relaxed">
              Our structured workflow ensures that documentation is
              submitted accurately and processed efficiently,
              reducing operational friction.
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
              <li>Document submission & tracking</li>
              <li>Government approvals & clearances</li>
              <li>Legal documentation processing</li>
              <li>License & permit documentation</li>
              <li>Renewals & amendments</li>
            </ul>
          </motion.div>

        </div>

        {/* CTA */}
        <div className="mt-24 border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60">
            Need fast and reliable document processing support?
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