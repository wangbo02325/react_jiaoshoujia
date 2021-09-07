import React, {Component} from 'react';
import Item from "../Item";
import './index.css'
import ProTypes from "prop-types";
class List extends Component {

    static propTypes ={
        //对接受的props进行类型，必要性的限制，
        todos:ProTypes.array.isRequired,
        updateTodo:ProTypes.func.isRequired,
        deleteTodo:ProTypes.func.isRequired
    }

    render() {
        const {todos,updateTodo,deleteTodo} = this.props;
        return (
            <ul className="todo-main">
                {
                    todos.map((todo)=>{
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                })
                }
            </ul>
        );
    }
}

export default List;