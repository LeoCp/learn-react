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
          link:"http://leocp.github.io/"
      }
    },

    //
    render: function () {
        return (
            <div>
              <div className="jumbotron">
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
                <a className="btn btn-primary" href={this.props.link}>Learn more</a>
              </div>
            </div>
        )
    }
})

ReactDOM.render(
    <Jumbotron/>,
    document.getElementById("jumbotron")
)
