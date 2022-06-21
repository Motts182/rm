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

            const url2 = characterList.data.info.next;

            const characterList2 = await axios.get(url2);

            setcharacterTwo(characterList2.data.results);

            setcharacterOne(characterList.data.results);

        }
        getList();
    })


    return (
        <CharactersContext.Provider
            value={{
                characterOne,
                characterTwo,
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