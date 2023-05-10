import { Trash } from '@phosphor-icons/react'
import React from 'react'
import './Task.css'

export default function Task() {
  return (
    <div className='task-container'>
      <input type="checkbox" className='check-task' />
      <p className='p-task'>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames</p>
      <button className='trash-button' title='deletar task'>
        <Trash color="#808080" width={24} height={24} />
      </button>
    </div>
  )
}
