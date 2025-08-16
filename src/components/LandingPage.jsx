import React from "react";
import LandingHeader from "./LandingHeader";

const LandingPage = () => {
  return (
    <div className="bg h-full">
      <LandingHeader />

      <div className=" bg-black/30 text-white pt-32 pb-20 min-h-screen px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h4 className="text-4xl md:text-5xl font-bold">
              Welcome to Nature...Where you feel compassion for our natural
              creations
            </h4>
            <p className="text-lg">
              This world is not only for humans; it is for all living creatures
              like animals, birds, trees, plants, and even insects.
            </p>
            <p className="text-lg">
              So, come join us and experience the magic of Nature!
            </p>
            <p className="text-lg font-semibold">
              All living creatures are our neighbours. Taking care of them is
              our duty as humans. Believe in and protect nature.
            </p>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">
              Dive into the magic of nature
            </button>
          </div>

          {/* Image */}
          <div className="flex-1">
            <img
              src="src/assets/837b7495ecb490593ad550da6a8dd718.jpg"
              alt="Nature"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
