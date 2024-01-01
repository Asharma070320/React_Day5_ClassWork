import { useState } from "react";
import Card from "./Card";
function Main() {
  let [Subject, setSubject] = useState("");
  let [Number, setNumber] = useState(0);
  let [Planner, setPlanner] = useState([]);

  function getSubject(e) {
    let store1 = e.target.value;
    // console.log(store1);
    setSubject(store1);
  }

  function getNumber(e) {
    let store2 = e.target.value;
    // console.log(store2);
    setNumber(store2);
  }
  // console.log(Subject,Number)

  function clickBtn() {
    if(Subject==""){
        alert('Please Select the details..')
    }else{
        setPlanner([...Planner, { subjectInput: Subject, hourInput: Number }]);
    }
  }
  console.log(Planner);

  return (
    <div className="center">
      <div className="mid">
        <h1 className="light">Geekster Education Planner</h1>
        <input className="margen" type="text" placeholder="Search" onChange={getSubject} />
        <input className="margen" type="number" placeholder="Hours" onChange={getNumber} />

        <button className="btn" onClick={clickBtn}>Add+</button>

        {
            Planner.map((data)=>{
              return <Card {...data} />
            })
        }

      </div>
    </div>
  );
}
export default Main;
