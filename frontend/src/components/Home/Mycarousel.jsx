import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Carousel from "react-bootstrap/Carousel";

const Mycarousel = () => {
  return (
    <div className="w-[90vw] mx-auto">
      <Carousel>
        <Carousel.Item>
          <img src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Mycarousel;
