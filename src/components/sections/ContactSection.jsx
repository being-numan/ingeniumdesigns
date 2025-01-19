import React, { useState } from "react";
import { MapPin, Phone, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiry: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section - Map & Contact Info */}
          <div className="space-y-8">
            {/* Map */}
            <div className="rounded-xl overflow-hidden h-[300px] bg-neutral-900">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9953215989817!2d77.60840317573916!3d12.908021987401494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1503a277c007%3A0x9dca9d4a928d3428!2sIngenium%20designs%3A%20Transforming%20spaces%20and%20enhancing%20lives%20-%20Landscaping%20designs%20In%20Bangalore!5e0!3m2!1sen!2sin!4v1737268491513!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale"
              ></iframe>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-white text-xl font-light">Visit Us</h3>
                <p className="text-gray-400 flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>
                    776, 14th Cross, 16th Main Rd, BTM 2nd Stage,
                    <br />
                    Bengaluru, Karnataka 560076
                  </span>
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-white text-xl font-light mb-2">
                    Call Us
                  </h3>
                  <a
                    href="tel:+919876543210"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    +91 8431213752
                  </a>
                </div>

                <div>
                  <h3 className="text-white text-xl font-light mb-2">
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/918431213752"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    +91 8431213752
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-[#444444] rounded-xl p-8">
            <h2 className="text-3xl text-white font-light mb-8">
              Get in touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="enquiry"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Enquiry for?
                </label>
                <input
                  type="text"
                  id="enquiry"
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
