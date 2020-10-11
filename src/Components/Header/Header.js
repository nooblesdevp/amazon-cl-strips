import React from 'react'
import { Link } from 'react-router-dom'

//material icons
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { useStateValue } from '../StateProvider/StateProvider'
import './Header.scss'

function Header() {

    const [{ basket }] = useStateValue();
    console.log('yoooooooo', basket)

    return (
        <nav className="header">
            {/* logo in the left */ }
            <Link to="/" >
                <img 
                className="header__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt=""/>
            </Link>
            {/* search box */}
            <div className="header__search">

                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            {/*  3 links */}
            <div className="header__nav">
                <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne" >Hallo Zen</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne" >Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne" >Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                  {/* basket icon with number */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                       <ShoppingBasketIcon/>
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header