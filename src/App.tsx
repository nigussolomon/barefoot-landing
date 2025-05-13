import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import NewsPage from "./pages/news";
import Teams from "./pages/teams";
import Membership from "./pages/membrship";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/gallery/*" element={<Gallery />} />
        <Route path="/news/*" element={<NewsPage />} />
        <Route path="/teams/*" element={<Teams />} />
        <Route path="/membership/*" element={<Membership />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
