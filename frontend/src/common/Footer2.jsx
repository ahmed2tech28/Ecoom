import React from "react";

import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  const tabeData = [
    [
      { name: "Careers", link: "/", colspan: 1 },
      { name: "Sell products on Amazon", link: "/", colspan: 1 },
      { name: "Amazon Business Card", link: "/", colspan: 1 },
      { name: "Amazon and COVID-19", link: "/", colspan: 1 },
    ],
    [
      { name: "Blog", link: "/", colspan: 1 },
      { name: "Sell on Amazon Business", link: "/", colspan: 1 },
      { name: "Shop with Points", link: "/", colspan: 1 },
      { name: "Your Account", link: "/", colspan: 1 },
    ],
    [
      { name: "About Amazon", link: "/", colspan: 1 },
      { name: "Sell apps on Amazon", link: "/", colspan: 1 },
      { name: "Reload Your Balance", link: "/", colspan: 1 },
      { name: "Your Orders", link: "/", colspan: 1 },
    ],
    [
      { name: "Investor Relations", link: "/", colspan: 1 },
      { name: "Become an Affiliate", link: "/", colspan: 1 },
      { name: "Amazon Currency Converter", link: "/", colspan: 1 },
      { name: "Shipping Rates & Policies", link: "/", colspan: 1 },
    ],
    [
      { name: "Amazon Devices", link: "/", colspan: 1 },
      { name: "Advertise Your Products", link: "/", colspan: 2 },
      { name: "Returns & Replacements", link: "/", colspan: 1 },
    ],
    [
      { name: "Amazon Science", link: "/", colspan: 1 },
      { name: "Self-Publish with Us", link: "/", colspan: 2 },
      { name: "Returns & Replacements", link: "/", colspan: 1 },
    ],
    [
      { name: null, link: "/", colspan: 1 },
      { name: "Host an Amazon Hub", link: "/", colspan: 1 },
      { name: null, link: "/", colspan: 1 },
      { name: "Manage Your Content and Devices", link: "/", colspan: 1 },
    ],
    [
      { name: null, link: "/", colspan: 1 },
      { name: "›See More Make Money with Us", link: "/", colspan: 1 },
      { name: null, link: "/", colspan: 1 },
      { name: "Amazon Assistant", link: "/", colspan: 1 },
    ],
    [
      { name: null, link: "/", colspan: 1 },
      { name: null, link: "/", colspan: 1 },
      { name: null, link: "/", colspan: 1 },
      { name: "Help", link: "/", colspan: 1 },
    ],
  ];
  return (
    <div className="footer" style={{left:"0"}}>
      <Link>
        <div
          className="w-[100vw] mx-auto text-white h-[3em] items-center flex justify-center font-bold text-[12px] cursor-pointer"
          style={{ background: "#37475A" }}
        >
          Back To Top
        </div>
      </Link>
      <div
        className="w-[100vw] mx-auto text-white h-[30em] foot-bottom"
        style={{ background: "#232F3E" }}
      >
        <table className="footer-table h-[17em]">
          <thead>
            <tr>
              <th>Get to Know Us</th>
              <th>Make Money with Us</th>
              <th>Amazon Payment Products</th>
              <th>Let Us Help You</th>
            </tr>
          </thead>
          <tbody>
            {tabeData.map((tableRaw, i) => (
              <tr key={i}>
                {tableRaw.map((tableD, index) => (
                  <td key={index} colSpan={tableD.colspan}>
                    <Link to={tableD.link}>{tableD.name}</Link>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Footer;
