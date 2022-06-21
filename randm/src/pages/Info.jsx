import React from 'react'

const Info = () => {
    return (
        <div className="h-screen bg-blue-300">
            <div class="p-4">
                <div class="mb-3 text-xl font-bold">Objetivo:</div>
                <div class="text-sm text-neutral-600">Se utilizará la api de rick and morty  “[https://rickandmortyapi.com/](https://rickandmortyapi.com/)” analizandola y cumpliendo con los siguientes objetivos:
                    <br />
                    - Obtener un listado de personajes, listandolos, de forma paginada, en dos secciones “**Character #1**” y “**Character #2**”
                    <br />

                    - Cada personaje tiene que mostrarse como una “Card” con su status y su especie
                    <br />

                    - Debajo de estos dos listados abra 3 secciones:

                    <br />
    - **Character #1 - Only Episodes** —> aquí debe listarse únicamente los episodios en donde aparece solo el Personaje seleccionado en la sección “**Character #1**”

                    <br />
    - **Character #1 & #2 - Shared Episodes** —> aquí debe listarse los episodios donde aparecen los personales seleccionados en las secciones “**Character #1**” y “**Character #2**”

                    <br />
    - **Character #2 - Only Episodes** —> aquí debe listarse únicamente los episodios en donde aparece solo el Personaje seleccionado en la sección “**Character #2**”</div>
            </div>
        </div>
    );
}

export default Info;