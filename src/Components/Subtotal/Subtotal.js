import React from 'react'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../StateProvider/StateProvider'
import {getBasketTotal} from '../reducer/reducer'
import { useHistory } from 'react-router-dom'

import './Subtotal.scss'

function Subtotal() {
    const [{basket}, dispatch ] = useStateValue();
    const history = useHistory()

    return (
        <div className="subtotal">
            {/* total price */}
            <CurrencyFormat
                renderText={(value) => (
                <>
                    <p>
                    {/* Part of the homework */}
                    Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                         <input type="checkbox" /> This order contains a gift
                    </small>
                </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e => history.push('/payment')} >Proces to Checkout</button>
        </div>
    )
}

export default Subtotal
