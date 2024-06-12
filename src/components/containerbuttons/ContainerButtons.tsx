import CalculatorService from "../../services/CalculatorService"
import { ContainerButtonsProps } from "../../types/ContainerButtonsProps"
import CheckExpression from "../../utils/CheckExpression"
import style from "./ContainerButtons.module.css"

function ContainerButtons({expression, setExpression}:ContainerButtonsProps) {

  const sendExpression = (value:string) => {
    
    let newExpression = ""
    if ((CheckExpression.isZero(expression) && CheckExpression.isNumber(value)) || CheckExpression.isError(expression)){
      newExpression = value
    }else{
      if (CheckExpression.isSignal(value) || CheckExpression.thereIsAlreadySignal(expression)){
        newExpression = expression + " " + value
      }else{
        if (CheckExpression.thereIsPointAtTheEndExpression(expression,value)) {
          newExpression = expression
        }else{
          newExpression = expression + value
        }
      }
    }
    setExpression(newExpression)
  }


  const sendResult = () => {
    if (!CheckExpression.endWithSignal(expression) && !CheckExpression.isOnlyNumbers(expression)){
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