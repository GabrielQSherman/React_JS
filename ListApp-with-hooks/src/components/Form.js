import React, { useState } from 'react'

import { defaultForm } from  '../data/styles'

export default function Form(props) {

  const inputs = props.inputs === undefined || !Array.isArray(props.inputs) ? [] : props.inputs;

  const intialState = inputs.reduce(function (allInputs, input) { 
    allInputs[input.name] = ''
    return allInputs
  }, {})

  const [data, setData] = useState(intialState)

  return (
    <form
      style={{...defaultForm, ...props.style}}
    >

      {inputs.map( input => {
        return (
          <input
          
          placeholder={input.ph}
          name={input.name}
          onChange={ ( e => {
              const 
              changedInput = e.target,
              name =  e.target.name,
              value = changedInput.value,
              newData =  {...data};
                
              newData[name] = value
                
              setData(newData)
            })
          }
          
          />
        )
      })}

    </form>
  )
}
