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
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import NotFound from './components/Shared/NotFound/NotFound';
import Dashboard from './components/Home/Dashboard/Dashboard';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/business" element={<BusinessSummary />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/portfolio" element={<MyPortfolio />} />

        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>} >
        </Route>

        <Route path="/tool/:id" element={<ToolDetails></ToolDetails>}></Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
