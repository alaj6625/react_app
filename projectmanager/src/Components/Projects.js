import React, { Component } from 'react';



class Projects extends Component {
 
  render() {
    console.log(this.props);
    return (
      <div className="Projects">
        my Projects
        {this.props.test}
      </div>
    );
  }
}

export default Projects;
