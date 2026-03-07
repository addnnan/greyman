import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formspree.io/f/xykdvvjl",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );
            if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setLoading(false);
  };
  return (
<section
  id="contact"
  className="py-32 bg-black relative border-t border-white/5"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-6 flex items-center gap-4">
          <div className="h-[1px] w-8 bg-white/30" />
          <span className="uppercase tracking-widest text-xs font-medium text-white/50">
            Contact
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-semibold uppercase tracking-tight text-white mb-8">
          Start the Conversation
        </h2>

        <p className="text-white/50 font-light text-lg mb-12 max-w-md leading-relaxed">
          Whether you are establishing a new venture or optimizing an
          existing operation, our team provides structured guidance and
          confidential advisory support across Bahrain.
        </p>

        <div className="space-y-8 border-t border-white/10 pt-8">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2">
              Email
            </h4>
            <p className="text-xl text-white">info@greymanbh.com</p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2">
              Location
            </h4>
            <p className="text-xl text-white">
              Manama, Kingdom of Bahrain
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2">
              Phone
            </h4>
            <p className="text-xl text-white">+973 37915515</p>
          </div>
        </div>
      </motion.div>

      {/* RIGHT SIDE FORM */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-[#050505] p-8 md:p-12 border border-white/10"
      >
        <form className="space-y-8 flex flex-col h-full" onSubmit={handleSubmit}>

          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-widest text-white/60 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name..."
              className="w-full bg-transparent border-b border-white/20 pb-4 pt-2 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors font-light"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-widest text-white/60 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="abc@gmail.com"
              className="w-full bg-transparent border-b border-white/20 pb-4 pt-2 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors font-light"
            />
          </div>

          <div className="space-y-2 flex-grow">
            <label className="block text-xs uppercase tracking-widest text-white/60 font-semibold">
              Project Overview
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Briefly describe your business requirements..."
              className="w-full bg-transparent border-b border-white/20 pb-4 pt-2 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors resize-none font-light"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-5 bg-white text-black font-semibold uppercase tracking-widest text-sm hover:bg-white/90 transition-colors mt-4 cursor-pointer"
          >
            {loading ? "Sending..." : "Submit Inquiry"}

          </button>
              {/* Status Messages */}
      {status === "success" && (
        <p className="text-green-400 text-sm">
          Message sent successfully.
        </p>
      )}

      {status === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please try again.
        </p>
      )}
        </form>
      </motion.div>

    </div>
  </div>
</section>
  );
}