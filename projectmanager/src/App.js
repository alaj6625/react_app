import React, { Component } from 'react';

import Projects from  './Components/Projects';
import AddProject from  './Components/AddProject';
import './App.css';

class App extends Component {
   constructor(){
     super();
    this.state = {
      projects:[]
        
    }
  }

  componentWillMount() {
    this.setState({projects:[
        {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social Website',
          category: 'Mobile Design'
        },
        {
          title: 'Ecommerce Website',
          category: 'Web Development'
        }
      ]
    })
  }

  handleAddProject(project){
    console.log('HandleAddProject');
    console.log(project);
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
