import React from "react";

const MainLayouts = (props) => {
    return (
        <React.Fragment>
            <div className={"header"}>
                Header
            </div>
            <div className={"content"}>
                {props.children}
            </div>
            <div className={"footer"}>
               Footer
            </div>
        </React.Fragment>
    )
};


export default MainLayouts;