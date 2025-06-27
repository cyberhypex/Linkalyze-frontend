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
import PrivateRoute from './PrivateRoute';
import ErrorPage from './components/ErrorPage';
import Navbar from './components/NavBar';
const AppRouter=()=>{
    const hideHeaderFooter=location.pathname.startsWith("/s");
    return (
<>
    {!hideHeaderFooter && <Navbar />}
    <Toaster />
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/about' element={<AboutPage />} />
      <Route path='/register' element={<PrivateRoute publicPage={true}><RegisterPage /></PrivateRoute>} />
      <Route path='/login' element={<PrivateRoute publicPage={true}><LoginPage /></PrivateRoute>} />
      <Route path='/s/:url' element={<ShortenUrlPage />} />
      <Route path='/dashboard' element={<PrivateRoute publicPage={false}><DashboardLayout /></PrivateRoute>} />
      <Route path='*' element={<ErrorPage message="We can't find the page you are looking for"/>} />
    <Route path='/error' element={<ErrorPage />} />
    </Routes>
    {!hideHeaderFooter && <Footer />}
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