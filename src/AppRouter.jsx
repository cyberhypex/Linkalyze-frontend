import ShortenUrlPage from './components/ShortenUrlPage';
import { LandingPage } from './components/LandingPage';
import { AboutPage } from './components/AboutPage';
import NavBar from './components/NavBar';
import  Footer  from './components/Footer';
import RegisterPage  from './components/RegisterPage';
import { Toaster } from 'react-hot-toast';
import Login  from './components/LoginPage';
import { DashboardLayout } from './Dashboard/DashboardLayout';
import LoginPage from './components/LoginPage';
import { Routes , Route} from "react-router-dom";
const AppRouter=()=>{
    return (
<>
    <NavBar />
    <Toaster />
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/about' element={<AboutPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/dashboard' element={<DashboardLayout />} />
    </Routes>
    <Footer />
    </>
    
    );
}

export default AppRouter;


export const SubDomainRouter=()=>{
    return(
        <Routes>
       <Route path="/s/:url" element={<ShortenUrlPage />} />
     
    </Routes>
    )
}