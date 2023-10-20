import React from 'react'
import PropTypes from "prop-types"
import { MdDelete } from "react-icons/md"
import "./style.css";

function List({todos, onRemove, onToggle}) {

  return (
    <ul className='todo-list'>
      {
        todos.map((item) => (
          <li key={item.id}>
            <span
              onClick={() => onToggle(item)}
              className={item.checked ? "checked" : ""}
            >{item.name}</span>
            <button
              type='button'
              onClick={() => onRemove(item)}
            >
              <MdDelete size={24} />
            </button>
          </li>
        ))
      }
    </ul>
  )
}

List.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default List