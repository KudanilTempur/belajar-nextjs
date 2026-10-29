'use client'

import { useState } from 'react'
import Link from 'next/link'
interface Pokemon {
    name: string
    url: string
}
interface PokemonListProps {
    pokemons: Pokemon[]
}

export default function PokemonList({ pokemons }: PokemonListProps) {

    const [search, setSearch] = useState('')
    const filtered = pokemons.filter((post) => (
        post.name.toLowerCase().includes(search.toLowerCase())
    ))

    return (
        <div>
            <input
                type="text"
                placeholder="cari pokemon"
                value={search}
                onChange={
                    (e) => setSearch(
                        e.target.value
                    )}
                className='p-4 border border-gray-200 hover:bg-gray-900 capitalize mx-auto w-1/2 flex gap-1'
            />
            <ul className="grid grid-cols-4 gap-4">
                {filtered.map((post: Pokemon) => (
                    <li
                        className="p-4 border border-gray-200 hover:bg-gray-900 capitalize mx-auto w-50"
                        key={post.url}>
                        <Link
                            href={`/pokemon/${post.name}`}>
                            {post.name}
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}


