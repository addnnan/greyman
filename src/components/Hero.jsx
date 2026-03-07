import { motion } from "framer-motion";


export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 pt-24">
        {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src='/Bahrain.webp'
      alt=""
      className="w-full h-full object-cover grayscale"
    />
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/80 z-0"></div>
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-[28rem] h-[28rem] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 flex items-center justify-center gap-4"
        >
          <div className="h-[1px] w-12 bg-white/30" />
          <span className="uppercase tracking-[0.4em] text-xs text-white/60">
            Bahrain Business Consultancy
          </span>
          <div className="h-[1px] w-12 bg-white/30" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight text-white mb-8"
        >
          Strategic Business Solutions
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-12"
        >
          GreyMan provides professional company formation, compliance,
          accounting, and advisory services designed to help investors
          and entrepreneurs build sustainable businesses in the Kingdom of Bahrain.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-black text-sm uppercase tracking-[0.3em] font-medium hover:bg-white/90 transition-all duration-300"
          >
            Book Consultation
          </a>

          <a
            href="#services"
            className="px-8 py-4 border border-white/30 text-white text-sm uppercase tracking-[0.3em] hover:border-white transition-all duration-300"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}