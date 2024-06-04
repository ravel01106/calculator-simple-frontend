import style from "./Calculator.module.css"
import Screen from '../screen/Screen'
import ContainerButtons from "../containerbuttons/ContainerButtons"

function Calculator() {
  return (
    <div className={`${style.calculatorContainer}`}>
        <Screen />
        <ContainerButtons />
      </div>
  )
}

export default Calculator