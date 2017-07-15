import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from  './Components/Projects';
import AddProject from  './Components/AddProject';
import './App.css';

class App extends Component {
   constructor(){
     super();
    this.state = {
      projects:[],
      todos:[]
        
    }
  }

  getTodos(){
    $.ajax({
      url: 'http://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({todos:data}, function(){
          console.log(this.state);
        });

      }.bind(this),
      error: function(xhr, status, err){
         console.log(err);
      }
    });
  }

  getProjects(){

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

  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }

  handleAddProject(project){
    console.log('HandleAddProject');
    console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});

  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id );
    projects.splice(index, 1);
    this.setState({ projects:projects});

  }
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

Projects.propTypes = {
  projects: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default App;
