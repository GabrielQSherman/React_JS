import React, { useState } from 'react'

import { defaultForm } from  '../data/styles'

export default function Form(props) {

  const inputs = props.inputs === undefined || !Array.isArray(props.inputs) ? [] : props.inputs;

  const intialState = inputs.reduce( (allInputs, input) => { 
    allInputs[input.name] = ''
    return allInputs
  }, {})

  const [data, setData] = useState(intialState)

  return (
    <form
      style={{...defaultForm, ...props.style}}
      onSubmit={ (e) => {
        e.preventDefault()
        props.setFunc( p => [...p, props.inputComplier(data)])
      }}
    >

      {inputs.map( input => {
        return (
          <input
          
          placeholder={input.ph}
          name={input.name}
          onChange={ ( 
            e => {
              const 
              changedInput = e.target,
              name =  changedInput.name,
              value = changedInput.value,
              newData =  {...data, [name]: value};

              setData(newData)
            })
          }
          
          />
        )
      })}
      <button>
        { 'Add New ' + props.dataName}
      </button>
    </form>
  )
}
