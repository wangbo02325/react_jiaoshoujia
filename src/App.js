import React, {Component} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './css/App.css'

class App extends Component {

    state= {todos:[
            {id:'001',name:'吃饭',done:true},
            {id:'002',name:'睡觉',done:false},
            {id:'003',name:'敲代码',done:true}
        ]}

    //用于添加一个todo
    addTodo =(todoOj)=>{
       //获取原todos
        const {todos} = this.state
        //追加一个todo
        const newTodos =[todoOj,...todos]
        this.setState({todos:newTodos})
    }

        //用于更新选中状态
    updateTodo=(id,done)=>{
         //    获取todos
        const {todos} = this.state
        //匹配处理数据
        const newTodos = todos.map((todoObj)=>{
            if (todoObj.id ===id)
                return {...todoObj,done}
            else
                return  todoObj;
        });
        this.setState({todos: newTodos})
    }

    deleteTodo=(id)=>{
    //    获取todos
        const {todos} = this.state
    //    删除指定id的todo对象
        const  newTodos=todos.filter((todoObj)=>{
            return todoObj.id !==id
        })
    //    更新状态
        this.setState({todos:newTodos})
    }

    //是否全选
    checkAllTodo=(done)=>{
        //    获取todos
        const {todos} = this.state
    //    加工数据
        const newTodos = todos.map((todoObj)=>{
            return {
                ...todoObj,done
            }
        });
    //    更新状态
        this.setState({todos: newTodos})
    }

    //清除所有已完成的
    clearAllFinsh =()=>{
        //    获取todos
        const {todos} = this.state
    //    过滤数据
        const newTodos = todos.filter((todoObj) =>{
            return todoObj.done ===false
        });
        //    更新状态
        this.setState({todos: newTodos})

    }

    render() {
        const {todos} =this.state
        return (
            <div >
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header  addTodo={this.addTodo}/>
                        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllFinsh={this.clearAllFinsh}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;