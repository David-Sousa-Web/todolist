import React, { useState } from 'react'
import './GroupTask.css'
import { ClipboardText } from '@phosphor-icons/react'
import Task from './Task'
import Iconmais from '../Iconmais'

export default function GroupTask() {
  const [tasks, setTasks] = useState([
    'durma hj'
  ])

  const [newTask, setNewTask] = useState('')

  function HandleCreateNewTask(event) {
    event.preventDefault()

    setTasks([...tasks, newTask]);
    setNewTask('');
  }


  function deleteTask(taskToDelete) {
    const taskWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete
    });

    setTasks(taskWithoutDeletedOne);
  }

  function handleNewTaskChange(event) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }
  

  function handleNewTaskInvalid(event) {
    event.target.setCustomValidity('Esse campo é Obrigatório!!')
  }



  return (
    <section className='grouptask'>
      <form onSubmit={HandleCreateNewTask} className='newtask-container'>
        <input className='newtask-input' placeholder='Adicione uma nova tarefa' value={newTask} onChange={handleNewTaskChange} onInvalid={handleNewTaskInvalid} required/>
        <button className='newtast-button' type='submit' >Criar <Iconmais /> </button>
      </form>
      
      <div className='grouptask-container'>
        <div className='grouptask-header'>
          <p className='p-create'>Tarefas criadas <strong className='count-create'>0</strong></p>
          <p className='p-completed'>Concluidas <strong className='count-completed'>0</strong></p>
        </div>
          
        {tasks == 0 
        ?
        <div className='grouptask-content'>
          <ClipboardText color='#262626' width={54} height={54} className='cliptask'/>
          <span className='p-clip1'>Você ainda não tem tarefas cadastradas</span>
          <span className='p-clip2'>Crie tarefas e organize seus itens a fazer</span>
        </div>
        :
        <div className='grouptask-content'>
          {tasks.map(task => {
            return (
              <Task
              key={task} 
              content={task}
              onDeleteTask={deleteTask}
              />            
            )
          })}
        </div>}      
        

      </div>
    </section>
  )
}
