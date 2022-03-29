import React, { useState } from "react";
import "./index.css";

function LoginForm() {
    const [todoList, setToDoArray] = useState([]);
    const [tickList, setListToTick] = useState([]);
    function getDatafromList() {
        var userData = document.getElementById("data").value;
        document.getElementById("data").value = "";
        setToDoArray([...todoList, userData]);
    }
    function click(position) {
        var valueFound = false;
        if (Array.isArray(tickList) && tickList.length) {
            tickList.forEach((element) => {
                if (element === position) valueFound = true;
            });
        }

        if (!valueFound) {
            setListToTick([...tickList, position]);
        } else {
            setListToTick(tickList.filter((value) => value != position));
        }
    }

    return (
        <div>
            <div>TODO list</div>
            <input type="text" id="data"></input>
            <button onClick={getDatafromList}>Add</button>
            <ul>
                <li>Itme0</li>
                <li style={{ textDecorationLine: "line-through" }}>Item1</li>
                {todoList.map((entry, number) => {
                    if (tickList.includes(number)) {
                        return (
                            <li
                                style={{ textDecorationLine: "line-through" }}
                                key={number}
                                onClick={() => click(number)}
                            >
                                {" "}
                                {entry}
                            </li>
                        );
                    } else {
                        return (
                            <li key={number} onClick={() => click(number)}>
                                {" "}
                                {entry}
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
}

export default LoginForm;
