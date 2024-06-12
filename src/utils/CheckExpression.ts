const signal = ["+","-","*","/"]

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
    let isOnlyNumbers = false;
 
    const expressionDivided = expression.split(" ");
    if(expressionDivided.length === 1){
        isOnlyNumbers = true
    }
    return isOnlyNumbers
}
 
const thereIsPointAtTheEndExpression = (expression:string, value:string) => {
    return expression.charAt(expression.length - 1) === "." && value === "."
}


const isSignal = (value:string) => {
    return signal.includes(value)
}

const thereIsAlreadySignal = (expression:string) => {
    return signal.includes(expression.charAt(expression.length - 1))
}

const isZero = (expression:string) => {
    return expression === "0"
}

const isPoint = (expression:string) => {
    return expression == "."
}

const isNumber = (value:string) => {
    return (!isPoint(value) && !isSignal(value))
}

const isError = (expression:string) => {
    return expression === "Invalid record error"
}



const CheckExpression = {
    endWithSignal,
    isOnlyNumbers,
    isSignal,
    thereIsAlreadySignal,
    thereIsPointAtTheEndExpression,
    isZero,
    isNumber,
    isError

}

export default CheckExpression