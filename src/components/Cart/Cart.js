import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let name = ''
    for (const character of cart) {
        total = total + character.price;
        name = name + ' ' + character.name + ',';
    }

    if (total > 15000) {
        alert('You have crossed your budget');

    }


    return (
        <div className='cart'>
            <h2> <FontAwesomeIcon icon={faUser} /> Ordered Characters: {props.cart.length}</h2>
            <h4>Total Price: $ {total.toFixed(2)}</h4>
            <p>Selected Characters</p>
            <p>{name}</p>
        </div>

    );

};

export default Cart;