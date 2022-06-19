import React, { useContext } from 'react'
import CharactersContext from '../context/CharactersContext';

const Home = () => {

    const { list } = useContext(CharactersContext);

    const listItems = list.map((x) =>
        <div className="">
            <h1>{x.name}</h1>
            <img src={`${x.image}`} />
        </div>
    );



    return (
        <div >
            {listItems}
        </div>
    );
}

export default Home;