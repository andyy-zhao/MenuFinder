import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { SignIn } from "./pages/SignIn"
import { Home } from "./pages/home/Home"
import { Test } from "./pages/Test"
import { RestaurantPage } from './pages/RestaurantPage';
import { FeaturedPage } from './components/featuredPage/FeaturedPage';
import { ProSidebarProvider } from 'react-pro-sidebar';
import  RestaurantData from "./restaurants.json";

function App() {
  {document.body.style.overflow = "hidden"};
  let numRestaurants = RestaurantData[0].restaurants.length - 1;
  const featuredNum = Math.floor(Math.random() * ({numRestaurants} - 0 + 1)) + 0;
  return (
    <ProSidebarProvider>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/featured" element={<FeaturedPage mydata={RestaurantData[0].restaurants[featuredNum]}/>} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
      </Routes>
    </ProSidebarProvider>
  );
}

export default App;
