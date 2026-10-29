import Link from 'next/link'

export default async function book({
    params,
}: {
    params: Promise<{ book: string[] }>
}) {

    const { book } = await params
    const path = book.join('/')
    const response = await fetch(`https://openlibrary.org/${path}.json`)
    const json = await response.json()
    const data = json.title
    const description = json.description
    console.log(path)
    return (
        <div>
            <div>
                <Link href={`/book`} >Kembali</Link>
                <div className="flex items-center justify-center">
                    <h1 className="text-2xl font-bold pb-2">{data}</h1> <br />
                </div>
                <div className="">
                    <p>{description}</p>
                </div>
            </div>
        </div>

    )

}