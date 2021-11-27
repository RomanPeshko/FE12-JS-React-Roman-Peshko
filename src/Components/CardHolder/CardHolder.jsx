import React, { useCallback, useContext, useEffect, useState } from "react";
import Card from "Components/Card/card";
import BoardItem from "../Board/BoardItem";
import { ModalContext } from "../../HOC/GlobalModalProvider";
import ModalWindowOne from "../ModalContext/CreateTaskAdd";
import { TASK_STATUS } from "constants/taskStatus";
import { useDispatch, useSelector } from "react-redux";
import { cardListSelector } from "store/selectors/cardsList";
import { newCard } from "store/action/cardsListNew";
import { changeCard } from "store/action/cardsListChange";
import { removeCard } from "store/action/cardsListRemove";

const CardHolder = (props) => {
    const openModal = useContext(ModalContext);
    // const [taskList, setTaskList] = useState([]);
    const taskList = useSelector(cardListSelector);
    const dispatch = useDispatch();
    const [newTaskId, setNewTaskId] = useState(1);


    useEffect(() => {
        console.log(`useEffect`);
        new Promise((resolve, reject) => {
            resolve([{
                state: TASK_STATUS.toDo,
                title: "Define more tags in components",
                description: "Define more tags in components. Define more tags in components.",
                id: 0,
            },
            {
                state: TASK_STATUS.progress,
                title: "Add more user avatars",
                description: "Add more user avatars. Add more user avatars.",
                id: 1,
            }])
        }).then((data) => {
        })
    }, []);


    const changeName = (changeTaskName, changeTaskDescription, id) => {
        dispatch(changeCard(changeTaskName, changeTaskDescription, id))
    }


    const addTask = (newTaskName, newTaskDescription, state) => {
        let id = newTaskId + 1;
        setNewTaskId(id);
        dispatch(newCard(newTaskName, newTaskDescription, state, id));
    };

    const removeTask = (index) => {
        dispatch(removeCard(index));
    };



    console.log(`CardHolder render`);
    return (
        <div className="app">

            <div className={"container"}>
                <div className={"board-wrap"}>
                    <BoardItem boardName={'To Do'}>
                        {taskList.map((task, index) => {
                            if (task.state === TASK_STATUS.toDo) {
                                return (
                                    <React.Fragment key={task.id}>
                                        <Card
                                            state={task.state}
                                            id={task.id}
                                            removeTask={removeTask}
                                            openModal={openModal}
                                            changeName={changeName}
                                            description={task.description}
                                            title={task.title}
                                            index={index} />
                                    </React.Fragment>
                                )
                            } else {
                                return
                            }
                        })}
                        <button onClick={() => { openModal(<ModalWindowOne addTask={addTask} openModal={openModal} state={TASK_STATUS.toDo} />) }} type="button" className={"todo-button"}>
                            + Add card
                        </button>
                    </BoardItem>
                    <BoardItem boardName={'In Progress'}>
                        {taskList.map((task, index) => {
                            if (task.state === TASK_STATUS.progress) {
                                return (
                                    <React.Fragment key={task.id}>
                                        <Card
                                            state={task.state}
                                            id={task.id}
                                            removeTask={removeTask}
                                            openModal={openModal}
                                            changeName={changeName}
                                            description={task.description}
                                            title={task.title}
                                            index={index} />
                                    </React.Fragment>
                                )
                            } else {
                                return
                            }
                        })}
                        <button onClick={() => { openModal(<ModalWindowOne addTask={addTask} openModal={openModal} state={TASK_STATUS.progress} />) }} type="button" className={"todo-button"}>
                            + Add card
                        </button>
                    </BoardItem>
                    <BoardItem boardName={'Done'}>
                        {taskList.map((task, index) => {
                            if (task.state === TASK_STATUS.done) {
                                return (
                                    <React.Fragment key={task.id}>
                                        <Card
                                            state={task.state}
                                            id={task.id}
                                            openModal={openModal}
                                            removeTask={removeTask}
                                            changeName={changeName}
                                            description={task.description}
                                            title={task.title}
                                            index={index}
                                            color={'done__green'} />
                                    </React.Fragment>
                                )
                            } else {
                                return
                            }
                        })}
                        <button onClick={() => { openModal(<ModalWindowOne addTask={addTask} openModal={openModal} state={TASK_STATUS.done} />) }} type="button" className={"todo-button"}>
                            + Add card
                        </button>
                    </BoardItem>
                </div>
            </div>

        </div>


    )

}

export default CardHolder;
