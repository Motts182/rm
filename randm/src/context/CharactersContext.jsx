import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const CharactersContext = createContext();

const CharactersProvider = ({ children }) => {

    const [characterOne, setcharacterOne] = useState([])
    const [characterTwo, setcharacterTwo] = useState([])

    useEffect(() => {
        const getList = async () => {

            const url = `https://rickandmortyapi.com/api/character`

            const characterList = await axios.get(url);

            setList(characterList.data.results);

        }
        getList();
    }, [list])


    return (
        <CharactersContext.Provider
            value={{
                characterOne,
                characterTwo
            }}
        >
            {children}
        </CharactersContext.Provider>
    );
}

export {
    CharactersProvider,
}

export default CharactersContext;