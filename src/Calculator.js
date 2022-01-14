import {useState} from 'react';
import Buttons from './Button';
import "./Calculator.css";

const classes = ["operator", "operator", "operator", "operator", "number", "number", "number", "operator", "number", "number", "number", "operator", "number", "number", "number", "operator", "empty", "number", "empty", "operator"];
const ids = ["clear", "backspace", "plumin", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "paren", "0", "decimal", "="];
const values = ["C", "CE", "±", "÷", "7", "8", "9", "×", "4", "5", "6", "-", "1", "2", "3", "+", "()", "0", ".", "="];

export function Calculator() {
    const [output, setOutput] = useState("0");
    const [history, setHistory] = useState("");

    const handleClick = ({target}) => {
        const {className, id, value} = target;
        if (value === "C") {
            setOutput("0");
            setHistory("");
        }
        else if (value === "CE") {
            setOutput((prev) => {
                if (prev.length > 1) {
                    return prev.substring(0, prev.length - 1);
                }
                else {
                    return "0";
                }
            });
        }
        else if (className === "operator" && id !== "plumin") {
            if (output === "0" && history !== "") {
                return;
            }
            if (output !== "0" || history !== "") {
                if (value === "=") {
                    var exp = history + output;
                    var result = eval(exp);
                    setOutput(result);
                    setHistory("");
                }
                else {
                    setHistory((prev) => prev + output + id);
                    setOutput("0");
                }
            }
        }
        else if (value === "0" && output === "0") {
            setOutput("0");
        }
        else if (className === "number") {
            setOutput((prev) => {
                if (prev === "0") {
                    return value;
                }
                else {
                    return prev + value;
                }
            });
        }
    }

    return (
        <div id="calc-container">
            <div id="calc">
                <div id="result">
                    <div id="history">
                        <p id="history-value">{history}</p>
                    </div>
                    <div id="output">
                        <p id="output-value">{output}</p>
                    </div>
                </div>
                
                <div id="keys">
                    {values.map((value, index) => {
                        return <button className={classes.at(index)} id={ids.at(index)} value={value} onClick={handleClick} >{value}</button>
                    })}
                </div>
            </div>
        </div>
    )
}