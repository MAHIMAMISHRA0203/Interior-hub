// App.jsx
import Categories from './Components/Categories';
import HeroPage from './Components/HeroPage';
import NavBar from './Components/NavBar';
import AboutPage from './pages/About/AboutPage';
import ExplorePage from './pages/Explore/ExplorePage';
import DesignersPage from './pages/Designers/DesignersPage';
import './style.css';
import {Routes,Route} from "react-router-dom"
import LivingRoomDesignsPage from './Components/LivingRoomDesignsPage';
import KitchenDesignsPage from './Components/KitchenDesignsPage';
import BedroomDesignsPage from "./Components/BedroomDesignsPage"
import BathroomDesignsPage from "./Components/BathroomDesignsPage"
import Login from "./pages/Login/Login.jsx"
import Register from "./pages/Login/Register.jsx"
import {Toaster} from "react-hot-toast";
const InteriorDesignPlatform = () => {



  return (
    <>
    <Toaster/>
    <div className="app">
     <NavBar/>
     <Routes>
      <Route path='/' element={<>
        <HeroPage/>
        <Categories/>
      </>}/>
      {/* <Route path='/' element={<Categories/>}/>
      <Route path='/' element={<NavBar/>}/> */}
      {/* <Route path="/explore" />*/}
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/explore' element={<ExplorePage/>}/>
      {/* <Route path='/home' element={<HeroPage/>}/> */}
      <Route path='/designers' element={<DesignersPage/>}/>
     </Routes>

     <Routes>
      <Route path='/living-room' element={<LivingRoomDesignsPage/>} />
      <Route path='/kitchen' element={<KitchenDesignsPage/>}/>
      <Route path='/bedroom' element={<BedroomDesignsPage/>}/>
      <Route path='/bathroom' element={<BathroomDesignsPage/>}/>
      
     </Routes>

     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
     </Routes>

     
    </div>
    </>

  );
};

export default InteriorDesignPlatform;