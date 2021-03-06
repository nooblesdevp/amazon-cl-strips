import React from "react";

import StarIcon from "@material-ui/icons/Star";

import "./CheckoutProduct.scss";
import { useStateValue } from "../StateProvider/StateProvider";

function CheckoutProduct({ id, title, image, price, rating, hiddenButton }) {
  const [{ basket }, dispatch] = useStateValue();

  //remoove item from basket
  const removeFromBasker = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarIcon className="product__ratingIcon" />
              </p>
            ))}
        </div>
        {!hiddenButton && (
          <button onClick={removeFromBasker}>Remove from basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
