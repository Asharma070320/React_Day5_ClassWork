import { useState } from "react";

function Card(props){

    let[counter,setCounter] = useState(Number(props.hourInput));
    function increaseBtn(){
        setCounter(counter+1)
    }
    function decreaseBtn(){
        setCounter(counter-1)
    }

    return(
        <div className="middle">
            <p>{props.subjectInput}</p>
            <p>{counter}</p>
            <button onClick={increaseBtn} className="btn">+</button>
            <button onClick={decreaseBtn} className="btn">-</button>
        </div>
    )
}
export default Card