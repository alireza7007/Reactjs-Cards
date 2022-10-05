import React from "react";

import BuyFunction from "./BuyFunction";
import Count from "./Count";
export default function Buy ({name}){
    return (
        <div className="badge-wrapper">
            <BuyFunction name={name}/>
            <Count />
            
        </div>
    )
}