import Image from "next/image"
import Link from "next/link"

export default async function Page({
    params,
}: {
    params: Promise<{ pokemon: string }>
}) {

    const { pokemon } = await params
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(response.status)
    if (response.status === 404) {
        return (
            <div>pokemon tidak ditemukan</div>
        )
    }
    const json = await response.json()
    const data = json.name



    return (
        <div className="gap-4">

            <div className="flex  items-center justify-center place-items-center">
                <div
                    className="flex flex-col items-center outline-2 "
                >
                    <h1 className="text-2xl font-bold">{data}</h1>
                    <Image
                        src={json.sprites.front_default}
                        alt={data}
                        width={200}
                        height={200}
                    />
                    <p>tinggi : {json.height}</p>
                    <p>berat : {json.weight}</p>
                </div>
            </div>
            <div className="flex items-center justify-center pt-4">
                <div className="w-2/15 flex items-center justify-center">
                    <Link
                        href="/pokemon"
                        className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
                    >back to the list</Link>
                </div>
            </div>
        </div>
    )
}