import React, { useCallback, useContext, useEffect, useState } from "react";
import Card from "Components/Card/card";
import BoardItem from "../Board/BoardItem";
import { ModalContext } from "../../HOC/GlobalModalProvider";
import ModalWindowOne from "../ModalContext/CreateTaskAdd";
import { TASK_STATUS } from "constants/taskStatus";

const CardHolder = (props) => {
    const openModal = useContext(ModalContext);
    const [taskList, setTaskList] = useState([]);
    const [newTaskId, setNewTaskId] = useState(2);


    useEffect(() => {
        console.log(`useEffect`);
        new Promise((resolve, reject) => {
            resolve([{
                state: TASK_STATUS.toDo,
                title: "Define more tags in components",
                description: "Define more tags in components. Define more tags in components.",
                id: 0,
                finishDate: 0,
                userId: 0
            },
            {
                state: TASK_STATUS.progress,
                title: "Add more user avatars",
                description: "Add more user avatars. Add more user avatars.",
                id: 1,
                finishDate: 0,
                userId: 0
            }])
        }).then((data) => {
            setTaskList(data);
        })
    }, []);


    const changeName = (changeTaskName, changeTaskDescription, id) => {
        let newTaskList = [...taskList];
        newTaskList[id].title = changeTaskName;
        newTaskList[id].description = changeTaskDescription;
        setTaskList(newTaskList);
        console.log(newTaskList[id].title, 'id', id );
    }
   
    
    const addTask = useCallback((newTaskName, newTaskDescription, state) => {
        let id = newTaskId + 1;
        let newTaskList = [...taskList];
        newTaskList.push(
            {
                state: state,
                title: newTaskName,
                description: newTaskDescription,
                id: id
            }
        );
        setNewTaskId(id);
        setTaskList(newTaskList);
        console.log(Object(newTaskList), 'id', id, 'state', state);
    }, [taskList]);

    const removeTask = (id) => {
        let newTaskList = [...taskList];
        newTaskList.splice(id, 1);
        setTaskList(newTaskList);
        console.log(id, newTaskList);
    };



    console.log(`CardHolder render`);
    return (
        <div className={"container"}>
            <div className={"board-wrap"}>
                <BoardItem boardName={'To Do'} classAdd={'board-item__red'}>
                    {taskList.map((task) => {
                        if (task.state === TASK_STATUS.toDo) {
                            return (
                                <React.Fragment key={task.id}>
                                    <Card state={task.state} id={task.id} removeTask={removeTask}  openModal={openModal} changeName={changeName} description={task.description} title={task.title} />
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
                <BoardItem boardName={'In Progress'} classAdd={'board-item__blue'}>
                    {taskList.map((task) => {
                        if (task.state === TASK_STATUS.progress) {
                            return (
                                <React.Fragment key={task.id}>
                                    <Card state={task.state} id={task.id} removeTask={removeTask} openModal={openModal} changeName={changeName} description={task.description} title={task.title} />
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
                <BoardItem boardName={'Done'} classAdd={'board-item__yellow'}>
                    {taskList.map((task) => {
                        if (task.state === TASK_STATUS.done) {
                            return (
                                <React.Fragment key={task.id}>
                                    <Card state={task.state} id={task.id} openModal={openModal}  removeTask={removeTask} changeName={changeName} description={task.description} title={task.title} />
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



    )

}

export default CardHolder;
