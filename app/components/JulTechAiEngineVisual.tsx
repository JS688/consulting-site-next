export default function JulTechAiEngineVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        src="/anim.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      />
    </div>
  );
}