import React from 'react'
import './Header.css'
import Icon from '../Logo'
import NewTask from './NewTask'


export default function Header() {
  return (
    <>
      <header className='header'>
        <Icon />
      </header>

      <NewTask />
    </>
  )
}
