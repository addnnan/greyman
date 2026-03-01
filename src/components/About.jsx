import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="relative bg-neutral-950 text-white py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-white/30 " />
            <span className="uppercase tracking-[0.4em] text-xs text-white/60">
              About GreyMan
            </span>
            <div className="h-[1px] w-12 bg-white/30" />
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight uppercase ">
             Strategy and Execution
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-white/70 leading-relaxed text-lg"
          >
            <p>
              GreyMan is a Bahrain-based business management consultancy
              dedicated to helping entrepreneurs, investors, and organizations
              establish and scale their operations with confidence.
            </p>

            <p>
              We specialize in company formation, regulatory compliance,
              accounting support, and strategic advisory services tailored
              to the evolving business landscape of the Kingdom of Bahrain.
            </p>

            <p>
              Our approach combines structured planning with practical execution —
              ensuring every business decision is aligned with long-term growth
              and operational efficiency.
            </p>
          </motion.div>

          {/* Right Stats / Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            <div className="border border-white/10 p-8">
              <h3 className="text-3xl font-semibold mb-2">100+</h3>
              <p className="text-white/60 text-sm uppercase tracking-widest">
                Businesses Advised
              </p>
            </div>

            <div className="border border-white/10 p-8">
              <h3 className="text-3xl font-semibold mb-2">10+</h3>
              <p className="text-white/60 text-sm uppercase tracking-widest">
                Experience
              </p>
            </div>

            <div className="border border-white/10 p-8">
              <h3 className="text-3xl font-semibold mb-2">24/7</h3>
              <p className="text-white/60 text-sm uppercase tracking-widest">
                Client Support
              </p>
            </div>

            <div className="border border-white/10 p-8">
              <h3 className="text-3xl font-semibold mb-2">Bahrain</h3>
              <p className="text-white/60 text-sm uppercase tracking-widest">
                Market Expertise
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}