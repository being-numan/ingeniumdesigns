import React from 'react';
import { Check } from 'lucide-react';

const FeaturePoint = ({ children }) => (
  <div className="flex items-start gap-3">
    <Check className="w-5 h-5 text-[#e6a573] mt-1 flex-shrink-0" />
    <p className="text-gray-300 text-sm leading-relaxed">{children}</p>
  </div>
);

const ModernStyleSection = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-white font-light mb-4">
            Why choose us
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            We understand that the plantation is hard to maintain so we are here to help you in maintenance and care.
          </p>
        </div>

        {/* Hardscaping Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="/src/assets/hardscaping.jpg"
              alt="Hardscaping"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-8">
            <h3 className="text-3xl text-white font-light">Hardscaping</h3>
            <div className="space-y-4">
              <FeaturePoint>
                Skilled project managers are adept in hardscaping to deliver exceptional results for your outdoor projects.
              </FeaturePoint>
              <FeaturePoint>
                We provide accurate estimations prior to execution, ensuring the construction of durable and cost-effective structures for your project.
              </FeaturePoint>
              <FeaturePoint>
                We use only premium quality materials throughout the execution process, guaranteeing 100% excellence in every aspect of your project.
              </FeaturePoint>
              <FeaturePoint>
                Full warranty on hardscaping structures (T&C apply) - pergolas, flooring, water features, outdoor lights, and more - for lasting satisfaction.
              </FeaturePoint>
            </div>
          </div>
        </div>

        {/* Softscaping Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <h3 className="text-3xl text-white font-light">Softscaping</h3>
            <div className="space-y-4">
              <FeaturePoint>
                We offer complimentary visits to ensure the optimal well-being of your beloved plants through diligent health monitoring.
              </FeaturePoint>
              <FeaturePoint>
                Our skilled horticulture team excels in soft scaping, with vast experience in creating captivating outdoor spaces that inspire and harmonize.
              </FeaturePoint>
              <FeaturePoint>
                Through meticulous site analysis, we propose plants that perfectly match your surroundings, ensuring optimal growth and aesthetic harmony.
              </FeaturePoint>
              <FeaturePoint>
                We conduct thorough soil health analysis and enhance soil quality as needed, ensuring a nourishing foundation for your plants to thrive and flourish.
              </FeaturePoint>
              <FeaturePoint>
                We offer customized, natural fertilizers that effectively nourish your plants, promoting their health and sustainability.
              </FeaturePoint>
              <FeaturePoint>
                We guarantee complimentary visits after the handover to ensure ongoing care and support for your plants, maintaining their health and beauty.
              </FeaturePoint>
              <FeaturePoint>
                Prompt resolutions to any issues are assured, ensuring swift solutions for optimal plant care and your peace of mind.
              </FeaturePoint>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] order-1 md:order-2">
            <img
              src="/src/assets/softscape.jpg"
              alt="Softscaping"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernStyleSection;