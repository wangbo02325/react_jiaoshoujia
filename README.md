todoList 案例相关知识点：

    1、拆分组件，实现静态组件，注意，className，style的写法
         html 中的class应改为  className style 应写成style={{ }}
    2、动态初始化列表，如何确定将数据放在那个组件的state中？
        ————某个组件使用：放在其自身的state中
        ————某些组件的使用，放在其父组件state中
    3、关于父子之间的通信问题：
        ————【父组件】给【子组件】传递数据时，通过props
        ————【子组件】给【父组件】传递数据时，通过props传递，要求父组件提前给子组件一个函数
        
    //父组件，用于添加一个todo
        addTodo =(todoOj)=>{
        //获取原todos
        const {todos} = this.state
        //追加一个todo
        const newTodos =[todoOj,...todos]
        this.setState({todos:newTodos})
        }    
        <Header  addTodo={this.addTodo}/>
    子组件
        const todoObj ={id:nanoid(),name:target.value,done:false}
         //将todoObj传递给App
        this.props.addTodo(todoObj)
        target.value=''


    4、注意defaultchecked和checked 的区别
        ————defaultchecked，适用于初次定义，后续操作就不起作用了
        ————checked全称适用，但是需要onChange配合
    5、状态在哪里，操作状态的方法就在那里


