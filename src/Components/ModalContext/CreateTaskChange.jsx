import React, { useState } from "react";

const ModalWindowChange = (props) => {
    const [changeTaskName, setChangeTaskName] = useState(props.title);
    const [changeTaskDescription, setChangeTaskDescription] = useState(props.description);

    return (
        <div className={"modul-container"} >
            <div className={"modul-title"}>
                <label >Title:</label>
                <input  onChange={(event) => { setChangeTaskName(event.target.value) }} value={changeTaskName} />
            </div>
            <div className={"modul-discription"}>
                <label >Description:</label>
                <textarea onChange={(event) => { setChangeTaskDescription(event.target.value) }} value={changeTaskDescription} type="text" name="modul-discribe" ></textarea>
            </div>
            <div className={"bytton-modul"}>
                <button onClick={() => { 
                    props.changeName(changeTaskName, changeTaskDescription, props.id); 
                    props.openModal(false)}} type="button" id="submitModul-add">Save card</button>
                <button onClick={() => { 
                    props.removeTask(props.index);
                    props.openModal(false);
                }} className={'remove__task'}>Remove card</button>
                <button onClick={() => { props.openModal(false) }} type="button" id="cancelModul-add">Close</button>
            </div>
        </div>
    )
}

export default ModalWindowChange;