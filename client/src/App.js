import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { SignIn } from "./pages/SignIn"
import { Home } from "./pages/home/Home"
import { RestaurantPage } from './pages/RestaurantPage';
import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {
  document.body.style.overflow = "hidden";
  return (
    <ProSidebarProvider>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
      </Routes>
    </ProSidebarProvider>
  );
}

export default App;