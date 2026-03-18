import { ArrowUpRight,Mail,Phone,MapPin,Instagram,MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand Section */}
          <div className="lg:col-span-2">
            <span className="font-semibold text-3xl tracking-[0.3em] uppercase text-white mb-6 block">
              GREYMAN
            </span>

            <p className="text-white/50 max-w-md font-light leading-relaxed">
              A Bahrain-based business management consultancy delivering
              structured advisory, compliance, and operational solutions
              for investors and enterprises.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="uppercase tracking-widest text-md text-white mb-6 font-semibold">
              Navigation
            </h4>

            <ul className="space-y-4">
              <li>
                <a
                  href="/#about"
                  className="text-white/50 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  About
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </li>

              <li>
                <a
                  href="/#services"
                  className="text-white/50 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  Services
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </li>

              <li>
                <a
                  href="/#contact"
                  className="text-white/50 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  Contact
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / Connect */}
          <div>
            <h4 className="uppercase tracking-widest font-semibold text-md text-white mb-6">
              Connect
            </h4>

            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@greymanbh.com"
                  className="text-white/50 hover:text-white transition-colors flex items-center gap-1 group"
                >
                <Mail className="w-4 h-4 mr-1 inline-block" />  info@greymanbh.com
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </li>
              
              <li>
                <a
                  href="https://wa.me/97337915515?text=Hi"
                  className="text-white/50 hover:text-white transition-colors flex items-center gap-1 group"
                >
                <MessageCircle className="w-4 h-4 mr-1 inline-block" />  WhatsApp
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/greyman.bh/"
                  className="text-white/50 hover:text-white transition-colors flex items-center gap-1 group"
                >

              <Instagram className="w-4 h-4 mr-1 inline-block" />  Instagram
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </li>

              <li className="text-white/50">
              <a href="tel:+97337915515" className="hover:text-white transition-colors flex items-center gap-1 group">
               <Phone className="w-4 h-4 mr-1 inline-block" /> +973 37915515
               <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
               </a>
              </li>

              <li className="text-white/50">
              <MapPin className="w-4 h-4 mr-1 inline-block" />  Manama, Bahrain
              </li>

              
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 uppercase tracking-widest">
          <p>
            © {new Date().getFullYear()} GreyMan Consultancy. All Rights Reserved.
          </p>

          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}