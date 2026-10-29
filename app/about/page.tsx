import Link from 'next/link'

export default function about() {
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold font-sans p-2">Dzaka Abiyyu Azhari</h1>
            <div>
                <h2 className="text-2xl font-bold font-sans p-2">my project before magang?</h2>
                <p>aku udah belajar banyak hal seperti penggunaan useState dan useEffect dalam react.ts, <br /> aku juga belajar tentang nextjs api dan masih banyak lagi </p>
            </div>
            <div>
                <h2 className="text-2xl font-bold font-sans p-2">project?</h2>
                <p>i dunno, blum banyak, tetapi aku bisa membuat 2 page ini, aku belajar tentang nextjs dengan 2 page ini <br />  </p>
                <Link href="/pokemon">pokemon</Link> <br />
                <Link href="/book">book</Link>
            </div>
        </div>
    )
}