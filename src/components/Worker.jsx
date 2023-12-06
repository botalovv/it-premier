import React from "react"
import "../styles/worker.css"
import { useState } from "react";

function Worker(props) {

    const [isVisible, setIsVisible] = useState(false);
    const clickHandler = () => {
        setIsVisible(current => !current)
    }

    return (
            <div className={isVisible ? "worker": "cover"} onClick={clickHandler}>
                {props.prop}
            </div>
    )
}

export default Worker;