import React from 'react'
import './NewTask.css'
import Iconmais from '../Iconmais'

export default function NewTask() {
  return (
    <div className='newtask-container'>
      <input className='newtask-input' placeholder='Adicione uma nova tarefa'/>
      <button className='newtast-button'>Criar <Iconmais /> </button>
    </div>
  )
}
