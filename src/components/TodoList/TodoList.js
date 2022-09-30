import { Fragment, useState } from "react";
import { Checkbox, TodoItem,Image, TodoItemContainer, Hr, Label } from "./styles";
import cross from './cross.svg';

export const TodoList = (props) => {
    const data = props.items;
    const [deleted,setDeleted] = useState(false);
    const handleChecked = (id) => {
        for(let i of data){
            if(i.id === id){
                i.checked = !i.checked;
            }
        }
        props.handleUpdates(data)
    }

    const handleDelete = (val) => {
        for(let i of data){
            if(i.id === val.id){
                data.splice(data.indexOf(i),1);
                setDeleted(true)
                //props.handleUpdate(true)
                break
            }
        }
       props.handleUpdates(data,true)
    }

    return(
            <TodoItemContainer >
                    {data.map((item) => 
                        <Fragment key={item.id}>
                            <TodoItem  isTheme={props.isTheme} >
                                <Label htmlFor={item.id} isClicked={item.checked}> 
                                    <Checkbox type="checkbox" setTheme={props.isTheme} checked={item.checked}
                                    onChange={event => handleChecked(item.id)} id={item.id} value={item.text}/> 
                                    {item.text}
                                </Label> 
                            <Image src={cross} alt="" onClick={() => handleDelete(item)}/>
                        </TodoItem>
                        <Hr isTheme={props.isTheme}></Hr>
                        </Fragment>
                        ) }
            </TodoItemContainer>
    )
} 