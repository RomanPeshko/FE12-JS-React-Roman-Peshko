import React, { memo } from "react";


const BoardItem = (props) => {
    return (
        <React.Fragment>
            <div className={`board-item `}>
                <h3 className={"board-title"}>
                    {props.boardName}
                </h3>
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default memo(BoardItem);