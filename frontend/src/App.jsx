import './App.css'
import Navbar from './component/navbar'

function App() {
  return (
    <>
      
      <Navbar />
      
      <div className="container mx-auto  text-center bg-slate-700 py-3 text-white  ">

          <h1 className='font-bold text-2xl text-white' >Manage your tasks</h1>


        </div>
        <div className='flex justify-center todobox  bg-slate-700 text-white'>

        <div className='addTodo my-3 text-left text-white w-1/2'>

          <h2 className='font-bold text-lg mb-2'>Add Todo</h2>
          <div className="flex gap-2">
            <input type="text" className='w-full rounded-md px-3 py-1 bg-white text-black outline-none focus:ring-2 focus:ring-indigo-500' placeholder="Enter a new task..." />
            <button className='bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 rounded-md font-bold transition-all'>Add</button>
          </div>

        </div>

      


      </div>


    </>
  )
}

export default App
