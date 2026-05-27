import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

const SellActionWindow = ({ uid }) => {
  const navigate = useNavigate();

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const generalContext = useContext(GeneralContext);

  const handleSellClick = async () => {

    try {
      await axios.post(`${API_URL}/newOrder`, {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      });

      generalContext.closeSellWindow();
      navigate("/orders");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Order could not be placed");
    }
  };

  const handleCancelClick = () => {

    generalContext.closeSellWindow();
  };

  return (
    <div className="container" id="buy-window">

      <div className="regular-order">

        <div className="inputs">

          <fieldset>
            <legend>Qty.</legend>

            <input
              type="number"
              name="qty"
              id="qty"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>

            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>

        </div>
      </div>

      <div className="buttons">

        <span>Margin required ₹140.65</span>

        <div>

          <Link className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>

          <Link className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>

        </div>

      </div>
    </div>
  );
};

export default SellActionWindow;
