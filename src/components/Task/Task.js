import React, {Component} from 'react';
import './Task.css';

class Task extends Component {
    render() {
        return (
            <div className="task">
                <span>{this.props.text}</span>
                <span onClick={this.props.remove}>{this.props.children}</span>
            </div>
        );
    }
}

export default Task;