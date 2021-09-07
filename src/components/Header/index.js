import React, {Component} from 'react';
import ProTypes from 'prop-types'
import {nanoid} from "nanoid";
import './index.css'
class Header extends Component {

    static propTypes ={
        //对接受的props进行类型，必要性的限制，
        addTodo:ProTypes.func.isRequired
    }
    //绑定事件元素
    handleKeyUp =()=>{
        // eslint-disable-next-line no-restricted-globals
        const {keyCode,target} = event;
        // eslint-disable-next-line no-restricted-globals
        //判断是否是回车按键
        if (keyCode !==13)return
        //添加的todo不能为空
        if (target.value.trim() ===''){
            alert('输入不能为空!')
            return;
        }
        // eslint-disable-next-line no-restricted-globals
        const todoObj ={id:nanoid(),name:target.value,done:false}
       //将todoObj传递给App
        this.props.addTodo(todoObj)
        target.value=''

    }
    render() {
        return (
                <div className="todo-header">
                    <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
                </div>
        );
    }
}

export default Header;