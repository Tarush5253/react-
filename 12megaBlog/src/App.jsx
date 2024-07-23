import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {login , logout } from './store/authSlice';
import authService from "./appwrite/auth";
import {Header , Footer} from "./components"
import {Outlet} from "react-router-dom";

function App() {
  const [loading , setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  useEffect(()=>{
    authService.getCurrentUser()
      .then((userData)=>{
        if(userData){
          dispatch(login(userData));
        }
        else{
          dispatch(logout())
        }    
      })
      .finally(()=> setLoading(false))
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400 overflow-y-scroll no-scrollbar'>
      <div className='w-full min-h-screen flex flex-col'>
        <Header />
        <main className="min-h-screen py-4 px-2 sm:p-4 lg:p-4 bg-[url('https://media.istockphoto.com/id/1422421435/photo/man-reading-business-email-newsletter-on-smartphone-man-looking-mailbox-customer-contract.jpg?s=1024x1024&w=is&k=20&c=utVHzN5ZElD-wJ-Y0kgBdR4Ows9dabHtfQUDNLib0uQ=')] bg-cover bg-center">
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
