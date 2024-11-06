const IMAGES = [
  "/images/projects/cable-installation.jpg",
  "/images/projects/equipment-setup.jpg",
  "/images/projects/concrete-blocks.jpg",
  "/images/projects/control-panel.jpg"
];

const ProjectImages = () => {
  return (
    <section className="min-h-[30vh] bg-slate-800 p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Projects Photo Library</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {IMAGES.map((src, index) => (
            <div 
              key={index} 
              className="relative h-48 overflow-hidden rounded-lg group"
            >
              <img
                src={src}
                alt={`Construction project phase ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectImages;