import { Button, TextField } from '@mui/material'
import { nanoid } from 'nanoid';
import React from 'react'
import { useState } from 'react'
import { useRecoilState } from 'recoil';
import { atomTasks } from '../../data/atom';
import styles from './Task.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';



export default function Task() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useRecoilState(atomTasks)
  const [isVisible, setIsVisible] = useState(false)
  function handleAddTasks(e) {
    e.preventDefault()
    if (input == '') {
      Swal.fire("Please enter a task to continue")
      return;
    }
    const newTask = {
      task: input,
      id: nanoid(),
      isEditable: false
    }
    setTasks([...tasks, newTask])
    setInput("")
  }
    function handleDelete(id) {
      const filteredTask = tasks.filter((ele) => ele.id !== id)
      setTasks(filteredTask)
    }
 
    return (
      <div className={styles.wrapper}>
        <div className={styles.mainForm}>
          <form className={styles.inputForm} onSubmit={(e) => handleAddTasks(e)} >
            <TextField id={styles.input} value={input} type='text' variant='outlined' onChange={(e) => setInput(e.target.value)} label='Add task' /><br/>
            <Button onClick={handleAddTasks} variant='contained'>Add task</Button>
          </form>
        </div>
        <div className={styles.taskContainer}>
          {tasks.map((ele) => (
            <div className={styles.displayDiv}>
              <span className={styles.taskTitle}>{ele.task}</span>
            
              <div className={styles.btbDiv}>
                <DeleteIcon onClick={() => handleDelete(ele.id)} color='red' />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

