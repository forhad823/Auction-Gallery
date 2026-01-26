import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Itemtable = ({ auctionItems, clickedIds, handleBidClick }) => {
  // _____bid button functionality____

  // ---------------------------------------

  return (
    <div className="rounded-lg overflow-hidden border text-sm">
      <table className="table-auto w-full border-spacing-0">
        <thead>
          <tr>
            <th className="text-left px-4 py-2">Item</th>
            <th className="text-left px-4 py-2">Current Bid</th>
            <th className="text-left px-4 py-2">Time Left</th>
            <th className="text-left px-4 py-2">Bid Now</th>
          </tr>
        </thead>
        <tbody>
          {auctionItems.map((item) => {
            const isClicked = clickedIds.includes(item.id);
            return (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-2 flex gap-1.5 items-center">
                  <img
                    className="w-10 h-10 object-contain rounded-lg"
                    src={item.image}
                    alt="item-image"
                  />
                  <p>{item.title}</p>
                </td>
                <td className="px-4 py-2">${item.bidPrice}</td>
                <td className="px-4 py-2">{item.timeLeft}</td>
                <td className="px-4 py-2">
                  <button
                    className={`px-3 py-1 rounded  ${
                      isClicked
                        ? "text-red-600 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                    disabled={isClicked}
                    onClick={() => handleBidClick(item.id, item.bidPrice)}
                  >
                    {isClicked ? <FaHeart /> : <FaRegHeart />}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Itemtable;
