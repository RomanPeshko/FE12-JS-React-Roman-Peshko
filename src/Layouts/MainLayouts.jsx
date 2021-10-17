import React from "react";

const MainLayouts = (props) => {
    return (
        <React.Fragment>
            <div className={"header"}>
                
            </div>
            <div className={"content"}>
                {props.children}
            </div>
            <div className={"footer"}>
             
            </div>
        </React.Fragment>
    )
};


export default MainLayouts;