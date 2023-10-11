import React from "react";

import { Link } from "react-router-dom";

const CartContainer = ({ cartItems }) => {
  let price = 0;
  function addToPrice(priceToAdd) {
    price += priceToAdd
    return null
  }
  // console.log(cartItems)
  return (
    <div className="flex min-h-[4em] w-[90vw] mx-auto">
      <div className="left w-[70%] flex flex-col">
        {cartItems.length == 0 ? (
          <div className="p-3 text-[2em] font-medium">
            No items to display in cart
          </div>
        ) : (
          <div className="p-4">
            <div className="p-2 text-[2em] font-medium">
              Total number of items in your cart are ( {cartItems.length} )
            </div>
            {cartItems.map((item, i) => (
              <div
              key={i}
              className="w-[90%] h-[20em] bg-white mt-3 flex items-center"
              >
                {addToPrice(item.price)}
                <section className="left w-[15%] flex justify-center items-center">
                  <img src={item.image} alt="" />
                </section>
                <section className="right w-[85%] flex flex-col h-[70%]">
                  <div className="top-right h-[70%]">
                    <h3>{item.title}</h3>
                    <h6 className="text-gray-800 font-bold">
                      Seller : {item.owner.name}
                    </h6>
                    <p className="description">{item.description}</p>
                  </div>
                  <div className="bottom-right h-[30%]">
                    <div>{item.price} $</div>
                    <button className="underline text-blue-500">
                      Remove from here
                    </button>
                    <Link className="mx-3">go to product</Link>
                  </div>
                </section>
              </div>
            ))}
          </div>
        )}
      </div>
      {cartItems.length == 0 ? (
        <div className="right w-[30%]"></div>
      ) : (
        <div className="right w-[30%]">
          <div className="w-[100%] h-[15em] bg-white mt-[6.5em] flex flex-col items-center justify-center">
            <div className="w-[90%]">
              <div>No of items : {cartItems.length}</div>
              <div>Price : {price} $</div>
            </div>
            <Link to={"/checkout"} className="no-underline w-[90%] my-3">
              <button
                style={{ background: "rgb(255, 216, 20)" }}
                className="py-2 px-10 text-black block w-[100%]"
              >
                Processed to checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
