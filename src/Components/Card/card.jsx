import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import CreateTaskChange from "Components/ModalContext/CreateTaskChange"

const Card = (props) => {
    useEffect(() => {
        return () => {
            console.log("bue bue id", props.id);
        }

    }, []);
    

    console.log(`card render`, props.id);

    return (
        <React.Fragment>
           <div className={"board-item__list"}>
               <button onClick={() => { props.openModal(<CreateTaskChange  
                openModal={props.openModal} 
                changeName={props.changeName}
                id={props.id} 
                title={props.title}
                description={props.description}
                index={props.index}
                removeTask={props.removeTask}/>)}}   className={'pencil__openModal'}>Redact</button>
                <h4 className={"board-list__title"}>
                    {props.title}
                </h4>
                <p>
                    {props.description}
                </p>
            </div>
            {/* <button onClick={props.removeTask(props.index)}>remove task</button> */}
        </React.Fragment>
    )

}


export default memo(Card);