import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { Productitems } from "./Productitems";
import "./Shop.css";
import { ShopContext } from "../../context/Shop_context";
import Footer from "../../Components/Footer";

const Shop = () => {
  const { username } = useContext(ShopContext);
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>BASKET BUDDY</h1>
        <h5>Welcomes {username}</h5>
      </div>
      <div className="products">
        {PRODUCTS.map((product, index) => (
          <Productitems key={index} data={product} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Shop;
