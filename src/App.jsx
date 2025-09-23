
import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './Components/Navbar'

import { Outlet } from 'react-router';
import Footer from './Components/Footer';
import ChatBot from './Components/ChatBot';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);


  return (
    
   
      
    <div className='rubik' >
  <div className="sticky top-0 left-0 z-50 w-full  ">
    <Navbar setTheme={setTheme} />
  </div>

  <div className="min-h-screen w-full relative rubik pt-15 space-y-4">
    {/* Background grid */}
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, ${
            theme === "dark" ? "#374151" : "#e2e8f0"
          } 1px, transparent 1px),
          linear-gradient(to bottom, ${
            theme === "dark" ? "#374151" : "#e2e8f0"
          } 1px, transparent 1px)
        `,
        backgroundSize: "20px 30px",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
        maskImage:
          "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
      }}
    />
    

   <Outlet/>
  </div>
  <Footer/>
  <ChatBot/>
</div>


  
  )
}

export default App
