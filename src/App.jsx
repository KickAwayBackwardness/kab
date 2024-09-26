import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Client/Home";
import MainLayout from "./layouts/MainLayout";
import Newspaper from "./pages/Client/Newspaper";
import SpecificNews from "./pages/Client/SpecificNews";
import AdminLayout from "./layouts/AdminLayout";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import AddNewPost from "./pages/Admin/AddNewPost";

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
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<HomeAdmin />} />
        <Route path="add-new-post" element={<AddNewPost />} />
      </Route>
    </Routes>
  );
}

export default App;
