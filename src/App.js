import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Task, Contact } from './pages';
import Navbar from './Components/navbar/Navbar';
import { useRecoilState } from 'recoil';
import { atomContacts, atomTasks } from './data/atom';
function App() {

  const [contacts, setContacts] = useRecoilState(atomContacts)
  const [tasks, setTasks] = useRecoilState(atomTasks)

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
    console.log("useEffect running")
  }, [contacts])
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    console.log("useEffect running")
  }, [tasks])
    

  return (
    <div className='main'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/task' element={<Task/>}/>
      </Routes>


    </div>
  );
}

export default App;
