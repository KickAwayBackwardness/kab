import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Newspaper from "./pages/Newspaper";
import SpecificNews from "./pages/SpecificNews";
import ADMIN from "./pages/ADMIN";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="newspaper">
          <Route index element={<Newspaper />} />
          <Route path=":slug" element={<SpecificNews />} />
        </Route>
      </Route>

      {/* ADMIN */}
      <Route path="/admin">
        <Route index element={<ADMIN />} />
      </Route>
    </Routes>
  );
}

export default App;
