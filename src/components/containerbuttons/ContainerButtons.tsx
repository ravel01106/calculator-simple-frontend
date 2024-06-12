import CalculatorService from "../../services/CalculatorService"
import { ContainerButtonsProps } from "../../types/ContainerButtonsProps"
import style from "./ContainerButtons.module.css"

function ContainerButtons({expression, setExpression}:ContainerButtonsProps) {
  const signal = ["+","-","*","/"]
  const sendExpression = (value:string) => {
    
    let newExpression = ""
    if ((expression === "0" && value != "." && !signal.includes(value)) || expression === "Invalid record error"){
      newExpression = value
    }else{
      if (signal.includes(value) || signal.includes(expression.charAt(expression.length - 1))){
        newExpression = expression + " " + value
      }else{
        if (expression.charAt(expression.length - 1) === "." && value === "."){
          newExpression = expression
        }else{
          newExpression = expression + value  
        }
        
      }
    }
    setExpression(newExpression)
  }


  const sendResult = () => {

    if (!endWithSignal(expression) && !isOnlyNumbers(expression)){
      const expressionWithBrackets = "( " + expression + " )"
      const data = CalculatorService.calculate(expressionWithBrackets)
      setExpression(data) 
    }else{
      setExpression("Expression error")
    }
  }

  const endWithSignal = (expression:string) => {
     let isEndWithSignal = false;
    signal.forEach((it:string) => {
      if (expression.endsWith(it)){
        isEndWithSignal = true
      }
    })
    return isEndWithSignal
  }

  const isOnlyNumbers = (expression:string) => {
    console.log("Expression -> " + expression);
    let isOnlyNumbers = false;

    const expressionDivided = expression.split(" ");
      if(expressionDivided.length === 1){
        isOnlyNumbers = true
      }
      return isOnlyNumbers
    }

  const clear = () => {
    setExpression("0")
  }

  return (
    <table className={`${style.containerButtons}`}>
    <tr className={`${style.buttons}`}>
      <td><button onClick={clear}>C</button></td>
      <td><button onClick={() => sendExpression("/")}>/</button></td>
      <td><button onClick={() => sendExpression("*")}>*</button></td>
      <td><button onClick={() => sendExpression("-")}>-</button></td>
    </tr>
    <tr className={`${style.buttons}`}>
      <td><button onClick={() => sendExpression("7")}>7</button></td>
      <td><button onClick={() => sendExpression("8")}>8</button></td>
      <td><button onClick={() => sendExpression("9")}>9</button></td>
      <td rowSpan={2} className={`${style.buttonRow}`} onClick={() => sendExpression("+")}><button>+</button></td>
    </tr>
    <tr className={`${style.buttons}`}>
      <td><button onClick={() => sendExpression("6")}>6</button></td>
      <td><button onClick={() => sendExpression("5")}>5</button></td>
      <td><button onClick={() => sendExpression("4")}>4</button></td>
    </tr>
    <tr className={`${style.buttons}`}>
      <td><button onClick={() => sendExpression("3")}>3</button></td>
      <td><button onClick={() => sendExpression("2")}>2</button></td>
      <td><button onClick={() => sendExpression("1")}>1</button></td>
      <td rowSpan={2} className={`${style.buttonRow}`}><button onClick={sendResult}>=</button></td>
    </tr>
    <tr className={`${style.buttons}`}>
      <td colSpan={2} className={`${style.buttonCol}`} onClick={() => sendExpression("0")}><button>0</button></td>
      <td><button onClick={() => sendExpression(".")}>.</button></td>
    </tr>
  </table>
  )
}

export default ContainerButtons