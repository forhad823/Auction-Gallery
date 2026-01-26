import React from "react";
import { FaRegBell } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center bg-base-100  w-11/12 mx-auto">
        <div className="">
          <img
            className="h-6 object-cover"
            src="/auction-gallery.png"
            alt="logo"
          />
        </div>
        {/* .................. */}
              <ul className="flex items-center gap-6 pr-10">
                  <li>Home</li>
                  <li>Auction</li>
                  <li>Catagories</li>
                  <li>How to works</li>
            </ul>
        <div className="">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <FaRegBell className="w-5 h-5" />
                <span className=" indicator-item rounded-[100%]">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full object-contain">
                <img className="w-5 h-5"
                  alt="Tailwind CSS Navbar component"
                  src="/recent photo.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------- */}
    </div>
  );
};

export default Navbar;
