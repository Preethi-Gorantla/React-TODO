import { useState } from "react"
import {  TodoItem } from "../TodoList/styles"
import { AddTask, FormEle, CardContainer } from "./styles"
import {Actions} from '../Footer/Actions'

export const AddItem = (props) => {
    const isTheme = props.isTheme
    const dummyData=[{
        id: 1,
        text:'Wakeup Early in the Morning',
        checked:false
    },{
        id:2,
        text:'Focus',
        checked:false
    }
]

    const[items,setItems] = useState(dummyData)
    const [newTask,setNewTask] = useState({})
    const [count,setCount] = useState(items.length)
    
    const handleTask = (event) => {
        setNewTask("")
         setNewTask({id:Math.random(),
            text:event.target.value,
            checked:false})
    }

    const handleNewTask = (event) => {
        event.preventDefault()
        setItems([...items,newTask])
        setCount(items.length+1)
    }

    const handleUpdateTask = (newUpdate) => {
        setItems(newUpdate)
        setCount(count-1)
    }
    
    return(
        <CardContainer>
        <FormEle onSubmit={handleNewTask}>
           <AddTask isTheme={isTheme} type='text' placeholder="Create new todo" onChange={handleTask}/> 
        </FormEle>

        {items.length === 0 ? (
            <TodoItem isLength={items.length>0} isTheme={isTheme}>Start Adding your goals</TodoItem>) :''}
        <Actions isTheme={isTheme} items={items} handleUpdate={handleUpdateTask} count={count}/>
        </CardContainer>
    )
}