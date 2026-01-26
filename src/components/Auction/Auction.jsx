import React, { useEffect, useState } from "react";
import Itemtable from "./Itemtable";
import { FaRegHeart } from "react-icons/fa";
import Favorite from "./Favorite";
import { toast, Bounce } from "react-toastify";

const Auction = () => {
  const [auctionItems, setAuctionItems] = useState([]);

  useEffect(() => {
    fetch("/bid-items.json")
      .then((res) => res.json())
      .then((data) => setAuctionItems(data));
  }, []);
  console.log(auctionItems);

  // ------------------------------------------------
  const [clickedIds, setClickedIds] = useState([]);
  const [totalBidAmount, setTotalBidAmount] = useState(0);

  function handleBidClick(id, price) {
    // toastify notification
    toast(
      <span className="text-sm font-bold text-black">
        🦄 Item Added to Your Favorite list
      </span>,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      }
    );
    setClickedIds([...clickedIds, id]);
    setTotalBidAmount(totalBidAmount + price);
  }

  function handleRemoveFavorite(id, price) {
    // toastify notification
    toast.warn(
      <span className="text-sm font-bold text-black">
        Item Removed From Favorite
      </span>,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      }
    );
    // Remove the ID from clickedIds
    const updatedIds = clickedIds.filter((clickedId) => clickedId !== id);
    setClickedIds(updatedIds);

    // Subtract the price from total
    setTotalBidAmount((prevAmount) => prevAmount - price);
  }

  // --------------------------------------------

  return (
    <div className="bg-[#EBECF5]">
      <div className="w-11/12 mx-auto py-16 ">
        <div className="pb-8 space-y-2">
          <h1 className="title font-semibold text-2xl">Active Auctions</h1>
          <h3 className="sub-title font-normal text-lg">
            Discover and bid on extraordinary items
          </h3>
        </div>

        {/*_________________auction boxes___________ */}
        <div className="grid grid-cols-[65%_33%] gap-2.5 justify-between items-start">
          <div className="auction-table bg-white rounded-lg px-5 py-12">
            {/* table________ */}
            <Itemtable
              auctionItems={auctionItems}
              clickedIds={clickedIds}
              handleBidClick={handleBidClick}
            ></Itemtable>
            {/* _________ */}
          </div>
          {/* ---------favorite-items section--------------- */}
          <div className="favorite-item bg-white px-4 py-3 rounded-lg">
            <div className="title flex justify-center gap-3 text-center text-blue-600">
              <button>
                <FaRegHeart />
              </button>
              <h2 className="text-xl font-semibold">Favorite Items</h2>
            </div>
            <div>
              <hr className="border-t-3 my-3" />
              <Favorite
                auctionItems={auctionItems}
                clickedIds={clickedIds}
                handleRemoveFavorite={handleRemoveFavorite}
              ></Favorite>
              <hr className="border-t-3 my-3" />
              <div className="total-bid-amount text-sm flex justify-between font-bold">
                <p>Total Bid Amount</p>
                <p>${totalBidAmount === 0 ? "0000" : totalBidAmount}</p>
              </div>
            </div>
          </div>
        </div>
        {/* ________________acution________________ */}
      </div>
    </div>
  );
};

export default Auction;
