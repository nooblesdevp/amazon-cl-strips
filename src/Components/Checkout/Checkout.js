import React from 'react'

import { useStateValue } from '../StateProvider/StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import Subtotal from '../Subtotal/Subtotal'

import './Checkout.scss'

function Checkout() {
    const [{ basket, user }, dispatch ] = useStateValue() 

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                alt=""/>
                {
                    basket?.length === 0 ? (
                        <div>
                            <h2>Your Shoping Basket is empty</h2>
                        </div>
                    ) : (
                        <div>
                            <h3>Hello, {user?.email}</h3>
                            <h2 className="checkout__title">Your Shopping Basket</h2>
                            {/*  list of product */}
                            {basket?.map((item) => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                
                                />
                            ))}
                        </div>
                    )
                }
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal/>
                </div>
            )}
            
        </div>
    )
}

export default Checkout
