import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import CreateTaskChange from "Components/ModalContext/CreateTaskChange";
import { TASK_STATUS } from "constants/taskStatus";

const Card = (props) => {

    useEffect(() => {
        return () => {
            console.log("bue bue id", props.id);
        }

    }, []);

    const buttonPencil = () => {
        return (
            <div className={"button__pencil"}>
                <button onClick={() => {
                    props.openModal(<CreateTaskChange
                        openModal={props.openModal}
                        changeName={props.changeName}
                        id={props.id}
                        title={props.title}
                        description={props.description}
                        index={props.index}
                        removeTask={props.removeTask} />)
                }} className={'pencil__openModal'}>
                    <i className={"fas fa-pen"}></i>
                </button>
            </div>
        )
    }

    console.log(`card render`, props.id);

    return (
        <React.Fragment>
            <div className={`board-item__list ${props.color}`} >
                {(props.state === TASK_STATUS.toDo || props.state === TASK_STATUS.progress) && buttonPencil()}
                <h4 className={"board-list__title"}>
                    {props.title}
                </h4>
                <p>
                    {props.description}
                </p>
                <span className={"list-date"}>
                    {props.state === TASK_STATUS.done && Date()}
                </span>
            </div>
            {/* <button onClick={props.removeTask(props.index)}>remove task</button> */}
        </React.Fragment>
    )

}


export default memo(Card);