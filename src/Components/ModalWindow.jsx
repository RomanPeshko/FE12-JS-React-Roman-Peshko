import React, { useEffect, memo, useRef } from "react";

const ModalWindow = (props) => {
  return (
    <div className={"modal-fon"}>
      <div className={"modal"}>
        {props.children}
      </div>
    </div>

  )
}

export default memo(ModalWindow);