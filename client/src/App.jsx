import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardSample from "./pages/CardSample";
import SimpleWebpage from "./pages/SimpleWebpage";
import Evento from "./pages/Evento";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cardsample" element={<CardSample />} />
        <Route path="/simplewebpage" element={<SimpleWebpage />} />
        <Route path="/evento" element={<Evento />} />
      </Routes>
    </BrowserRouter>
  );
}
