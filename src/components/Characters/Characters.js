import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Character from '../Character/Character';
import './Characters.css'

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./paladins.JSON')
            .then(res => res.json())
            .then(data => setCharacters(data))

    }, [])
    const handleAddToCart = (character) => {
        setCart([...cart, character])
    }

    return (
        <div className='characters-container'>
            <div className='characters'>
                {
                    characters.map(character => <Character
                        key={character._id}
                        character={character}
                        handleAddToCart={handleAddToCart}></Character>)
                }

            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>


        </div>
    );
};

export default Characters;