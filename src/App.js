import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';

import Home from "./components/Home/Home/Home";
import Blogs from "./components/Home/Blogs/Blogs";


function App() {
  return (
    <div className="w-100">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
