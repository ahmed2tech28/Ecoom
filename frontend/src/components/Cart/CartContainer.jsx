import React from "react";

const CartContainer = ({ cartItems }) => {
  return (
    <div className="flex min-h-[4em] w-[90vw] mx-auto">
      <div className="left w-[90%] flex flex-col">
        {cartItems.length == 0 ? (
          <div className="p-3 text-[2em] font-medium">
            No items to display in cart
          </div>
        ) : (
          <div className="p-4">
            {cartItems.map((item, i) => (
              <div key={i} className="w-[70%] h-[20em] bg-white mt-3"></div>
            ))}
          </div>
        )}
      </div>
      <div className="right w-[10%]"></div>
    </div>
  );
};

export default CartContainer;
