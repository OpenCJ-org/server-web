import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IndexCoD2 from "./routes/cod2/index";
import IndexCoD4 from "./routes/cod4/index";
import Index from "./routes";
import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    console.log("test");
  });

  return (
    <Router>
      <header className="mx-32">
        <img className="h-64 w-64 m-auto my-8" src="https://opencj.org/img/icons/opencj.png" alt="opencj-logo" />
        <nav className="h-12 gap-x-4">
          <ul className="flex h-full justify-left pl-4 items-center gap-x-4 border-y-4 border-cyan">
            <li><Link className="hover:underline" to="/">Home</Link></li>
          </ul>
        </nav>
      </header>
      <main className="mx-32">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cod2" element={<IndexCoD2 />} />
          <Route path="/cod4" element={<IndexCoD4 />} />
        </Routes>
      </main>
      <footer className="mt-auto border-t-4 border-cyan mx-32 flex justify-center items-center h-24">
        <p>OpenCJ</p>
      </footer>
    </Router>
  );
}
