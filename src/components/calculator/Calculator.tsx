import style from "./Calculator.module.css"
import Screen from '../screen/Screen'
import ContainerButtons from "../containerbuttons/ContainerButtons"
import React from "react"

function Calculator() {
  const [expression, setExpression] = React.useState("0");
  return (
    <div className={`${style.calculatorContainer}`}>
        <Screen expression={expression} />
        <ContainerButtons expression={expression} setExpression={setExpression}/>
      </div>
  )
}

export default Calculator