import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    useEffect(() => {
        return () => {
            console.log("bue bue", props.state);
        }

    }, []);

    console.log(`card render`, props.state);

    return (
        <React.Fragment>
           <div className={"board-item__list"}>
               <Link to={`/cards/${props.id}`}>Redact</Link>
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