import React from "react";
import Card from "Components/card";

class CardHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: []
        }
    }

    componentDidMount() {
        new Promise((resolve, reject) => {
            resolve([{ taskName: "task 0", isDone: false }, { taskName: "task 1", isDone: false }])
        }).then((data) => {
            this.setState({ taskList: data })
        })
    }

    addTask = () => {
        let newTaskList = [...this.state.taskList];
        newTaskList.push({ taskName: `task ${this.state.taskList.length}`, isDone: false });
        this.setState({ taskList: newTaskList });
    }

    render() {
        console.log(`CardHolder render`);
        return (
            <div>
                <div>
                    {this.state.taskList.map((task, index) => {
                        return (
                            <div key={task.taskName}>
                                <Card taskName={task.taskName} isDone={task.isDone} index={index} changeName={this.changeName} />
                            </div>
                        )
                    })}
                </div>
                <button onClick={this.addTask}>add task</button>
            </div>
        )
    }
}

export default CardHolder
