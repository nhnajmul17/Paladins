import React from 'react';
import './Character.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Character = (props) => {

    const { name, title, picture, age, price, gender, role } = props.character;

    return (
        <div className='character'>
            <div className='character-info'>
                <img src={picture} alt="" />
                <h2>{name}</h2>
                <h4>Title: <small>{title}</small> </h4>
                <p>Age: {age} yr</p>
                <p>Gender: {gender}</p>
                <h5>Role: {role}</h5>
                <p>Price: ${price}</p>
                <button onClick={() => props.handleAddToCart(props.character)} className='cart-btn'> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>

            </div>

        </div>
    );
};

export default Character;