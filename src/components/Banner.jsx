import React from "react";

const Banner = () => {
  return (
    <div
      className="w-full h-[400px] bg-cover bg-center text-white text-left"
      style={{ backgroundImage: "url('/Banner-2.jpg')" }}
    >
      <div className="w-11/12 mx-auto space-y-3 py-20">
        <h1 className="text-4xl">
          Bid on Unique Items from <br />
          Around the World
        </h1>
        <p className="text-sm opacity-60">
          Discover rare collectibles, luxury goods, and vintage <br />
          treasures in our curated auctions
        </p>
        <button className="btn rounded-3xl text-black">Explore Auctions</button>
      </div>
    </div>
  );
};

export default Banner;
