import React from "react";

const WelcomeCard = () => (
  <div className="bg-white rounded-2xl p-6 mb-8 flex items-center justify-between shadow-sm">
    <div>
      <h1 className="text-2xl font-bold mb-2">Hello, Emma Shelton</h1>
      <p className="text-gray-600">
        Have a nice day and don't forget to take care of your health!
      </p>
      <a href="#" className="text-green-600 font-semibold mt-2 inline-block">
        Read more →
      </a>
    </div>
    <img
      src="/api/placeholder/200/200"
      alt="Doctor"
      className="w-32 h-32 object-cover rounded-full"
    />
  </div>
);

export default WelcomeCard;
