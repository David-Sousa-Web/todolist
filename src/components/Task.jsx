import { Trash } from '@phosphor-icons/react'
import React from 'react'
import './Task.css'

export default function Task({ content, onDeleteTask, onCompleteTask}) {

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  function handleChecked(event) {
    const checked = event.target.checked;
    onCompleteTask(checked);
  }

  return (
    <div className='task-container'>
      <input type="checkbox" className='check-task' onChange={handleChecked}/>
      <p className='p-task'>{content}</p>
      <button className='trash-button' title='deletar task' onClick={handleDeleteTask}>
        <Trash color="#808080" width={24} height={24} className='trash-icon'/>
      </button>
    </div>
  )
}
