import { ScreenProps } from "../../types/ScreenProps"
import style from "./Screen.module.css"


function Screen({expression}:ScreenProps) {
  return (
    <div className= {`${style.screen}`}>
        <p className={`${style.text}`}>{expression}</p>
    </div>
  )
}

export default Screen