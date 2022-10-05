import React from "react";
export default function BuyFunction({name}){

    function showAlert(){
        alert(name)
    }
    function handelClick(){
        setTimeout(showAlert,2000);
    }
return(
    <div>
        
                <span className="badge" onClick={handelClick}>Buy</span>
                <p>Function</p>
            
    </div>
)
}