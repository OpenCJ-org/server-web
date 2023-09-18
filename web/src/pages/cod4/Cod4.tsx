import { Link } from "react-router-dom";

export default function Cod4() {
    return (
        <>
            <h1 className="text-5xl my-4 font-bold">Call of Duty 4</h1>

            <hr className="my-4" />

            <h2 className="text-2xl font-bold mb-4">Servers</h2>

            <div className="flex items-center">
                <img className="max-h-8" src="https://flagsapi.com/DE/flat/64.png" alt="DE Flag" />
                <span className="font-[Courier] ml-2">opencj.org</span>
                {/*<span className="mx-2">|</span>
                <span className="italic text-green">Online</span>*/}
            </div>

            <hr className="my-4" />

            <ul>
                <li><Link className="link" to="/cod4/roadmap">Roadmap</Link></li>
            </ul>
        </>
    )
}