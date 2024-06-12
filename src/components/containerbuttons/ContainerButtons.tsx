import CalculatorService from "../../services/CalculatorService"
import CheckExpressionService from "../../services/CheckExpressionService"
import { ContainerButtonsProps } from "../../types/ContainerButtonsProps"
import style from "./ContainerButtons.module.css"

function ContainerButtons({expression, setExpression}:ContainerButtonsProps) {
  const sendExpression = (value:string) => {
    
    let newExpression = ""
    if ((CheckExpressionService.isZero(expression) && CheckExpressionService.isNumber(value)) || 
          CheckExpressionService.isError(expression)){
      newExpression = value
    }else{
      if (CheckExpressionService.isSignal(value) || CheckExpressionService.thereIsAlreadySignal(expression)){
        newExpression = expression + " " + value
      }else{
        if (CheckExpressionService.thereIsPointAtTheEndExpression(expression, value)){
          newExpression = expression
        }else{
          newExpression = expression + value
        }
      }
    }
    setExpression(newExpression)
  }


  const sendResult = () => {

    if (!CheckExpressionService.endWithSignal(expression) && !CheckExpressionService.isOnlyNumbers(expression)){
      const expressionWithBrackets = "( " + expression + " )"
      const data = CalculatorService.calculate(expressionWithBrackets)
      setExpression(data) 
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