import { Link } from "react-router-dom";

export default function Cod2() {
    return (
        <>
            <h1 className="text-5xl my-4 font-bold">Call of Duty 2</h1>
            <p>CoD2 related links:</p>

            <hr className="my-4" />

            <h2 className="text-2xl font-bold mb-4">Servers</h2>

            <ul className="list-disc pl-8 mb-4">
                <li>opencj.org</li>
            </ul>

            <hr className="my-4" />

            <ul>
                <li><Link className="hover:underline text-cyan" to="/cod2/roadmap">Roadmap</Link></li>
                <li><Link className="hover:underline text-cyan" to="/cod2/statistics">Statistics</Link></li>
                <li><Link className="hover:underline text-cyan" to="/cod2/maps">Maps</Link></li>
            </ul>
        </>
    )
}