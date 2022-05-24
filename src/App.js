import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';

import Home from "./components/Home/Home/Home";
import Tools from "./components/Home/Tools/Tools";
import BusinessSummary from "./components/Home/BusinessSummary/BusinessSummary";
import Blogs from "./components/Home/Blogs/Blogs";
import MyPortfolio from "./components/Home/MyPortfolio/MyPortfolio";
import ToolDetails from './components/Home/ToolDetails/ToolDetails';

import Login from './components/Login/Login/Login';
import Signup from './components/Login/Signup/Signup';
import NotFound from './components/Shared/NotFound/NotFound';


function App() {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/tools" element={<Tools></Tools>}></Route>
        <Route path="/business" element={<BusinessSummary></BusinessSummary>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<MyPortfolio></MyPortfolio>}></Route>

        <Route path="/items/:id" element={<ToolDetails></ToolDetails>}></Route>


        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
