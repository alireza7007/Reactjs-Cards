import React,{useState,useEffect} from "react";
import Arrow from "./Arrow";
import Card from "./Card";
export default function Slider(){
    const [heroes,setHeroes]=useState([]);
    const [courser,setCourser]=useState(0);
    useEffect(()=>{
        fetch('http://localhost:3001/heroes')
        .then(response => response.json())
        .then(heroes => setHeroes(heroes))
    },[])
    function handelNext(){
        const current = courser +1 < heroes.length ? courser + 1 : 0;
        setCourser(current);
    }
    function handelPrev(){
        const current = courser -1 < 0 ? (heroes.length-1) : courser -1 ;
        setCourser(current);
    }
    return (
       
     <div className="slide-container">
    <div className="wrapper">
   {!heroes.length ?
    <div>Loding...</div> :
    <>
     <Arrow  direction='prev' handelClick={handelPrev}  />
    <Card hero={heroes[courser]}/>
    <Arrow direction='next' handelClick={handelNext} />
    </>
}

</div> 
</div>
        
    )
}