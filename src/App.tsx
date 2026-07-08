import { HashRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Trabalho from "./pages/Trabalho";
import Contato from "./pages/Contato";

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-svh bg-ink">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trabalho" element={<Trabalho />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </AnimatePresence>
      </div>
    </HashRouter>
  );
}
