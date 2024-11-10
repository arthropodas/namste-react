import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props)
        console.log("this is props values", props)
    }
  render() {
    return (
      <div>
        <div className="user-card">
            <h1>User class</h1>
          <h1>Name: Asif {this.props.name}</h1>
          <h3>Location : Pattambi {this.props.location}</h3>
          <h3>Contact :1234567890 {this.props.contact}</h3>
        </div>
      </div>
    );
  }
}

export default UserClass;