import React, { Component } from 'react';
import uuid from 'uuid';
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
        { id:uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        { id:uuid.v4(),
          title: 'Social Website',
          category: 'Mobile Design'
        },
        { id:uuid.v4(),
          title: 'Ecommerce Website',
          category: 'Web Development'
        }
      ]
    })
  }

  handleAddProject(project){
    console.log('HandleAddProject');
    console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});

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
