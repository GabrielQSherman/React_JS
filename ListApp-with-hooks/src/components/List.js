import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { useListContext } from '../contexts/ListContext';
import NewItemForm from './NewItemForm'

export default function List(props) {

  const
  {isDark, light, dark} = useContext(ThemeContext),
  theme = isDark ? dark : light,
  {lists, updateLists} = useListContext()

  const listItems = lists.filter( l => l.listId === props.listId )[0].data;
  const TagType = props.listType === 'ordered' ? 'ol' : 'ul'

  const styles = {
    defaultTxt: {
      cursor: 'pointer',
      color: theme.txt
    }
  }

  const removeItem = (evnt => {
    updateLists(lists.map( 
      list => {
        if (list.listId === props.listId) {
          return {...list, data: list.data.filter(item => item.id !== evnt.target.id)}
        } else {
          return list
        }
      }  
    )
    )
  })

  const removeList = ( () => { updateLists(lists.filter( list => list.listId !== props.listId )) })
  const mouseOverTxt = ( evnt => {evnt.target.style.color = 'red'})
  const mouseLeaveTxt = ( evnt => {evnt.target.style.color = theme.txt})

  return (
    <div
      style={{
        background: theme.ui,
        borderRadius: 50,
        margin: 10,
      }}
    >
      <h1
        style={{ 
          ...styles.defaultTxt,       
          background: isDark ? 'black' : 'white',
          marginLeft: '10%',
          marginRight: '10%',
          borderRadius: 25, 
        }}
        onClick={removeList}
        onMouseOver={mouseOverTxt}
        onMouseLeave={mouseLeaveTxt}
        className='listTitle'
      >
        {props.title}
      </h1>
      <TagType>
        {listItems.map((e,i) => {
          return (
            <li
              style={{ ...styles.defaultTxt }}
              key={i}
              id={e.id || null}
              onClick={removeItem}
              onMouseOver={mouseOverTxt}
              onMouseLeave={mouseLeaveTxt}      
            >
             { e.text}
            </li>
          )
        })}
      </TagType>
      <NewItemForm 
        listId={props.listId}
        inputs={props.inputs}
        dataName={props.dataName}
      />
    </div>
  )
}
