import React from 'react';
import {render} from 'react-dom';

function MyButton (props){
    return (
      <button onClick={props.onClick}>
        {props.text}
      </button>
    );
}

function MyInput (props){
  return (
    <input type={props.type} id={props.id} name={props.name}>
    </input>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks : [] , pageTitle : "Task List" , buttonName : "Crear" };
    this.toggleTask = this.toggleTask.bind(this);
    this.createTask = this.createTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  componentDidMount(){
    this.updateList()
  }

  updateList(){
    fetch("/tasks")
      .then( res => res.json() )
      .then( tasks => {
        this.setState({tasks})
      })
  }

  createTask(){
    let newTask = {
      title: document.getElementById("newTaskName").value
    }
    if (newTask.title.length > 0) {
      fetch("/tasks", {method:"POST", headers:{'content-type': 'application/json'}, body : JSON.stringify(newTask)})
        .then( (resp) => resp.json() )
        .then (msg => {
          this.updateList(),
          console.log(msg) 
        })
    }else {
      console.log("Input vacío")
    }
  }
  
  deleteTask(id){
    fetch("/task/" + id + "/toggle", {method:"delete"})
      .then( (resp) => resp.json() )
      .then (msg => {
        this.updateList(),
        console.log(msg) 
      })
  }

  toggleTask(id){
    fetch("/task/" + id + "/toggle",{method:"put"})
      .then( (resp) => resp.json() )
      .then (msg => {
        this.updateList(),
        console.log(msg) 
      })
  }

  render() {
    const myList = this.state.tasks.map( task => 
      <tr key={task.id}>
        <td onClick={()=>this.toggleTask(task.id)} className={ task.done ? 'done' : '' } >{task.id + " " + task.title}</td>
        <td><MyButton onClick={()=>this.deleteTask(task.id)} text = "Eliminar"></MyButton></td>
      </tr>
    )
    return (
      <div>
        <h1>{this.state.pageTitle}</h1> 
        <MyInput type="text" id="newTaskName" name="newTaskName"></MyInput>
        <MyButton onClick={this.createTask} text = {this.state.buttonName}></MyButton>
        <table>
          <thead>
            <tr>
              <th>Tarea</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
              {myList}
          </tbody>
        </table>      
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));

//<ul>{myList}</ul>