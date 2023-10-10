import React from "react";

import Mycarousel from "./Home/Mycarousel";
import CardContainer from "./MostUsed/CardContainer";
import ProductContainer from "./MostUsed/ProductContainer";
import DiscountItemsCntainer from "./MostUsed/DiscountItemsCntainer";
import Footer from "../common/Footer";

const Home = () => {
  document.title = "Amazon.com. Spend less. Smile more.";

  const displayItems1 = [
    {
      title: "Gaming accessories",
      image: "electronic.png",
      btn_text: "see more",
    },
    { title: "Toys Under $30", image: "child.png", btn_text: "shop now" },
    { title: "Electronics", image: "electronic.png", btn_text: "shop now" },
    { title: "Sign in", image: null, btn_text: null },
    {
      title: "Home & Kitchen Under $30",
      image: "electronic.png",
      btn_text: "shop now",
    },
    {
      title: "Health & Personal Care",
      image: "care.png",
      btn_text: "shop now",
    },
    {
      title: "Refresh your space",
      image: "electronic.png",
      btn_text: "shop now",
    },
    {
      title: "Shop deals in Fashion",
      image: "beauty.png",
      btn_text: "shop now",
    },
  ];
  const displayItems3 = [
    {
      title: "Gaming accessories",
      image: "electronic.png",
      btn_text: "see more",
    },
    { title: "Toys Under $30", image: "child.png", btn_text: "shop now" },
    { title: "Electronics", image: "electronic.png", btn_text: "shop now" },
    {
      title: "Home & Kitchen Under $30",
      image: "electronic.png",
      btn_text: "shop now",
    },
  ];

  const displayItems2 = [
    {
      link: "/",
      image:"https://m.media-amazon.com/images/I/71t1g5vwSmL._AC_SY200_.jpg"
    },
    {
      link: "/",
      image:"https://m.media-amazon.com/images/I/61iPbqQvEHL._AC_SY200_.jpg"
    },
    {
      link: "/",
      image:"https://m.media-amazon.com/images/I/615Bo+zjwbL._AC_SY200_.jpg"
    },
    {
      link: "/",
      image:"https://m.media-amazon.com/images/I/81og--mNZFL._AC_SY200_.jpg"
    },
    {
      link: "/",
      image:"https://m.media-amazon.com/images/I/71n4aV-K8oL._AC_SY200_.jpg"
    },
    {
      link: "/",
      image:"https://m.media-amazon.com/images/I/61XB+4JdV4L._AC_SY200_.jpg"
    },
    {
      link: "/",
      image:"https://m.media-amazon.com/images/I/71hL9thpHxL._AC_SY200_.jpg"
    },
    {
      link: "/",
      image:"https://m.media-amazon.com/images/I/81og--mNZFL._AC_SY200_.jpg"
    },
    {
      link: "/",
      image:"https://m.media-amazon.com/images/I/71t1g5vwSmL._AC_SY200_.jpg"
    },
    {
      link: "/",
      image:"https://m.media-amazon.com/images/I/61iPbqQvEHL._AC_SY200_.jpg"
    },
  ];
  
  const displayItems4 = [
    {
      link: "/",
      image:"https://m.media-amazon.com/images/I/71t1g5vwSmL._AC_SY200_.jpg",
      price:25,
      name:"Product1",
    },
    {
      link: "/",
      image:"https://m.media-amazon.com/images/I/61iPbqQvEHL._AC_SY200_.jpg",
      price:25,
      name:"Product1",
    },
    {
      link: "/",
      image:"https://m.media-amazon.com/images/I/615Bo+zjwbL._AC_SY200_.jpg",
      price:25,
      name:"Product1",
    },
    {
      link: "/",
      image:"https://m.media-amazon.com/images/I/81og--mNZFL._AC_SY200_.jpg",
      price:25,
      name:"Product1",
    },
    {
      link: "/",
      image:"https://m.media-amazon.com/images/I/71n4aV-K8oL._AC_SY200_.jpg",
      price:25,
      name:"Product1",
    },
    {
      link: "/",
      image:"https://m.media-amazon.com/images/I/61XB+4JdV4L._AC_SY200_.jpg",
      price:25,
      name:"Product1",
    },
    {
      link: "/",
      image:"https://m.media-amazon.com/images/I/71hL9thpHxL._AC_SY200_.jpg",
      price:25,
      name:"Product1",
    },
    {
      link: "/",
      image:"https://m.media-amazon.com/images/I/81og--mNZFL._AC_SY200_.jpg",
      price:25,
      name:"Product1",
    },
    {
      link: "/",
      image:"https://m.media-amazon.com/images/I/71t1g5vwSmL._AC_SY200_.jpg",
      price:25,
      name:"Product1",
    },
    {
      link: "/",
      image:"https://m.media-amazon.com/images/I/61iPbqQvEHL._AC_SY200_.jpg",
      price:25,
      name:"Product1",
    },
  ];

  const positionStyles = {
    position: "absolute",
    left: "5vw",
    top: "22em",
  };

  return (
    <div>
      <Mycarousel />
      <div style={positionStyles}>
        <CardContainer pos={true} displayItems={displayItems1} />
        <ProductContainer displayItems={displayItems2} title={"Popular products in Beauty internationally"} />
        <CardContainer pos={false} displayItems={displayItems3} />
        <DiscountItemsCntainer title={"Items under 25$"} displayItems={displayItems4}/>
        <ProductContainer displayItems={displayItems2} title={"New international customers purchased"} />
        <DiscountItemsCntainer title={"Items in your budget"} displayItems={displayItems4}/>
        <CardContainer pos={false} displayItems={displayItems3} />
        <ProductContainer displayItems={displayItems2} title={"Top picks for Pakistan"} />
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
