'use strict';

var Jumbotron = React.createClass({

    //Validation
    propTypes: {
      title:React.PropTypes.string.isRequired,
      text:React.PropTypes.string.isRequired
    },

    //
    getDefaultProps: function (){
      return{
          title:"This is the title",
          text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      }
    },

    //
    render: function () {
        return (
            <div>
              <div className="jumbotron">
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
                <button onClick={this.onClick.bind(this, "Hello")}className="btn btn-primary">Learn more</button>
              </div>
            </div>
        )
    },
    onClick: function (greeting) {
      alert(greeting);
    }
})

ReactDOM.render(
    <Jumbotron/>,
    document.getElementById("jumbotron")
)
