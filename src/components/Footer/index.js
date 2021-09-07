import React, {Component} from 'react';
import './index.css'
class Footer extends Component {

    //全选checkbox的回调
    handleCheckAll=(event)=>{
        this.props.checkAllTodo(event.target.checked)
    }

    //删除全部选中的回调
    handleClearAllFinsh =()=>{
        this.props.clearAllFinsh()
    }
    render() {
        const {todos} =this.props
        //已完成的个数
        const doneCount =todos.reduce((pre,todo)=>{
            return pre+(todo.done ?1 : 0)
        },0)
       // 总数
       const total = todos.length;

        // 对数组进行条件统计
        return (
            <div className="todo-footer">
                <label>
                    <input onChange={this.handleCheckAll} checked={doneCount ===total && total !==0 ? true : false} type="checkbox"/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button  onClick={this.handleClearAllFinsh} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;