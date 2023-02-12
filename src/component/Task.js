import React from 'react'
import PropTypes from 'prop-types'
import "./task.css"

export default function Task(props) {
  return (
    <div className='task'>
        <h3>{props.id}</h3>
        <h3>{props.description}</h3>
        <h3>{props.isdone}</h3>

    </div>
  )
}
