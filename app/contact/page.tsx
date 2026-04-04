export default function ContactPage() {
  return <main className="max-w-content mx-auto px-6 py-16"> <h1>Contact</h1> </main>;
}
<section className="bg-black text-white py-20 px-6">
  <div className="max-w-2xl mx-auto text-center">

    {/* Section Title */}
    <h2 className="text-yellow-400 text-4xl font-extrabold tracking-tight mb-4">
      Contact
    </h2>

    {/* Subheadline */}
    <p className="text-gray-300 text-lg font-light mb-8">
      Let’s connect — we’d love to hear from you.
    </p>

    {/* Contact Icons */}
    <div className="flex justify-center items-center gap-6 text-2xl text-yellow-400">

      {/* Email */}
      <a href="mailto:sokolskyjulia@gmail.com" className="hover:text-yellow-300 transition">
        <i className="ri-mail-line" />
      </a>

      {/* Phone */}
      <a href="tel:8001234566" className="hover:text-yellow-300 transition">
        <i className="ri-phone-line" />
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
        <i className="ri-linkedin-fill" />
      </a>

    </div>

    {/* Footer Note */}
    <p className="text-gray-500 text-sm mt-8">
      Your data is safe and secure. This website is protected with industry-standard SSL encryption.
    </p>

  </div>
</section>

