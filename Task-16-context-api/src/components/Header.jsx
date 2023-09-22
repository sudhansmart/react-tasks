import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../ContextAPI/CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className>
      <ul className="nav">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
           <h3><i class="fa-solid fa-house"></i> Home</h3>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <h3>Cart <span> [{cart.length}]<i className="fa-solid fa-cart-shopping"></i></span></h3>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
