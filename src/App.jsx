
import './App.css'

function App() {
  

  return (
    <>
   
      
      <div className="min-h-screen w-full bg-[#f8fafc] relative">
  {/* Bottom Fade Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
      backgroundSize: "20px 30px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
    }}
  />
     <h1 className='text-primary ' >Vite + React</h1>
      <p className='text-secondary text-4xl font-bold'>hello</p>
</div>



    </>
  )
}

export default App
