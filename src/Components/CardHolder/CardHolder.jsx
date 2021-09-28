import React, { useCallback, useEffect, useState } from "react";
import Card from "Components/card";
import ModalWindow from "Components/ModalWindow";

const CardHolder = (props) => {
    const [taskList, setTaskList] = useState([]);

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
        newTaskList.push({ taskName: `task ${taskList.length}`, isDone: false });
        setTaskList(newTaskList);
    }

    const removeTask = useCallback((index) => () => {
        let newTaskList = [...taskList];
        newTaskList.splice(index, 1);
        setTaskList(newTaskList);
    }, []);

    const ModalWindowOne = () => {
        return (
            <React.Fragment>
                <div className={"modul-container"}>
                    <div className={"modul-title"}>
                        <div className={"modul-title__edit"}>
                            <label >Заголовок:</label>
                            <input type="text" />
                        </div>
                        <div className={"modul-discription__edit"}>
                            <label>Описание:</label>
                            <textarea type="text" name="modul-discribe"></textarea>
                            <div className={"bytton-modul"}>
                                <button type="button" id="submitModul-edit">Сохранить</button>
                                <button type="button" id="submitModul-remove">Удалить</button>
                                <button type="button" id="cancelModul-edot">Отмена</button>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment >
        )
    }

    console.log(`CardHolder render`);
    return (
        <div className={"container"}>
            <div className={"board-wrap"}>
                <div className={"board-item"}>
                    <h3 className={"board-title"}>
                        To Do
                    </h3>
                    {taskList.map((task, state) => {
                        if (state == 0) {
                            return (
                                <React.Fragment key={task.state}>
                                    <Card state={task.state} removeTask={removeTask} description={task.description} title={task.title} />
                                </React.Fragment>
                            )
                        } else {
                            return
                        }

                    })}
                    <button onClick={() => { props.setModalContent(ModalWindowOne) }} type="button" className={"todo-button"}>
                        + Добавить карточку
                    </button>
                    {/* <button onClick={() => { addTask() }}>add task</button>
                    <button onClick={() => { props.setModalContent(ModalWindowOne) }}>Open Modal</button> */}
                </div>
                <div className={"board-item"}>
                    <h3 className={"progress__title"}>
                        In Progress
                    </h3>
                    {taskList.map((task, state) => {
                        if (state == 1) {
                            return (
                                <React.Fragment key={task.state}>
                                    <Card state={task.state} removeTask={removeTask} description={task.description} title={task.title} />
                                </React.Fragment>
                            )
                        } else {
                            return
                        }
                    })}
                    <button onClick={() => { props.setModalContent(ModalWindowOne) }} type="button" className={"progress-button"}>
                        + Добавить карточку
                    </button>
                    {/* <button onClick={() => { addTask() }}>add task</button>
                    <button onClick={() => { props.setIsModalOpen(true) }}>Open Modal</button> */}
                </div>
                <div className={"board-item"}>
                    <h3 className={"board-title"}>
                        Done
                    </h3>
                    {taskList.map((task, state) => {
                        if (state == 2) {
                            return (
                                <React.Fragment key={task.state}>
                                    <Card state={task.state} removeTask={removeTask} description={task.description} title={task.title} />
                                </React.Fragment>
                            )
                        } else {
                            return
                        }
                    })}
                    <button onClick={() => { props.setModalContent(ModalWindowOne) }} type="button" className={"done-button"}>
                        + Добавить карточку
                    </button>
                    {/* <button onClick={() => { addTask() }}>add task</button>
                    <button onClick={() => { props.setIsModalOpen(true) }}>Open Modal</button> */}
                </div>
            </div>
        </div>


    )

}

export default CardHolder;
