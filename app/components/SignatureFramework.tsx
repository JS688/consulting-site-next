"use client";

const steps = [
  {
    id: "01",
    title: "Discover",
    subtitle: "Audit and clarity",
  },
  {
    id: "02",
    title: "Design",
    subtitle: "Architecture and strategy",
  },
  {
    id: "03",
    title: "Deploy",
    subtitle: "Build and launch",
  },
  {
    id: "04",
    title: "Optimize",
    subtitle: "Insights and improvement",
  },
];

export default function SignatureFramework() {
  return (
    <section className="bg-black text-white" style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Grid Layout: Left Text + Right Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* LEFT SIDE: Text */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.26em]"
              style={{ color: "rgb(245,197,24)", marginBottom: "16px" }}
            >
              OUR PROCESS
            </p>
            <h2
              className="font-semibold leading-tight"
              style={{ fontSize: "32px", marginBottom: "16px" }}
            >
              The JulTech Intelligence Framework™
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              A simple system that turns your website into a smart growth engine.
            </p>
          </div>

          {/* RIGHT SIDE: Cards in Row */}
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {steps.map((step) => (
              <div
                key={step.id}
                style={{
                  width: "220px",
                  padding: "24px",
                  borderRadius: "16px",
                  background: "#0b0b0b",
                  border: "1px solid rgba(255,255,255,0.08)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(251,191,36,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Card Number */}
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "rgb(245,197,24)",
                    marginBottom: "8px",
                  }}
                >
                  {step.id}
                </div>

                {/* Card Title */}
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginBottom: "8px",
                    color: "white",
                  }}
                >
                  {step.title}
                </h3>

                {/* Card Subtitle */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {step.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
