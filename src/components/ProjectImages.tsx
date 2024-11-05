const IMAGES = [
  "/cable-installation.jpg",    // Image of cable reel and workers
  "/equipment-setup.jpg",       // Image of workers with equipment
  "/concrete-blocks.jpg",       // Image of concrete blocks in trench
  "/control-panel.jpg"         // Image of control panel installation
];

const ProjectImages = () => {
  return (
    <section className="min-h-[30vh] bg-slate-800 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {IMAGES.map((src, index) => (
            <div 
              key={index} 
              className="relative h-48 overflow-hidden rounded-lg group transition-all duration-500 hover:scale-150 hover:z-10"
            >
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out z-10" />
              <img
                src={src}
                alt={`Construction project phase ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-1000 ease-in-out transform will-change-transform group-hover:object-contain group-hover:z-20 group-hover:relative motion-safe:group-hover:animate-morph"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectImages;