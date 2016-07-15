class Jumbotron extends React.Component {
    render(){
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
}

ReactDOM.render(
    <Jumbotron
      title= "This is the title"
      text= "Lorem ipsum dolvelit esse cillum dolore eu fugiat nulla pariatur."
      link="http://leocp.github.io/"
    />,
    document.getElementById("jumbotron")
)
