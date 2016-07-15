'use strict';

var App = React.createClass({
    getInitialState: function (){
      return {
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
              <TodoForm/>
              <TodoList todos={this.state.todos}/>
              </div>
            </div>
        )
    }
});

var TodoForm = React.createClass({

    render: function () {
        return (
            <div>TodoForm</div>
        )
    }
});

var TodoList = React.createClass({

    render: function () {
        return (
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
                  return <tr>
                      <td>{todo.name}</td>
                      <td>{todo.age}</td>
                      <td>{todo.user}</td>
                    </tr>
                })
              }
            </tbody>
          </table>
        )
    }
});

ReactDOM.render(
    <App/>,
    document.getElementById("jumbotron")
)
