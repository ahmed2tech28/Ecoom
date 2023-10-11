import React, { useContext } from 'react';

import Footer from '../common/Footer2';
import CartContainer from './Cart/CartContainer';

const Cart = () => {
  // const { cartItems } = useContext(MyContext);

  const cartItems = [
    {
      title:"Product-1",
      image:"https://m.media-amazon.com/images/I/61XB+4JdV4L._AC_SY200_.jpg",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo eos ab cum libero, sed ut ratione et architecto nemo animi quis soluta rerum debitis possimus voluptates. Molestias, iste laborum.",
      price:10,
      owner:{
        name:"Ahmed"
      },
      reviews:[],
      tags:[],
    },
    {
      title:"Product-2",
      image:"https://m.media-amazon.com/images/I/61XB+4JdV4L._AC_SY200_.jpg",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo eos ab cum libero, sed ut ratione et architecto nemo animi quis soluta rerum debitis possimus voluptates. Molestias, iste laborum.",
      price:35,
      owner:{
        name:"Ali"
      },
      reviews:[],
      tags:[],
    },
    {
      title:"Product-3",
      image:"https://m.media-amazon.com/images/I/61XB+4JdV4L._AC_SY200_.jpg",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo eos ab cum libero, sed ut ratione et architecto nemo animi quis soluta rerum debitis possimus voluptates. Molestias, iste laborum.",
      price:1000,
      owner:{
        name:"Ibrahim"
      },
      reviews:[],
      tags:[],
    },
  ]

  return (
    <div>
      <CartContainer cartItems={cartItems} />
      <Footer />
    </div>
  );
};

export default Cart;
