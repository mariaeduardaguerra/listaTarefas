import React, {useState} from 'react'
import PropTypes from "prop-types"
import "./style.css"

function AddTask({onAddTask}) {

  const ENTER_KEY = 13,
  ESCAPE_KEY = 27

  const [value, setValue] = useState()

  const erase = () => {
    setValue("")
  }

  const submit = () => {
    onAddTask(value)
    erase()
  }

  const keyPressed = (event) => {
    if(event.which === ENTER_KEY){
      submit()
    }
    if(event.which === ESCAPE_KEY){
      erase()
    }
  }

  return (
    <input
      className='new-todo'
      placeholder='Adicionar nova tarefa...'
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onKeyDown={(event) => keyPressed(event)}
    />
  )     
}

AddTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
}

export default AddTask