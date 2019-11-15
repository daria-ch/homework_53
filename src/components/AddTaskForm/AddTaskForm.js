import React, {Component} from 'react';
import './AddTaskForm.css';

class AddTaskForm extends Component {
    render() {
        return (
            <div className='taskForm'>
                <input type="text" placeholder="Add new task" onChange={this.props.enter}/>
                <button onClick={this.props.add}>Add</button>
            </div>
        );
    }
}

export default AddTaskForm;