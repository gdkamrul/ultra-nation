import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    return (
        <div>
            <h2>This is Cart : {cart} </h2>
        </div>
    );
};

export default Cart;