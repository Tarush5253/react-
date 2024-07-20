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
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full min-h-screen flex flex-col'>
        <Header />
        <main className="flex-grow p-4">
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
