import {v1} from 'uuid'

import React, { useContext, useState } from 'react'

import { defaultForm, defaultInput } from  '../data/styles'

import { ThemeContext } from '../contexts/ThemeContext'
import { useListContext } from '../contexts/ListContext';

const uuid = v1

export default function NewItemForm(props) {


  const [data, setData] = useState('')
  const {lists, updateLists} = useListContext()
  const {isDark} = useContext(ThemeContext); 

  const styles = {
    inputTheme: {
      color: isDark ? 'white' : 'black',
      backgroundColor: !isDark ? 'white' : 'black'
    },

    formTheme: {

    }
  }

  const submitNewItem = e => {
    const 
    changedInput = e.target,
    value = changedInput.value;
    setData(value)
  }

  return (
    <form
      style={{...defaultForm, ...styles.formTheme, ...props.style}}
      onSubmit={ (e) => {
        e.preventDefault()
        if (data.trim() !== '') {
          const newLists = lists.map( list => {
            if (list.listId === props.listId) {
              return {...list, data: [...list.data,{text: data, id: uuid()}]}
            } else {
              return list
            }
            
          })
          updateLists(newLists)
          setData('')
        } else {
          alert('Enter Something To Add To The List')
        }
      }}
    >

          <input
          style={{...defaultInput, ...styles.inputTheme}}
          placeholder={'Enter A '+props.dataName}
          name='text'
          value={data}
          onChange={submitNewItem}
          />
      <button
        style={{...defaultInput, ...styles.inputTheme, cursor: 'pointer'}}
      >
        { 'Add New ' + props.dataName}
      </button>
    </form>
  )
}
