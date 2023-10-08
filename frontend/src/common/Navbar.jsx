import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
    const catigoryLinks = [
        {
            name:"All",
            link:"/all"
        },
        {
            name:"Todays's Deal",
            link:"/today"
        },
        {
            name:"Customer Service",
            link:"/customer-service"
        },
        {
            name:"Registry",
            link:"/registry"
        },
        {
            name:"Gift Cards",
            link:"/gift-cards"
        },
        {
            name:"Sell",
            link:"/sell"
        },
    ]
  return (
    <>
        <header className="h-[3.8em] w-[100vw]" style={{ background: "#131921" }}>
          <nav className="navbar flex justify-around">
            <div className="left-nav flex w-[18vw]">
              <Link to={"/"}>
                <img src="logo.png" alt="" />
              </Link>
              <div className="flex items-center" style={{ color: "white" }}>
                <div className="right-left-nav flex flex-col justify-center">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-[12px]">Helow</div>
                  <div className="text-[12px] font-bold">Pakistans</div>
                </div>
              </div>
            </div>
            <div className="center flex items-center h-[100%] w-[60vw]">
              <div className="search-bar flex items-center h-[100%] w-[100%]">
                <select
                  name="catigory"
                  id="catigory"
                  className="w-[5%] h-[2.5em] bg-gray-200"
                >
                  <option value="">
                    All
                  </option>
                </select>
                <input type="search" className="w-[90%] h-[2.5em] p-2" placeholder="Search Amazon" />
                <button
                  className="search-btn h-[2.5em] w-[5%]"
                  style={{ background: "rgb(254, 189, 105)" }}
                >
                  <span className="material-symbols-outlined text-[2em]">search</span>
                </button>
              </div>
            </div>
            <div className="right-nav w-[22vw] flex items-center justify-around" style={{color:"white"}}>
                <div className="select-lang flex justify-center items-center ms-5">
                    <select name="lang" id="lang" className="bg-transparent">
                        <option value="EN">EN</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <div className="text-[12px]">Hellow, sign in</div>
                    <div className="text-[13px] font-bold">Accounts & lists</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-[12px]">Returns</div>
                    <div className="text-[13px] font-bold">& Orders</div>
                </div>
                <div className="flex flex-col">
                    <img src="cart-icon.png" alt="" />
                </div>
            </div>
          </nav>
        </header>
          <nav className="nav-bottom h-[2.3em] w-[100vw]" style={{background:"#232f3e"}} >
            <ul className="flex text-white h-[100%] items-center">
                {catigoryLinks.map((item, i) => <Link className="ms-3 text-[13px] font-semibold text-white no-underline" key={i} to={`/catigory${item.link}`}>{item.name}</Link>)}
            </ul>
          </nav>
    </>
  );
};

export default Navbar;
