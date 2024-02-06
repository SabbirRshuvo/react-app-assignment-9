import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Componets/Home/Home";
import Reviews from "./Componets/Reviews/Reviews";
import NotFound from "./Componets/NotFound/NotFound";
import Dashboard from "./Componets/Dashboard/Dashboard";
import Blogs from "./Componets/Blogs/Blogs";
import About from "./Componets/About/About";
import Header from "./Componets/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/reviews" ele
        ={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
