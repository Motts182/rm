import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const CharactersContext = createContext();

const CharactersProvider = ({ children }) => {

    const [list, setList] = useState([])
    const [characterOne, setcharacterOne] = useState(null)
    const [characterTwo, setcharacterTwo] = useState(null)

    useEffect(() => {
        const getList = async () => {

            const url = `https://rickandmortyapi.com/api/character`

            const characterList = await axios.get(url);

            setList(characterList.data.results);

        }
        getList();
    },[list])


    return (
        <CharactersContext.Provider
            value={{
                list,
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