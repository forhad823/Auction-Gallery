import React from "react";
import { MdClose } from "react-icons/md";

const Favorite = ({ auctionItems, clickedIds, handleRemoveFavorite }) => {


  const remainingFavoriteItem = clickedIds.map((id) =>
    auctionItems.find((item) => item.id === id)
  );
  
  return (
    <div>
      {/*__(turnary operator warning________ */}
      {!remainingFavoriteItem.length ? ( // if favoriteItem is 0
        <div className="text-center">
          <h3 className="text-base font-semibold">No favorites yet</h3>
          <p className="text-xs font-normal">
            Click the heart icon on any item to add it to your favorites
          </p>
        </div>
      ) : (
        // if favoriteItem is greater than 0
        remainingFavoriteItem.map((item) => (
          // favorite items --------------------
          <div className="grid grid-cols-[1fr_2fr_1fr] border-2 rounded-lg p-3 gap-1 items-center my-3">
            <img
              className="w-12 h-12 object-contain border-2 rounded-lg"
              src={item.image}
              alt="item-image"
            />
            <div className="text-xs">
              <h3 className="title text-sm font-bold w-[150px] truncate">
                {item.title}
              </h3>
              <p>${item.bidPrice}</p>
              <p>Bids: {item.bidsCount}</p>
            </div>
            {/* ------remove icon--------------- */}
            <button
              onClick={() => handleRemoveFavorite(item.id, item.bidPrice)}
              className="flex justify-center cursor-pointer"
            >
              <MdClose />
            </button>
          </div>
          // -----------------favorite card end---------
        ))
      )}

      {/* if not empty or something exist */}
    </div>
  );
};

export default Favorite;
