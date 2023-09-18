export default function Roadmap() {

    return (
        <>
            <h1 className="text-5xl my-4 font-bold">Roadmap</h1>
            <p>The feature roadmap for CoD2 version of the project.</p>

            <hr className="my-4" />
            <h3 className="font-bold">Alpha</h3>
            <ul className="list-disc pl-8 mb-4">
                <li className="done">An expanding list of supported maps (starting at 10)</li>
                <li>Basic CJ features (save/load, restore position, save/pause/restore runs, fps history, noclip, spectator fps, speedometer)</li>
                <li>Voting (change map, extend) via !chat commands</li>
                <li>Basic settings (graphics, hax, ele)</li>
                <li>Basic leaderboard (time records, rpg records, haxfps and ele filters)</li>
                <li>Basic commands (mute, ignore, hide all/radius players, rpg)</li>
                <li>Basic website (where you are at right now)</li>
                <li>Basic menus</li>
                <li>Checkpoints visible on minimap</li>
                <li>Progress bar</li>
            </ul>
            <h3 className="font-bold">Beta</h3>
            <ul className="list-disc pl-8 mb-4">
                <li>Support for any% (shortcuts)</li>
                <li>Map list menu with vote</li>
                <li>Demos</li>
                <li>Clips</li>
                <li>Improved leaderboard (more filters)</li>
                <li>Improved checkpoints</li>
                <li>Improved website (map pages and full maplist)</li>
                <li>Basic points system</li>
                <li>Basic Discord integration</li>
            </ul>
            <h3 className="font-bold">v1.0</h3>
            <ul className="list-disc pl-8 mb-4">
                <li>Shop (tied to points)</li>
                <li>Challenges (global and map)</li>
                <li>Improved leaderboard (even more filters)</li>
                <li>Improved website (users, tutorials)</li>
                <li>Customizable HUDs</li>
                <li>And more to be announced features</li>
            </ul>
        </>
    )
}