'use strict';

var App = React.createClass({

    getInitialState: function () {
      return {
          text:"This is the text"
      };
    },

    render: function () {
        return (
            <div>
              <div className="jumbotron">
                <h1>{this.state.text}</h1>
                <form>
                  <input type="text" className="form-control" onChange={this.changeText} value={this.state.text} /><br/>
                  <button className="btn btn-primary">Add</button>
                </form><br/>
                <ComponentTwo />
              </div>
            </div>
        )
    },
    changeText: function (e){
        this.setState({
          text: e.target.value
        });
    }
});

var ComponentTwo = React.createClass({
  render: function (){
    return(
      <div>
        Component two
      </div>
    );
  }
});

ReactDOM.render(
    <App/>,
    document.getElementById("jumbotron")
)
