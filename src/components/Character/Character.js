import React from 'react';
import './Character.css'

const Character = (props) => {

    const { name, title, picture, age, price, gender, role } = props.character;

    return (
        <div className='character'>
            <div className='character-info'>
                <img src={picture} alt="" />
                <h2>Name: {name}</h2>
                <h4>Title: {title}</h4>
                <p>Age: {age} yr</p>
                <p>Gender: {gender}</p>
                <h5>Role: {role}</h5>
                <p>Price: ${price}</p>
                <button className='cart-btn'>Add to cart</button>

            </div>

        </div>
    );
};

export default Character;