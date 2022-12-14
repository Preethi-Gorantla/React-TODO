import { Fragment } from "react";
import { Checkbox, TodoItem,Image, TodoItemContainer, Hr, Label } from "./styles";
import cross from './cross.svg';

export const TodoList = (props) => {
    const data = props.items;
    const handleChecked = (id) => {
        for(let i of data){
            if(i.id === id){
                i.checked = !i.checked;
            }
        }
        console.log("data",data)
        props.handleUpdates(data)
    }

    const handleDelete = (val) => {
        for(let i of data){
            if(i.id === val.id){
                data.splice(data.indexOf(i),1);
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
                                    <Checkbox type="checkbox" setTheme={props.isTheme}
                                    onChange={event => handleChecked(item.id)} id={item.id} value={item.text} fill='hsl(235, 21%, 11%)'/> 
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