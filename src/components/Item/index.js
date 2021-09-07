import React, {Component} from 'react';
import './index.css'
class Item extends Component {

    state ={mouse:false}

    //鼠标移入或移出的回调
    handleMouse =(flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }

    //todo是否勾选
    handleChecked=(id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
    }

    //todo是否勾选
    handleDelete=(id)=>{
        if (window.confirm('确定删除吗？')){
            this.props.deleteTodo(id)
        }
    }
    render() {
        const {id,name,done} =this.props
        const {mouse} = this.state
        return (
            <li  style={{backgroundColor : this.state.mouse ? 'white' : '#ddd'}} onMouseLeave={this.handleMouse(true)} onMouseEnter={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleChecked(id)} />
                    <span>{name}</span>
                </label>
                <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{display: mouse ? 'none' : 'block'}}>删除</button>
            </li>
        );
    }
}

export default Item;