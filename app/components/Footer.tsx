export default function Footer() {
  return (
    <>
      {/* Gold Divider Line */}
      <div className="w-full h-px bg-yellow-500/30"></div>

      <footer className="w-full border-t border-neutral-800 py-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-3">

          {/* Contact Icons */}
          <div className="flex items-center gap-5 opacity-80">
            {/* Email */}
            <a
              href="mailto:ai@jul-tech.com"
              className="hover:text-yellow-400 transition"
            >
              <i className="ri-mail-line text-lg"></i>
            </a>

            {/* Phone */}
            <a
              href="#"
              className="hover:text-yellow-400 transition"
            >
              <i className="ri-phone-line text-lg"></i>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/julia-sokolsky/"
              className="hover:text-yellow-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-linkedin-fill text-lg"></i>
            </a>
          </div>

          {/* Legal */}
          <p className="text-xs text-gray-500 text-center">
            © 2026 JulTech AI —{" "}
            <a href="/legal/privacy" className="hover:text-yellow-400 transition">Privacy</a> •{" "}
            <a href="/legal/terms" className="hover:text-yellow-400 transition">Terms</a>
          </p>

        </div>
      </footer>
    </>
  );
}
