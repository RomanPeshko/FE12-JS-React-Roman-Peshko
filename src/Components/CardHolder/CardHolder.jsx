import React, { useCallback, useContext, useEffect, useState } from "react";
import Card from "Components/card";
import BoardItem from "../Board/BoardItem";
import { ModalContext } from "../../HOC/GlobalModalProvider";

const CardHolder = (props) => {
    const openModal = useContext(ModalContext);
    const [taskList, setTaskList] = useState([]);
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDiscription, setNewTaskDiscription] = useState('');

    useEffect(() => {
        console.log(`useEffect`);
        new Promise((resolve, reject) => {
            resolve([{
                state: 0,
                title: "Define more tags in components",
                description: "Define more tags in components. Define more tags in components.",
                id: 0,
                finishDate: 0,
                userId: 0
            },
            {
                state: 1,
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


    const changeName = (index) => () => {
        let newTaskList = [...taskList];
        newTaskList[index] = "new name";
        setTaskList(newTaskList);
    }

    const addTask = () => {
        let newTaskList = [...taskList];
        let id = taskList.length;
        newTaskList.push({ state: 0, title: newTaskName, discription: newTaskDiscription, id: id });
        setTaskList(newTaskList);
        console.log(Object(newTaskList));
    }

    const removeTask = (id) => () => {
        let newTaskList = [...taskList];
        newTaskList.splice(id, 1);
        setTaskList(newTaskList);
    };

    const ModalWindowOne = () => {
        return (
                <div className={"modul-container"} >
                    <div className={"modul-title"}>
                        <label >Заголовок:</label>
                        <input  onChange={(event) => {setNewTaskName(event.target.value)}} value={newTaskName} />
                    </div>
                    <div className={"modul-discription"}>
                        <label >Описание:</label>
                        <textarea onChange={(event) => {setNewTaskDiscription(event.target.value)}} value={newTaskDiscription} type="text" name="modul-discribe" ></textarea>
                    </div>
                    <div className={"bytton-modul"}>
                        <button onClick={() => { openModal(addTask) }}   type="button" id="submitModul-add">Добавить карточку</button>
                        <button onClick={() => { openModal(false) }} type="button" id="cancelModul-add">Отмена</button>
                    </div>
                </div>
        )
    }

    console.log(`CardHolder render`);
    return (
            <div className={"container"}>
                <div className={"board-wrap"}>
                    <BoardItem boardName={'To Do'} classAdd={'board-item__red'}>
                        {taskList.map((task, state) => {
                            if (state === 0) {
                                return (
                                    <React.Fragment key={task.id}>
                                        <Card state={task.state} id={task.id} removeTask={removeTask} description={task.description} title={task.title} />
                                    </React.Fragment>
                                )
                            } else {
                                return
                            }
                        })}
                        <button onClick={() => { openModal(ModalWindowOne) }}  type="button" className={"todo-button"}>
                            + Добавить карточку
                        </button>
                    </BoardItem>
                    <BoardItem boardName={'In Progress'} classAdd={'board-item__blue'}>
                    {taskList.map((task, state) => {
                            if (state === 1) {
                                return (
                                    <React.Fragment key={task.id}>
                                        <Card state={task.state} removeTask={removeTask} description={task.description} title={task.title} />
                                    </React.Fragment>
                                )
                            } else {
                                return
                            }
                        })}
                        <button onClick={() => { openModal(ModalWindowOne) }} type="button" className={"todo-button"}>
                            + Добавить карточку
                        </button>
                    </BoardItem>
                    <BoardItem boardName={'Done'} classAdd={'board-item__yellow'}>
                    {taskList.map((task, state) => {
                            if (state === 2) {
                                return (
                                    <React.Fragment key={task.id}>
                                        <Card state={task.state} removeTask={removeTask} description={task.description} title={task.title} />
                                    </React.Fragment>
                                )
                            } else {
                                return
                            }
                        })}
                        <button onClick={() => { openModal(ModalWindowOne) }} type="button" className={"todo-button"}>
                            + Добавить карточку
                        </button>
                    </BoardItem>
                </div>
            </div>



    )

}

export default CardHolder;
