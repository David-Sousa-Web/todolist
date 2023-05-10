import React from 'react'
import './GroupTask.css'
import { ClipboardText } from '@phosphor-icons/react'

export default function GroupTask() {
  return (
    <section className='grouptask-container'>
      <div className='grouptask-header'>
        <p className='p-create'>Tarefas criadas <strong className='count-create'>0</strong></p>
        <p className='p-completed'>Concluidas <strong className='count-completed'>0</strong></p>
      </div>
        
      <div className='grouptask-content'>
        <ClipboardText color='#262626' width={54} height={54} className='cliptask'/>
        <span className='p-clip1'>Você ainda não tem tarefas cadastradas</span>
        <span className='p-clip2'>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </section>
  )
}
