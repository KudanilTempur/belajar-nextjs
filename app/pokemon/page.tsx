
import Link from "next/link"

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
        <ul className="grid grid-cols-4 gap-4">
            {pokemon.map((post: Pokemon) => (
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
    )
}