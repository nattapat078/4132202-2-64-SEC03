import React,{ useState } from "react";

function People() {
    const [color, setColor] = useState("seagreen");

        const people = {
            name: "Aof",
            age: 20,
        };

    const numbers = [10 , 20, 30];
    const text = (
  <>
    <div>hello Workd !!! React {numbers[0] + numbers[2]}</div>
    <h3 className="seagreen">My name is Nattapat</h3>
  </>
);

const multiNum = (num) => {
    console.log(num);   
};

    return (
        <>
            <p>My name is {people.name} </p>
            <p>I Love {color} </p>
            <button
                onclick={()=>{
                    setColor("red");
                    }}
                    >
                    Change
                    </button>
            {text}
            <button onclick={multiNum(5)}> Multi </button>
        </>
    );
}

export default People;