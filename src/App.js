import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';

import Home from "./components/Home/Home/Home";
import Tools from "./components/Home/Tools/Tools";
import Blogs from "./components/Home/Blogs/Blogs";
import MyPortfolio from "./components/Home/MyPortfolio/MyPortfolio";
import ToolDetails from './components/Home/ToolDetails/ToolDetails';

import Login from './components/Login/Login/Login';
import Signup from './components/Login/Signup/Signup';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import NotFound from './components/Shared/NotFound/NotFound';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import MyOrders from './components/Dashboard/MyOrders/MyOrders';
import MyProfile from './components/Dashboard/MyProfile/MyProfile';
import { ToastContainer } from 'react-toastify';
import Users from './components/Dashboard/Users/Users';
import RequireAdmin from './components/Login/RequireAdmin/RequireAdmin';
import AddReview from './components/Dashboard/AddReview/AddReview';
import ManageProducts from './components/Dashboard/ManageProducts/ManageProducts';
import ManageOrders from './components/Dashboard/ManageOrders/ManageOrders';
import AddProduct from './components/Dashboard/AddProduct/AddProduct';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="tools" element={<Tools />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="portfolio" element={<MyPortfolio />} />

        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>} >

            <Route path="myOrders" element={<MyOrders></MyOrders>}></Route>
            <Route path="addReview" element={<AddReview></AddReview>}></Route>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
            <Route path="addProduct" element={<RequireAdmin><AddProduct></AddProduct> </RequireAdmin>}></Route>
            <Route path="manageProducts" element={<RequireAdmin><ManageProducts></ManageProducts> </RequireAdmin>}></Route>
            <Route path="manageOrders" element={<RequireAdmin><ManageOrders></ManageOrders> </RequireAdmin>}></Route>
        </Route>


        <Route path="tool/:id" element={
        <RequireAuth>
          <ToolDetails></ToolDetails>
          </RequireAuth>}></Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
