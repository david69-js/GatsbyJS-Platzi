import { Link } from "gatsby"
import PropTypes from "prop-types"
import { StyledHeader, MenuItem } from '../styles/components';
import React, {useContext} from "react"
import { CartContext }from '../context';

const Header = () => {
  const {cart} = useContext(CartContext);
    return (
    <StyledHeader margin>
    <Link to="/">
      <img src="https://i.postimg.cc/6q3pg48v/Logo.png" alt="plaziswag" />
    </Link>
    <nav>
      <ul>
          <MenuItem>
            <Link to="/">Products</Link>
          </MenuItem>
          <MenuItem margin>
            <a href="http://www.platzi.com">Platzi</a>
          </MenuItem>
          <MenuItem>
            <Link to="/cart"><span> <img src="https://i.postimg.cc/L6wpMxLt/cart.png" alt="cartLog" /></span></Link>
            {cart.length}
          </MenuItem>
      </ul>
    </nav>
  </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
