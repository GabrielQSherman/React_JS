import React, { useState } from 'react'

export default function Form(props) {

  const input = props.inputs === undefined || !Array.isArray(props.inputs) ? [] : props.inputs;

  const intialState = input.reduce(function (allInputs, input) { 
    allInputs[input.name] = ''
    return allInputs
  }, {})

  console.log(intialState);
  
  const [data, setData] = useState(intialState)

  return (
    <form>

    </form>
  )
}
