import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import CreateTaskChange from "Components/ModalContext/CreateTaskChange";
import { TASK_STATUS } from "constants/taskStatus";
import { useDispatch, useSelector } from "react-redux";
import { transferList } from "../../store/action/cardsListTransfer";


// import cardStyle from "Components/Card/card.module.scss"

const Card =  (props) => {
    const dispatch = useDispatch();

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
    };

    const transferListForCard = (state, index) => {
        dispatch(transferList(state, index));
    };


    const buttonTransferToDo = () => {
        return (
            <React.Fragment>
                <button onClick={() => {
                    transferListForCard(TASK_STATUS.progress, props.index);
                }} className={"button__transfer transfer__progress"}>
                    Progres
                </button>
                <button onClick={() => {
                    transferListForCard(TASK_STATUS.done, props.index);
                }} className={"button__transfer transfer__done"}>
                    Done
                </button>
            </React.Fragment>

        )
    };

    const buttonTransferProgress = () => {
        return (
            <React.Fragment>
                <button onClick={() => {
                    transferListForCard(TASK_STATUS.toDo, props.index);
                }} className={"button__transfer transfer__todo"}>
                    ToDo
                </button>
                <button onClick={() => {
                    transferListForCard(TASK_STATUS.done, props.index);
                }} className={"button__transfer transfer__done"}>
                    Done
                </button>
            </React.Fragment>

        )
    };

    const buttonTransferDone = () => {
        return (
            <React.Fragment>
                <button onClick={() => {
                    transferListForCard(TASK_STATUS.toDo, props.index);
                }} className={"button__transfer transfer__todo"}>
                    ToDo
                </button>
                <button onClick={() => {
                    transferListForCard(TASK_STATUS.progress, props.index);
                }} className={"button__transfer transfer__progress"}>
                    Progres
                </button>
            </React.Fragment>

        )
    };



    console.log(`card render`, props.id);

    return (
        <React.Fragment>
            <div className={`board-item__list ${props.color}`} >
                {(props.state === TASK_STATUS.toDo || props.state === TASK_STATUS.progress) && buttonPencil()}
                <h4 className={"board-list__title"}>
                    <span>Title:</span>
                    {props.title}
                </h4>
                <p>
                    <span>Description:</span>
                    {props.description}
                </p>
                <span className={"list-date"}>
                    {props.state === TASK_STATUS.done && new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()}.
                </span>
                <div className={`card__item-button ${props.state === TASK_STATUS.done && 'done__top'}`}>
                    {props.state === TASK_STATUS.toDo && buttonTransferToDo()}
                    {props.state === TASK_STATUS.progress && buttonTransferProgress()}
                    {props.state === TASK_STATUS.done && buttonTransferDone()}
                </div>
            </div>
        </React.Fragment>
    )

}


export default memo(Card);