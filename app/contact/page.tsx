import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#02040a] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <video
          src="/help.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center opacity-[0.24]"
        />
        <div className="absolute inset-0 bg-black/62" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.16),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.12),transparent_28%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 lg:px-12 lg:py-16">
        <ContactForm />
      </div>
    </main>
  );
}

