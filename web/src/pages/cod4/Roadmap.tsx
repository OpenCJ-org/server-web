export default function Roadmap() {

    return (
        <>
            <h1 className="text-5xl my-4 font-bold">Roadmap</h1>
            <p>The feature roadmap for the CoD4 version of the project.</p>

            <hr className="my-4" />
            <h3 className="font-bold done">Alpha</h3>
            <ul className="list-disc pl-8 mb-4">
                <li className="done">An expanding list of supported maps (starting at 10)</li>
                <li className="done">Basic CJ features (save/load, restore position, save/pause/restore runs, fps history, noclip, spectator fps, speedometer)</li>
                <li className="done">Voting (change map, extend) via !chat commands</li>
                <li className="done">Basic settings (graphics, hax, ele)</li>
                <li className="done">Basic leaderboard (time records, rpg records, haxfps and ele filters)</li>
                <li className="done">Basic commands (mute, ignore, hide all/radius players, rpg)</li>
                <li className="done">Basic website (where you are at right now)</li>
                <li className="done">Basic menus</li>
                <li className="done">Checkpoints visible on minimap</li>
                <li className="done">Progress bar</li>
            </ul>
            <h3 className="font-bold">Beta</h3>
            <ul className="list-disc pl-8 mb-4">
                <li className="done">Support for any% (shortcuts)</li>
                <li className="done">Map list menu with vote</li>
                <li className="done">Improved leaderboard (more filters)</li>
                <li>Improved checkpoints</li>
                <li>Improved basic website</li>
                <li>Basic points system</li>
                <li>Difficulty-based ranking system (not tied to points)</li>
                <li className="done">Basic Discord integration</li>
            </ul>
            <h3 className="font-bold">v1.0</h3>
            <ul className="list-disc pl-8 mb-4">
                <li>Demos</li>
                <li>Clips</li>
                <li>Shop (tied to points)</li>
                <li>Challenges (global and map)</li>
                <li>Improved leaderboard (even more filters)</li>
                <li>Improved website (map pages and full maplist, users, tutorials)</li>
                <li>Customizable HUDs</li>
                <li>And more to be announced features</li>
            </ul>
        </>
    )
}