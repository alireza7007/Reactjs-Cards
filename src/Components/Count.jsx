import React,{useState,useEffect} from "react";
export default function Count(){
const [count,setCount] = useState(0);
function incremnt (){
    setCount(count + 1)
}
function decrement (){
    setCount(count - 1)
}
    return (
        <div className="counter">
                <button className="bg-info" onClick={decrement}>-</button>
                <p className="count">{count}</p>
                <button className="bg-success" onClick={incremnt}>+</button>
            </div>
    )
}