import { Dispatch, SetStateAction } from "react"

export type ContainerButtonsProps = {
    expression:string,
    setExpression: Dispatch<SetStateAction<string>>
}