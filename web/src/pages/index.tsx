import { Link } from "react-router-dom";

export default function Index() {
    return (
        <>
            <h1 className="text-5xl my-4 font-bold">OpenCJ</h1>
            <p>OpenCJ is an open-source CoDJumper mod for CoD2 and CoD4.</p>

            <hr className="my-4"/>

            <h2 className="text-2xl font-bold mb-4">Goals</h2>
            <h3 className="font-bold">Strong Foundation</h3>
            <p className="mb-4">The most popular and sophisticated CoDJumper mods were started many years ago and were not created with the advanced features and playstyles of today. This made extending functionality difficult and time-consuming. Our goal with OpenCJ is to create a strong and stable foundation that can be easily extended over time. OpenCJ is built from the ground up and has been designed from the beginning to be ready for future expansion.</p>
            <h3 className="font-bold">Developer Collaboration</h3>
            <p className="mb-4">For many years, mods have been held back by the lack of collaboration from the wider community. Every server had its own closed-source mod and often implementation details were not shared amongst the community. The competition between servers and the risk of features getting stolen made developers hesitant to share sources. This meant development teams stayed small, as it was harder for outsiders to get involved. The open-source nature of OpenCJ lets everyone see how everything is made and allows the community to contribute fixes or features. From the very start, our goal with OpenCJ has been to enable people to get involved.</p>
            <h3 className="font-bold">Community Unification</h3>
            <p className="mb-4">Historically, one of the biggest problems impacting CoDJumper was community fragmentation. Every server had its own community of players, resulting in a divided community and fewer overall numbers. The playerbase is not large enough for the volume of servers offered. We believe that putting the entire community's efforts towards one project will result in increased engagement and happier players. Everything and everyone can be centralised in one place. All the best features, all the best people. Our goal with OpenCJ is to collaborate with the community as much as possible to progress CJ for everyone.</p>
            
            <hr className="my-4"/>

            <h2 className="text-2xl font-bold mb-4">Supported Games</h2>
            <p className="mb-4">At this stage, only CoD4 is supported.</p>
            <ul>
                {/*<li><Link className="link text-cyan" to="/cod2">CoD2</Link></li>*/}
                <li><Link className="link" to="/cod4">CoD4</Link></li>
            </ul>

            <hr className="my-4"/>

            <h2 className="text-2xl font-bold mb-4">Repositories</h2>
            <p className="mb-4">The project consists of multiple closely related repositories which are listed below:</p>
            <ul>
                <li><Link className="link" target="_blank" to="https://github.com/opencj-org/server-gsc">server-gsc</Link></li>
                <li><Link className="link" target="_blank" to="https://github.com/opencj-org/server-ext">server-ext</Link></li>
                <li><Link className="link" target="_blank" to="https://github.com/opencj-org/cod4x-server">cod4x-server</Link></li>
                <li><Link className="link" target="_blank" to="https://github.com/opencj-org/server-db">server-db</Link></li>
                <li><Link className="link" target="_blank" to="https://github.com/opencj-org/libcod">libcod</Link></li>
                <li><Link className="link" target="_blank" to="https://github.com/opencj-org/client-mod">client-mod</Link></li>
                <li><Link className="link" target="_blank" to="https://github.com/opencj-org/server-web">server-web</Link></li>
                <li><Link className="link" target="_blank" to="https://github.com/opencj-org/discord-integration">discord-integration</Link></li>
            </ul>

            <hr className="my-4"/>

            <h2 className="text-2xl font-bold mb-4">Community</h2>
            <p className="mb-4">We have an open <a className="link-inline" href="https://discord.opencj.org/" target="_blank">Discord Server</a> that is the central hub for organizing and discussing everything related to the project. If you are a developer who wants to get involved with contributing or just a player looking to try the mod go ahead and join!</p>

            <hr className="my-4"/>

            <h2 className="text-2xl font-bold mb-4">Credits</h2>
            <h3 className="font-bold">Founders</h3>
            <ul className="list-disc pl-8 mb-4">
                <li>IzNoGoD</li>
                <li>Ridgepig</li>
                <li>Noob</li>
                <li>Funk</li>
            </ul>
        </>
    );
}