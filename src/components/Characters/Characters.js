import React, { useEffect, useState } from 'react';
import Character from '../Character/Character';
import './Characters.css'

const Characters = () => {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        fetch('./paladins.JSON')
            .then(res => res.json())
            .then(data => setCharacters(data))

    }, [])

    return (
        <div >
            <div className='characters'>
                {
                    characters.map(character => <Character
                        key={character._id}
                        character={character}></Character>)
                }

            </div>


        </div>
    );
};

export default Characters;