import React from 'react'
import "../styles/sidebar.css"

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <select name="" id="">
            <option value="">Filter by year</option>
            <option value="">before 2000</option>
            <option value="">2000-2010</option>
            <option value="">After 2010</option>
        </select>
    </div>
  )
}
