'use strict';

var App = React.createClass({
    getInitialState: function (){
      return {
        title:'My app',
        text:'',
        todos:[
          {id:1,name:"Leonardo",age:20,user:"Leocp"},
          {id:2,name:"Neide",age:21,user:"Neidesg"},
          {id:3,name:"Nathalia",age:19,user:"nathsg"}
        ]
      }
    },
    render: function () {
        return (
            <div>
              <div className="jumbotron">
              <h1>{this.state.title}</h1><br/>
              <TodoForm onTodoAdd={this.handleTodoAdd}/>
              <TodoList todos={this.state.todos}/>
              </div>
            </div>
        )
    },
    handleTodoAdd: function (obj){
      obj.id = this.state.todos.length + 1;
      this.setState({todos:this.state.todos.concat(obj)})
      console.log(this.state);
    }
});

var TodoForm = React.createClass({

    render: function () {
        return (
            <form >
              <div className="form-group">

                <div className="col-sm-4">
                <label>Name</label>
                <input type="text" ref="name" className="form-control"/><br/>
                </div>

                <div className="col-sm-4">
                <label>Age</label>
                <input type="text" ref="age" className="form-control"/><br/>
                </div>

                <div className="col-sm-4">
                <label>Username</label>
                <input type="text" ref="user" className="form-control"/><br/>
                </div>

                <div className="col-sm-4">
                <button onClick={this.onClick} className="btn btn-primary">Enviar</button>
                </div>

              </div>
            </form>

        )
    },

    onClick: function (e){
      e.preventDefault();
      var obj = {
        name:this.refs.name.value,
        age:this.refs.age.value,
        user: this.refs.user.value
      };

      if(!obj.name || !obj.age || !obj.user ){
        console.log('Hey man.');
        return;
      }else{
        this.props.onTodoAdd(obj);
      }
    }
});

var TodoList = React.createClass({

    render: function () {
        return (
          <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.todos.map(todo => {
                  return <tr key={todo.id} >
                      <td>{todo.name}</td>
                      <td>{todo.age}</td>
                      <td>{todo.user}</td>
                    </tr>
                })
              }
            </tbody>
          </table>
          </div>
        )
    }
});

ReactDOM.render(
    <App/>,
    document.getElementById("jumbotron")
)
