import React, {Component} from 'react';
import nanoid from 'nanoid';
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import Task from "./components/Task/Task";
import './App.css';

class App extends Component {
    state = {
        currentTask: {text: '', id: ''},
        tasks: [
            {text: 'Buy bread', id: nanoid()},
            {text: 'Clean room', id: nanoid()},
        ]
    };

    enterText = event => {
        this.setState({currentTask: {text: event.target.value, id: nanoid()}});
    };

    addTask = () => {
        const tasks = [...this.state.tasks];
        tasks.push(this.state.currentTask);
        this.setState({tasks});
    };

    removeTask = id => {
        const index = this.state.tasks.findIndex(p => p.id === id);
        const tasks = [...this.state.tasks];
        tasks.splice(index, 1);
        this.setState({tasks});
    };

    render() {
        const tasks = this.state.tasks.map(task => {
            return <Task
                text={task.text}
                remove={() => this.removeTask(task.id)}
            >
                <i className="far fa-trash-alt"></i>
            </Task>
        });

        return (
            <div className="App">
                <AddTaskForm
                    enter={this.enterText}
                    add={this.addTask}>
                </AddTaskForm>
                <div>
                    {tasks}
                </div>
            </div>
        )
    }
}

export default App;