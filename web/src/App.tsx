import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Cod2 from "./pages/cod2/Cod2";
import Cod4 from "./pages/cod4/Cod4";
import Index from "./pages";
import { useEffect, useState } from "react";
import Cod2Roadmap from "./pages/cod2/Roadmap";
import Cod4Roadmap from "./pages/cod4/Roadmap";

export default function App() {

  const Links = () => {
    const location = useLocation();

    const [paths, setPaths] = useState<string[]>([]);

    useEffect(() => {
      updateNav();
    }, [location.pathname])

    function updateNav() {
      let routes : string[] = new Array;
      routes = buildPaths();
      setPaths(routes);
    }

    function buildPaths() {
      let array = location.pathname.split("/");

      if (array[1] === "") {
        array = array.slice(1);
      }

      let route : string = "";
      let routes = new Array;
      for (const i in array) {
        route = route + "/" + array[i];
        if (parseInt(i) === 1) {
          route = route.substring(1);
        }
        routes.push(route);
      }
      return routes;
    }

    function buildLabel(string: string) {
      if (string === "/") {
        return formatString("home");
      } else {
        let pages = string.split("/");
        return formatString(pages[pages.length - 1]);
      }
    }

    function formatString(string: string) {

      // First letter uppercase
      string = string.charAt(0).toUpperCase() + string.slice(1);

      // D uppercase in "Cod" strings
      if (string.includes("Cod")) {
        let chars = string.split("");
        chars[chars.indexOf("d")] = chars[chars.indexOf("d")].toUpperCase();
        string = chars.join("");
      }

      return string;
    }

    return (
      <>
        {paths.map((object,i) => {
          return typeof i+1 !== "undefined" && i !== 0 ?
          <>
            <li key={`${object}_divider`}>/</li>
            <li key={object}><Link className="hover:underline" to={paths[i]}>{buildLabel(paths[i])}</Link></li>
          </>
          :
          <li key={object}><Link className="hover:underline" to={paths[i]}>{buildLabel(paths[i])}</Link></li>;
        })}
      </>
    )
  }

  return (
    <Router>
      <header className="mx-8 md:mx-16 lg:mx-32 xl:mx-64">
        <img className="h-32 w-32 m-auto my-4" src="logo.png" alt="opencj-logo" />
        <nav className="h-12 gap-x-4">
          <ul className="flex h-full justify-left pl-4 items-center gap-x-4 border-y-4 border-cyan">
            <Links />
          </ul>
        </nav>
      </header>
      <main className="mx-8 md:mx-16 lg:mx-32 xl:mx-64">
        <Routes>
          <Route path="/" element={<Index />} />
          {/*<Route path="/cod2" element={<Cod2 />} />
          <Route path="/cod2/roadmap" element={<Cod2Roadmap />} />*/}
          <Route path="/cod4" element={<Cod4 />} />
          <Route path="/cod4/roadmap" element={<Cod4Roadmap />} />
        </Routes>
      </main>
      <footer className="mt-auto border-t-4 border-cyan mx-8 md:mx-16 lg:mx-32 xl:mx-64 flex justify-center items-center h-24">
        <h1 className="font-bold">OpenCJ</h1>
      </footer>
    </Router>
  );
}