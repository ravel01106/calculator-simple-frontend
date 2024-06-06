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
        newExpression = expression + value
      }
    }
    setExpression(newExpression)
  }
  const sendResult = () => {
    console.log("-> " + isOnlyNumbers(expression));

    if (!endWithSignal(expression) && !isOnlyNumbers(expression)){
      const fetchData = async () => {
        const data = CalculatorService.calculate(expression)
        data.then((value) => {
          setExpression(value)
        })
  
      }
      fetchData();  
    }else{
      setExpression("Invalid record error")
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
    const isOnlyNumbersRegex: RegExp = new RegExp('^([0-9]*)$')
    let isOnlyNumbers = false;

    if (expression.indexOf(".") === -1){
      isOnlyNumbers = isOnlyNumbersRegex.test(expression)
    }else{
      const dividedExpression = expression.split(".");
    if (dividedExpression.length == 2){
      console.log(dividedExpression);
      dividedExpression.forEach( (it:string) => {
        if (isOnlyNumbersRegex.test(it.trim())){
          isOnlyNumbers = true
        }
      })
    }else{
      isOnlyNumbers = true
      }
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