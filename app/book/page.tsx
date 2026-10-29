import Link from 'next/link'

export default async function book() {

    interface book {
        title: string
        author_key: string
        author_name: string
        key: string
    }

    const response = await fetch('https://openlibrary.org/search.json?q=library', {
        cache: "force-cache"
    })
    const json = await response.json()
    const book = json.docs


    return (
        <div>
            <Link href="/">Kembali</Link>
            <ul>
                {book.map((post: book) => (
                    <li key={post.key}>
                        <Link href={"/book/" + post.key}>Judul : {post.title}</Link>
                        <br />
                        Penulis : {post.author_name}
                        <br />
                        id : {post.key} <br /><br />
                    </li>
                ))}

            </ul>
        </div>
    )
}