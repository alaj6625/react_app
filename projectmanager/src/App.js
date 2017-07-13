import React, { Component } from 'react';
import Projects from  './Components/Projects';
import './App.css';

class App extends Component {
   constructor(){
     super();
    this.state = {
      projects:[
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
    }
  }
  render() {
    return (
      <div className="App">
        my App
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
