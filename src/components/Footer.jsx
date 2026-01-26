import React from "react";

const Footer = () => {  
  return (
    <div className="full">
      <div className="w-11/12 mx-auto py-16 space-y-3 flex flex-col justify-center items-center">
        {/*---------- logo */}
        <div className="h-6">
          <img
            className="h-6 object-cover"
            src="/auction-gallery.png"
            alt="logo"
          />
        </div>
        {/* ------------- */}
        <div>
          <p className="text-xl">Bid. Win. Own.</p>
        </div>
        {/* ----------- */}
        <ul className="flex items-center gap-6 pr-10">
          <li>Home</li>
          <li>Auction</li>
          <li>Catagories</li>
          <li>How to works</li>
        </ul>
        {/* ---------------------- */}
        <p>© 2025 AuctionHub. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

