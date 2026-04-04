export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      business: "E‑commerce Founder",
      rating: 5,
      text: "JulTech transformed our outdated site into a modern, AI‑powered platform. Sales increased within weeks.",
    },
    {
      name: "David R.",
      business: "Consulting Agency",
      rating: 5,
      text: "The process was smooth, fast, and incredibly professional. Our new website feels premium and scalable.",
    },
    {
      name: "Lena K.",
      business: "Real Estate Group",
      rating: 5,
      text: "The AI‑driven features saved us hours every week. Truly business‑ready solutions.",
    },
  ];

  return (
    <section className="py-24 bg-black px-6">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
          Client Testimonials
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Real results from real businesses — built with modern AI technology.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-zinc-900/70 p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(245,197,24,0.15)]"
          >
            {/* Stars */}
            <div className="flex gap-1 text-yellow-400 text-xl mb-4">
              {"★".repeat(t.rating)}
            </div>

            {/* Text */}
            <p className="text-gray-300 leading-relaxed">{t.text}</p>

            {/* Name */}
            <div className="mt-6">
              <p className="text-white font-semibold">{t.name}</p>
              <p className="text-gray-400 text-sm">{t.business}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
