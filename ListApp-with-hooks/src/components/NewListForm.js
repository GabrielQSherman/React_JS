import {v1} from 'uuid'

import React, { useContext, useState } from 'react'

import { defaultForm, defaultInput } from  '../data/styles'

import { ThemeContext } from '../contexts/ThemeContext'
import { useListContext } from '../contexts/ListContext';


const uuid = v1

export default function NewListForm(props) {

  const inputs = props.inputs === undefined || !Array.isArray(props.inputs) ? [] : props.inputs;

  const intialState = inputs.reduce( (allInputs, input) => { 
    allInputs[input.name] = input.type === 'checkbox' ? false : ''
    return allInputs
  }, {})

  const [data, setData] = useState(intialState)
  const {lists, updateLists} = useListContext()
  const {isDark} = useContext(ThemeContext); 

  // console.log(lists);
  const inputOnChange = e => {
                
    const 
    changedInput = e.target,
    name = changedInput.name,
    value = changedInput.value;
    let
    newData;
    if (changedInput.type === 'text') {
      newData={...data, [name]: value}
    } else {
      newData={...data, [name]: !data[name]}
    }
    setData(newData)
  }

  const styles = {
    inputTheme: {
      color: isDark ? 'white' : 'black',
      backgroundColor: !isDark ? 'white' : '#222'
    },
    formTheme: {
      color: isDark ? 'white' : 'black'
    },
    div: {
      display: 'flex',
      flexDirection: 'column',
      color: isDark ? 'white' : 'black',
    }
  }

  return (
    <div
      style={{...styles.div}}
    >
      <h2>
        Add A New List
      </h2>
      <form
        style={{...defaultForm, ...styles.formTheme, ...props.style}}
        onSubmit={ (e) => {
          e.preventDefault()
          for (const key in data) {
            const value = data[key];  
            if (value === undefined || (typeof value === 'string' && value.trim() === '')) {
              alert('You were missing something, try again.')
              return
            }
          }
          const newList = [...lists, {...data, data: [], listId: uuid()} ]
          updateLists(newList)
          setData(intialState)
        }}
      >

        {inputs.map( (input, ind) => {
          console.log(input.name, typeof data[input.name]);
          return (
            <div 
              style={{...styles.div}}
              key={ind}
            >
              <label>{input.label}</label>
              <input
              style={{...defaultInput, ...styles.inputTheme}}
              placeholder={input.ph}
              name={input.name}
              type={input.type || 'text'}
              value={typeof data[input.name] == 'string' ? data[input.name] : undefined}
              checked={typeof data[input.name] == 'boolean' ? data[input.name] : undefined}
              onChange={inputOnChange}

              />
            </div>
          )
        })}
        <button
          style={{...defaultInput, ...styles.inputTheme, cursor: 'pointer'}}
        >
          { 'Add New List'}
        </button>
      </form>
    </div>
  )
}
