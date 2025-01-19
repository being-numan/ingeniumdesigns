import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import design2 from "../../assets/design2.png";
import design3 from "../../assets/design3.png";
import design4 from "../../assets/design4.png";
import design5 from "../../assets/design5.png";
import design6 from "../../assets/design6.png";
import design7 from "../../assets/design7.png";
import design8 from "../../assets/design8.png";
import design9 from "../../assets/design9.png";


const collections = [
  {
    id: 1,
    name: "",
    image: design2,
    style: "col-span-1",
  },
  {
    id: 2,
    name: "",
    image: design3,
    style: "col-span-2",
  },
  {
    id: 3,
    name: "",
    image: design4,
    style: "col-span-1",
  },
  {
    id: 4,
    name: "",
    image: design5,
    style: "col-span-1",
  },
  {
    id: 5,
    name: " ",
    image: design6,
    style: "col-span-1",
  },
  {
    id: 6,
    name: "",
    image: design7,
    style: "col-span-1",
  },
  {
    id: 7,
    name: "",
    image: design8,
    style: "col-span-1",
  },
  {
    id: 8,
    name: "",
    image: design9,
    style: "col-span-1",
  },
];

const CollectionSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="min-h-screen bg-black py-20 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-white max-w-xl">
            Explore Our Proudly Collection
          </h2>
          <div className="text-right">
            {/* <button className="inline-flex items-center gap-2 text-white px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-all">
              <span>View More</span>
              <ArrowRight className="w-4 h-4" />
            </button> */}
            <p className="text-gray-400 mt-4 text-sm max-w-md ml-auto">
              Ingenium Designs. will showcase its vision of contemporary architecture,
              interior design trends.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {collections.map((item) => (
            <div
              key={item.id}
              className={`relative group cursor-pointer ${item.style}`}
              onClick={() => setSelectedImage(item)}
            >
              {/* Updated this div to ensure proper cover */}
              <div className="relative rounded-2xl w-full h-[300px]">
                {" "}
                {/* Fixed height instead of aspect ratio */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                <h3 className="text-white text-2xl font-light">{item.name}</h3>
                <ArrowRight className="w-6 h-6 text-white transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Size Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-[60%] rounded-2xl overflow-hidden"
            style={{ height: "70vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white z-10 bg-black/50 p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="w-full h-full">
              <img
                src={selectedImage.image}
                alt={selectedImage.name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CollectionSection;
