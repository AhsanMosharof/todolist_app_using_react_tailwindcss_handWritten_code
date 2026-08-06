import './App.css'
import Navbar from './component/navbar'
import { useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  useEffect(() => {

    let todoString= localStorage.getItem("todos")
    if(todoString){
     let todos=JSON.parse(localStorage.getItem("todos"))

      setTodos(todos);
    }
  },[])
  


  const saveToLS = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos))
  }

  const handleAdd = () => {
    let newTodos = [...todos, { id: uuidv4(), todo, iscompleted: false }];
    setTodos(newTodos);
    setTodo("");
    saveToLS(newTodos);
  }

  const changeHandler = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => item.id === id);
    let newTodos = [...todos]
    newTodos[index].iscompleted = !newTodos[index].iscompleted;
    setTodos(newTodos)
    saveToLS(newTodos);
  }

  const handleEdit = (e, id) => {
    let t = todos.find(item => item.id === id);
    setTodo(t.todo);
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveToLS(newTodos);
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => item.id != id)
    setTodos(newTodos);
    saveToLS(newTodos);
  }


  return (
    <>

      <Navbar />

      <div className="container mx-auto  text-center bg-slate-700 py-3 text-white h-screen">

        <h1 className='font-bold text-2xl text-white' >Manage your tasks</h1>



        <div className='flex justify-center todobox  bg-slate-700 text-white'>

          <div className='addTodo my-3 text-left text-white w-1/2'>

            <h2 className='font-bold text-lg mb-2'>Add Todo</h2>


            <div className="flex gap-2">

       

              <input onChange={changeHandler} value={todo} type="text" className='w-full rounded-md px-3 py-1 bg-white text-black outline-none focus:ring-2 focus:ring-indigo-500' placeholder="Enter a new task " />

              <button onClick={handleAdd} className='bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 rounded-md font-bold transition-all'>Add</button>
            </div>

            <h2 className='font-bold text-lg mb-2 mt-4'>Your Todos</h2>

            <div className="todos w-full">

              {todos.length === 0 && <div className="m-5 text-gray-300">No Todos to display</div>}

              {todos.map(item => {
                return (
                  <div key={item.id} className="todo flex justify-between items-center my-3 bg-slate-600 px-4 py-2 rounded-md">

                    <div className="flex items-center gap-3">
                      <input onChange={handleCheckbox} name={item.id} type="checkbox" checked={item.iscompleted} className="cursor-pointer w-4 h-4" />
                      <div className={item.iscompleted ? "line-through text-gray-400" : ""}>{item.todo}</div>
                    </div>


                    <div className="button flex gap-2">
                      <button onClick={(e) => handleEdit(e, item.id)} className='bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 rounded-md font-bold transition-all'>Edit</button>
                      <button onClick={(e) => handleDelete(e, item.id)} className='bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 rounded-md font-bold transition-all'>Delete</button>
                    </div>

                  </div>
                )
              })}
            </div>

          </div>




        </div>

      </div>
    </>
  )
}

export default App
