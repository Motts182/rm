import React, { useContext, useState } from 'react'
import CharactersContext from '../context/CharactersContext';

const Home = () => {

    const { characterOne, characterTwo } = useContext(CharactersContext);

    const [characterOneSelected, setCharacterOneSelected] = useState(" No Selected");
    const [listCapsOne, setlistCapsOne] = useState(null);


    const [characterTwoSelected, setCharacterTwoSelected] = useState(" No Selected")
    const [listCapsTwo, setlistCapsTwo] = useState(null);


    const setInfoCharacterOne = (name, caps) => {
        console.log(caps);
        setlistCapsOne(caps);
        setCharacterOneSelected(name);
    }

    const setInfoCharacterTwo = (name, caps) => {
        console.log(caps);
        setlistCapsTwo(caps);
        setCharacterTwoSelected(name);
    }

    const listItems = characterOne.map((x, i) =>
        <div class="flex justify-between w-[110px] ">
            {i <= 4 ?
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <img class="rounded-t-lg w-[150px]" src={`${x.image}`} alt="" />
                    <div class="p-5">
                        <h5 class="text-gray-900 text-xs w-[100px] font-medium mb-2">{x.name}</h5>
                        <p class="text-gray-700 text-xs w-[10px] mb-3">
                            {x.species + " - " + x.status}
                        </p>
                        <button onClick={() => setInfoCharacterOne(x.name, x.episode)} type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">SELECT</button>
                    </div>
                </div>
                : null}
        </div>
    );

    const listItems2 = characterTwo.map((x, i) =>
        <div class="flex justify-between w-[110px] ">
            {i <= 4 ?
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <img class="rounded-t-lg w-[150px]" src={`${x.image}`} alt="" />
                    <div class="p-5">
                        <h5 class="text-gray-900 text-xs w-[100px] font-medium mb-2">{x.name}</h5>
                        <p class="text-gray-700 text-xs w-[10px] mb-3">
                            {x.species + " - " + x.status}
                        </p>
                        <button onClick={() => setInfoCharacterTwo(x.name, x.episode)} type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">SELECT</button>
                    </div>
                </div>
                : null}
        </div>
    );

    return (
        <div className='h-screen'>
            <div className="flex h-2/4 p-5 bg-blue-500 ">
                <div className="w-3/6 h-2/4 pr-1">
                    <h1>{`Character #1 - ${characterOneSelected}`}</h1>
                    <div className="grid grid-cols-5 bg-blue-500">
                        {listItems}
                    </div>
                </div>
                <div className="w-3/6 pl-5 h-2/4">
                    <h1>{`Character #1 - ${characterTwoSelected}`}</h1>
                    <div className="grid grid-cols-5 bg-blue-500">
                        {listItems2}
                    </div>
                </div>
            </div>

            {listCapsOne && listCapsTwo ?
                <div className="grid grid-cols-3 p-1  h-2/4 bg-blue-300 ">

                    <div className="border-2">
                        {`Character #1 - Only Episodes `}
                        <div className="grid grid-cols-12 ">
                            {listCapsOne.map(function (d, idx) {
                                let conSubstring = d.substring(40, 42);
                                return (<div key={idx}>{conSubstring}</div>)
                            })}
                        </div>
                    </div>
                    <div className="border-2">
                        {`Character #1 & #2 - Only Episodes `}
                        <div className="grid grid-cols-12">
                            {listCapsOne.map(function (d, idx) {
                                let conSubstring = d.substring(40, 42);
                                return (<div key={idx}>{conSubstring}</div>)
                            })}

                            {listCapsTwo.map(function (d, idx) {
                                let conSubstring = d.substring(40, 42);
                                return (<div key={idx}>{conSubstring}</div>)
                            })}
                        </div>
                    </div>
                    <div className="border-2">
                        {`Character #2 - Only Episodes `}
                        <div className="grid grid-cols-12">
                            {listCapsTwo.map(function (d, idx) {
                                let conSubstring = d.substring(40, 42);
                                return (<div key={idx}>{conSubstring}</div>)
                            })}
                        </div>
                    </div>
                </div>
                : null
            }

        </div >
    );
}

export default Home;