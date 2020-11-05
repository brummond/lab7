import React from 'react';

class ToDo extends React.Component{
  //state
  constructor(props){
    super(props);
    this.state={
      votes: 0
    };
    
    //binding is necessary for 'this' to work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    //update state
    this.setState({
      votes: this.state.votes +1
    });
    //update list total votes
    this.props.onVoteChange();
  }

//styling
  render(){
    var nameStyle={
      paddingLeft: "10%"
    }

    var buttonStyle={
      backgroundColor: "#66CCFF",
      border: "2px solid #66CCFF",
      cursor: "pointer",
      color: "#FFF",
      fontSize: "100%",
      float: "right",
      marginTop: "-1%",
      borderRadius: "5px"
    }
      return (
        <div>
        {this.state.votes}
        <span style={nameStyle}>{this.props.name}</span>
        <button style={buttonStyle} onClick={this.handleClick}>Vote</button>
        </div>
      );
  }

}

export default ToDo;