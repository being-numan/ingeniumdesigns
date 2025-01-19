import React from "react";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ title, description, image }) => (
  <div className="group relative overflow-hidden rounded-2xl">
    <div className="aspect-[4/3]">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-8">
      <h3 className="text-2xl font-light text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{description}</p>
      {/* <button className="flex items-center gap-2 text-white text-sm group">
        <span>Read More</span>
        <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
      </button> */}
    </div>
  </div>
);

const EngageSection = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Services Section */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl text-white font-light mb-6">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-3xl mb-12">
            Ingenium Designs is a full-service interior and landscape design
            firm offering exquisite and unique solutions to any project. Whether
            it's new construction, renovation, or landscape transformation, our
            experienced team is ready to bring your vision to life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              title="Interior Designs"
              description="Expert Interior and Landscape Design Services from Ingenium Designs"
              image="/src/assets/design11.jpg"
            />
            <ServiceCard
              title="Landscape Designs"
              description="Stylish Interiors and Beautiful Landscapes: Ingenium Designs Professional Services"
              image="/src/assets/design12.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngageSection;
