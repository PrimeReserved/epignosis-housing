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

  // Duplicate for seamless loop
  const duplicatedApartments = [...apartments, ...apartments];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        className="relative px-6 pt-32 pb-0 lg:pt-36 lg:pb-0 min-h-[70vh] flex items-end overflow-hidden"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dfwty72r9/image/upload/v1769587433/prop-image-2_dhtfyj.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-[#e8e5ff]/85 to-white/95"></div>
        
        {/* Bottom white fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

        <div className="relative z-10 max-w-5xl mx-auto w-full pb-4">
          <div className="border-l-2 border-[#0B1F3B] pl-10">
            {/* Vision */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 tracking-wide drop-shadow-lg">OUR VISION</h2>
              <p className="text-xl md:text-xl lg:text-2xl font-normal text-black leading-relaxed drop-shadow-xs">
                To become the preferred housing partner for contractors, project managers, and relocation specialists by setting the standard for quality, consistency, and long-term living experiences.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 tracking-wide drop-shadow-lg">OUR MISSION</h2>
              <p className="text-xl md:text-xl lg:text-2xl font-normal text-black leading-relaxed drop-shadow-xs">
                To provide reliable, comfortable, and flexible long-term accommodation solutions that support professionals, families, and project teams throughout extended assignments and relocations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-scrolling Images Section */}
      <section className="py-20 relative bg-white overflow-hidden">
        {/* Fade overlays on left and right */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="scroll-container">
          <div className="scroll-content">
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

        <style jsx>{`
          .scroll-container {
            overflow: hidden;
            width: 100%;
          }
          
          .scroll-content {
            display: flex;
            gap: 24px;
            align-items: center;
            animation: scroll 20s linear infinite;
          }
          
          /* ADJUST SPEED HERE: Change the 60s value
             - Higher value = slower (e.g., 80s, 100s)
             - Lower value = faster (e.g., 40s, 30s)
          */
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .scroll-content:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
    </div>
  );
}