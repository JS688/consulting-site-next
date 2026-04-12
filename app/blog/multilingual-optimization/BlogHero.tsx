export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-black py-28 px-6 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_70%)]" />
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-5xl font-bold text-[#d4af37] tracking-tight">
          JulTech Blog
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Insights on AI visibility, multilingual optimization, and the future of intelligent search.
        </p>
      </div>
    </section>
  );
}
