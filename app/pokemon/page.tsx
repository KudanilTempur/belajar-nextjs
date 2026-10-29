

import PokemonList from './PokemonList'
export default async function pokemon() {

    interface Pokemon {
        name: string
        url: string
    }
    const response = await fetch('http://localhost:3000/api/pokemon', {
        cache: "no-store",
    })
    const json = await response.json()
    console.log(json)
    const pokemon = json.results

    return (

        <div>
            <PokemonList pokemons={pokemon} />


        </div>
    )
}