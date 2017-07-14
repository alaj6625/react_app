import React, { Component } from 'react';



class ProjectItem extends Component {
  deleteProject(id) {
    console.log('delete');
    this.props.onDelete(id);

  }
  render() {
    console.log(this.props);
    return (
      <li className="Projects">
        <strong>{this.props.project.title}</strong> :: {this.props.project.category}
           <a href="#" onClick={this.deleteProject.bind(this)}>x</a>
      </li>
    );
  }
}

export default ProjectItem;