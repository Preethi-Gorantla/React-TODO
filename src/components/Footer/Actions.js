import { Button,Footer,Count} from "../TodoList/styles"
import { Fragment, useEffect, useState } from "react"
import { TodoList } from "../TodoList/TodoList"

export const Actions = (props) => {
    const isTheme = props.isTheme
    const items = props.items
    const [all,setAll] = useState(true)
    const [active,setActive] = useState(false)
    const [activeTask,setActiveTask] = useState({})
    const [completedTask,setCompletedTask] = useState({})
    const [completed,setCompleted] = useState(false)
    const[count,setCount] = useState(props.count)

    useEffect(() => {
        setCount(props.count)
    },[props.count])

    console.log("count",count)
    console.log("propscount",props.count)
    const handleNewData = (newAdded,deleted) => {
        console.log("newAdded",newAdded,deleted)
        props.handleUpdate(newAdded,deleted)
    }

    const conditionFetch = (option) => {
        switch(option){
            case 'active': 
                setActive(true)
                setAll(false)
                setCompleted(false)
                const data=items.filter(item => !item.checked)
                setActiveTask(data)
                setCount(data.length)
                break
            case 'cmpltd':
                setAll(false)
                setCompleted(true)
                setActive(false)
                const cmpltd=items.filter(item => item.checked)
                setCompletedTask(cmpltd)
                setCount(cmpltd.length!==0 && cmpltd.length )
                break
            case 'clear':
                setAll(false)
                setCompleted(false)
                setActive(false)
                const cmpltData = items.filter(item => !item.checked)
                setCount(items.length - cmpltData.length) 
                props.handleUpdate(cmpltData)
                setCompletedTask([])
                break
            case 'all':
                setAll(true)
                setActive(false)
                setCompleted(false)
                setCount(count)
                break
            default:
                break
        }
    }

    return(
        <Fragment>
            {all &&  <TodoList items={props.items} isTheme={isTheme} handleUpdates={handleNewData}/>}
            {active &&  <TodoList items={activeTask} isTheme={isTheme}/>}
            {completed &&  <TodoList items={completedTask} isTheme={isTheme}/>}
            <Footer isTheme={isTheme}>
                <li><Count  isTheme={isTheme} >{completed ? 'no items left' : `${count} items left`}</Count></li>
                <li><Button isTheme={isTheme} type="button" 
                    onClick={() => conditionFetch('all')} isAll={all}>All
                    </Button>
                </li>
                <li><Button isTheme={isTheme} type="button" 
                    onClick={() => conditionFetch('active')} isActive={active}> Active
                    </Button>
                </li>
                <li><Button isTheme={isTheme} type="button"
                     onClick={() => conditionFetch('cmpltd')} isCmplt={completed}>Completed
                    </Button>
                </li>
                <li><Button isTheme={isTheme} type="button" 
                    onClick={() => conditionFetch('clear')}>Clear Completed
                    </Button>
                </li>
    </Footer>
    </Fragment>
    )
}