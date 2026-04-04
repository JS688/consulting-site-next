import Hero from "./components/Hero";
// import Testimonials from "./components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <Testimonials /> */}
      {/* Client testimonial section centered above the footer */}
      <section className="relative flex min-h-[40vh] items-center bg-black py-0 md:py-0 mt-0 mb-16">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Testimonial in goldish frame, tight 3 lines, same height/width as video */}
            <div className="flex flex-col justify-center text-center lg:text-left h-full w-full">
              <div className="flex items-center h-full w-full">
                <div className="overflow-hidden rounded-3xl border-2 border-[rgb(245,197,24)] bg-black flex flex-col justify-center h-full w-full max-w-[560px] min-h-[220px] p-6">
                  <div className="flex justify-center mb-2">
                    {/* 5 gold stars */}
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-[rgb(245,197,24)]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                    ))}
                  </div>
                  <p className="text-base md:text-lg font-light italic text-gray-100 leading-snug break-words text-center" style={{ lineHeight: '1.3', minHeight: '3.9em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    "Julia and her team delivered a website that exceeded our expectations. The process was smooth, and the results speak for themselves. Highly recommend!"
                  </p>
                  <div className="mt-4 text-center">
                    <p className="text-[rgb(245,197,24)] text-sm font-semibold">Natalia Hodge</p>
                    <p className="text-gray-500 text-xs">Client</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Animation */}
            <div className="flex justify-center lg:justify-end">
              <div className="overflow-hidden rounded-3xl border-2 border-black">
                <video
                  src="/logos/client.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full max-w-[560px] h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
