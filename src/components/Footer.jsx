import React from "react";

const Footer = () => {
  const quickLinks = [
    "Home",
    "About",
    "Services",
    "Partnership",
    "Packages",
    "Meet Our Team",
    "Contact Us",
  ];
  const services = [
    "5-Day Intensive",
    "Test Prep",
    "Admissions Service",
    "Scholarships",
    "Internship",
    "Events",
    "FAQs",
  ];
  const countries = [
    "Saudi Arabia",
    "UAE",
    "Qatar",
    "Oman",
    "Kuwait",
    "Bahrain",
  ];
  const moreCountries = ["China", "India", "South Korea"];

  return (
    <footer className="relative bg-gradient-to-b  to-transparent from-blue-800 text-white py-10 px-6">
      {/* Background Vector */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url('/path-to-your-uploaded-image.png')`, // Replace with actual image path
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Quick Links */}
        <div>
          <h2 className="font-bold text-lg mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index} className="hover:underline cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="font-bold text-lg mb-4">Services</h2>
          <ul className="space-y-2">
            {services.map((service, index) => (
              <li key={index} className="hover:underline cursor-pointer">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Countries */}
        <div>
          <h2 className="font-bold text-lg mb-4">Countries</h2>
          <ul className="space-y-2">
            {countries.map((country, index) => (
              <li key={index} className="hover:underline cursor-pointer">
                {country}
              </li>
            ))}
          </ul>
          <ul className="mt-4 space-y-2">
            {moreCountries.map((country, index) => (
              <li key={index} className="hover:underline cursor-pointer">
                {country}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h2 className="font-bold text-lg mb-4">Subscribe Our Newsletter</h2>
          <div className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-l-md outline-none text-black"
            />
            <button className="bg-blue-500 px-4 py-2 rounded-r-md">
              <img src="./VectorSend.png" alt="Send" className="h-5" />
            </button>
          </div>
          <div className="flex space-x-4">
            <img src="./SocialIcons1.png" alt="Facebook" className="h-6" />
            <img src="./SocialIcons2.png" alt="Instagram" className="h-6" />
            <img src="./Frame246.png" alt="YouTube" className="h-6" />
            <img src="./Frame247.png" alt="TikTok" className="h-6" />
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-400" />

      <div className="container mx-auto flex justify-between text-sm">
        <div>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:underline">
            Legal Terms
          </a>
        </div>
        <p>&copy; 2024 College Mastermind. All rights reserved.</p>
      </div>

      <img src="./VectorFooter.png" alt="" className="absolute bottom-0 z-10"/>
    </footer>
  );
};

export default Footer;
