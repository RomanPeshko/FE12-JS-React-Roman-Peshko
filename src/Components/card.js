import React from "react";

class Card extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: `task ${this.props.index}`
        }
    }

    changeName = (index) => () => {
        this.setState({ name: "newTaskList" });
    }

    render() {
        console.log(`card render`, this.state.name);
        return (
            <div>
                <div>
                    {`Task ${this.state.name}, is ${this.props.isDone ? 'done' : 'not done'}`};
                </div>
                <button onClick={this.changeName(this.props.index)}>change name</button>
            </div>
        )
    }
}


export default Card