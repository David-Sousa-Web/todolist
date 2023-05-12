import { Trash } from '@phosphor-icons/react'
import React from 'react'
import './Task.css'

export default function Task({ content, onDeleteTask }) {

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  return (
    <div className='task-container'>
      <input type="checkbox" className='check-task' />
      <p className='p-task'>{content}</p>
      <button className='trash-button' title='deletar task' onClick={handleDeleteTask}>
        <Trash color="#808080" width={24} height={24} />
      </button>
    </div>
  )
}
