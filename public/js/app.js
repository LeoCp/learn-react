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
                <h1>My app</h1><br/>

                <form>
                  <input type="text" className="form-control" onChange={this.changeText} value={this.state.text} /><br/>
                  
                </form><br/>
                <ComponentTwo text={this.state.text}/>
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
        {this.props.text}
      </div>
    );
  }
});

ReactDOM.render(
    <App/>,
    document.getElementById("jumbotron")
)
