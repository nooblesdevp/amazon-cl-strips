import React from 'react'
import moment from 'moment'
import CurrencyFormat from "react-currency-format";

import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import './Order.scss'


function Order({order}) {
    return (
        <div className="order">
            <h2 className="order__heading">Order</h2>
            <p>{moment.nux(order.data.create).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id= {item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hiddenButton
               
               />
            ))}
             <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />   
        </div>
    )
}

export default Order
