import React from "react";
export default function Arrow ({direction,handelClick}){
    return (
        <div className="arrow-wrapper" onClick={handelClick}>
        <div className="round">
            <div id="cta">
                <span className={`arrow ${direction}`}></span>
            </div>
        </div>
    </div>
    )
}