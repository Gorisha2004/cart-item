import React from 'react';

const Navbar = (props) => {
  
    return(
      <div 
      style={styles.nav}>
          <div style={styles.cartIconContainer}> {/* Corrected style to styles */}
            <img style={styles.cartIcon}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHB8PUUcwu0znerxeTjKi2FrZA3ebxN0SEvhzIF4ocYw&s" 
            alt="cart-icon"
            />
            <span style={styles.cartCount}> {props.count} </span>
          </div>
      </div>
    );
  }


const styles ={
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  nav: {
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
  }
}

export default Navbar;
