'use client';

export default function AboutHero() {
  const apartments = [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700&h=500&fit=crop',
    'https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=700&h=500&fit=crop',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&h=500&fit=crop',
    'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=700&h=500&fit=crop',
  ];

  const duplicatedApartments = [...apartments, ...apartments];

  return (
    <div className="bg-white">

      {/* ─── About the Company ─── */}
      <section
        className="relative px-6 pt-28 pb-14 lg:pt-32 lg:pb-16 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0B1F3B 0%, #1a3a5c 30%, #0f2d4a 55%, #162d44 75%, #0B1F3B 100%)',
        }}
      >
        {/* Faint background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dfwty72r9/image/upload/v1770109717/photo-1676500684456-99f21e42a6fe_fqcijp.avif)',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            opacity: 0.18,
          }}
        />

        {/* Gradient wash on top of the image to keep it faint & blended */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(11,31,59,0.82) 0%, rgba(26,58,92,0.72) 35%, rgba(15,45,74,0.68) 60%, rgba(22,45,68,0.75) 80%, rgba(11,31,59,0.85) 100%)',
          }}
        />

        {/* Gold glow — top left */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[400px] opacity-[0.15] blur-3xl"
          style={{ background: 'radial-gradient(circle at 20% 30%, #c9a84c, transparent 70%)' }}
        />

        {/* Blue glow — bottom right */}
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[350px] opacity-[0.1] blur-3xl"
          style={{ background: 'radial-gradient(circle at 80% 70%, #7ba7d4, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          {/* Label */}
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-10 h-[1.5px] bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[11px] font-bold tracking-[3.5px] uppercase">About the Company</span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-[-1px] mb-4">
            Epignosis{' '}
            <span className="italic font-normal" style={{ color: '#c9a84c' }}>Housing</span>{' '}
            Co
          </h2>

          {/* Gold rule */}
          <div className="w-16 h-[2px] bg-[#c9a84c] mb-5" />

          {/* Body */}
          <p className="text-base md:text-[17px] text-white/80 leading-relaxed max-w-2xl">
            A forward-thinking accommodation provider delivering tailored housing solutions
            for long-term contractors, family relocators, and remote professionals. With a
            strategic focus on high-demand industries such as construction, infrastructure,
            and corporate relocations, we provide peaceful, fully furnished, home-like
            accommodation for individuals engaged in multi-year projects or extended assignments.
          </p>
        </div>
      </section>

      {/* ─── Vision & Mission ─── */}
      <section 
        className="relative px-6 pt-32 pb-0 lg:pt-36 lg:pb-0 min-h-[70vh] flex items-end overflow-hidden"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dfwty72r9/image/upload/v1769587433/prop-image-2_dhtfyj.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-[#e8e5ff]/85 to-white/95"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

        <div className="relative z-10 max-w-5xl mx-auto w-full pb-4">
          <div className="border-l-2 border-[#0B1F3B] pl-10">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 tracking-wide drop-shadow-lg">OUR VISION</h2>
              <p className="text-xl md:text-xl lg:text-2xl font-normal text-black leading-relaxed drop-shadow-xs">
                To become the preferred housing partner for contractors, project managers, and relocation specialists by setting the standard for quality, consistency, and long-term living experiences.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 tracking-wide drop-shadow-lg">OUR MISSION</h2>
              <p className="text-xl md:text-xl lg:text-2xl font-normal text-black leading-relaxed drop-shadow-xs">
                To provide reliable, comfortable, and flexible long-term accommodation solutions that support professionals, families, and project teams throughout extended assignments and relocations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Auto-scrolling Images ─── */}
      <section className="py-20 relative bg-white overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="ehc-scroll-container">
          <div className="ehc-scroll-content">
            {duplicatedApartments.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
                style={{
                  width: index % 4 === 0 ? '350px' : index % 4 === 1 ? '280px' : index % 4 === 2 ? '420px' : '320px',
                  height: index % 4 === 0 ? '380px' : index % 4 === 1 ? '340px' : index % 4 === 2 ? '320px' : '360px',
                }}
              >
                <img
                  src={image}
                  alt={`Apartment ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .ehc-scroll-container {
            overflow: hidden;
            width: 100%;
          }
          .ehc-scroll-content {
            display: flex;
            gap: 24px;
            align-items: center;
            animation: ehc-scroll 20s linear infinite;
          }
          @keyframes ehc-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .ehc-scroll-content:hover {
            animation-play-state: paused;
          }
        `}} />
      </section>
    </div>
  );
}