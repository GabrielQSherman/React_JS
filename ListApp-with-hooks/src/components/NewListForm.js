import {v1} from 'uuid'

import React, { useContext, useState } from 'react'

import { defaultForm, defaultInput } from  '../data/styles'

import { ThemeContext } from '../contexts/ThemeContext'
import { useListContext } from '../contexts/ListContext';


const uuid = v1

export default function NewListForm(props) {

  const inputs = props.inputs === undefined || !Array.isArray(props.inputs) ? [] : props.inputs;

  const intialState = inputs.reduce( (allInputs, input) => { 
    allInputs[input.name] = ''
    return allInputs
  }, {})

  const [data, setData] = useState(intialState)
  const {} = useListContext()
  const {isDark} = useContext(ThemeContext); 

  const styles = {
    inputTheme: {
      color: isDark ? 'white' : 'black',
      backgroundColor: !isDark ? 'white' : 'black'
    },

    formTheme: {

    }
  }

  return (
    <form
      style={{...defaultForm, ...styles.formTheme, ...props.style}}
      onSubmit={ (e) => {
        e.preventDefault()
        for (const key in data) {
          const value = data[key];  
          if (value === undefined || value.trim() === '') {
            return
          }
        }
        props.setFunc( p => [...p, {...props.inputComplier(data), id: uuid()}])
      }}
    >

      {inputs.map( (input, ind) => {
        return (
          <input
          key={ind}
          style={{...defaultInput, ...styles.inputTheme}}
          placeholder={input.ph}
          name={input.name}
          onChange={ ( 
            e => {
              const 
              changedInput = e.target,
              name = changedInput.name,
              value = changedInput.value,
              newData= {...data, [name]: value};
              setData(newData)
            })
          }
          />
        )
      })}
      <button
        style={{...defaultInput, ...styles.inputTheme, cursor: 'pointer'}}
      >
        { 'Add New ' + props.dataName}
      </button>
    </form>
  )
}
