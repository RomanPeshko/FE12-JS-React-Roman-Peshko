import React, { useState } from "react";

const ModalWindowOne = (props) => {
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');




    return (
        <div className={"modul-container"} >
            <div className={"modul-title"}>
                <label >Title:</label>
                <input onChange={(event) => { setNewTaskName(event.target.value) }} value={newTaskName} />
            </div>
            <div className={"modul-discription"}>
                <label >Description:</label>
                <textarea onChange={(event) => { setNewTaskDescription(event.target.value) }} value={newTaskDescription} type="text" name="modul-discribe" ></textarea>
            </div>
            <div className={"bytton-modul"}>
                <button onClick={() => {
                    if (newTaskName !== '' && newTaskDescription !== '') {
                        props.addTask(newTaskName, newTaskDescription, props.state);
                        props.openModal(false)
                    } else {
                        alert('Fill in the fields')
                    }
                }} type="button" id="submitModul-add">Add card</button>
                <button onClick={() => { props.openModal(false) }} type="button" id="cancelModul-add">Close</button>
            </div>
        </div>
    )
}

export default ModalWindowOne;