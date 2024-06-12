
const calculate = (expression:string) => {
   if (!hasBrackets(expression) || !hasEvenNumberOfBrackets(expression)){
    return "Invalid record error"
   }
   if (thereIsNotOperations(expression)){
      return "0"
   }
   let expressionCopy = expression;
   const operation = pickUpAnOperationWithBracketsFrom(expression)
   const resultOfOperation:string = calculateOperationInBrackets(operation)
   expressionCopy = replaceTheSimpleOperationWithResult(expressionCopy, operation, resultOfOperation)

   if (hasBrackets(expressionCopy)){
      return calculate(expressionCopy)
   }
   if (Number.isInteger(expressionCopy)){
      return parseInt(expressionCopy).toString()
   }
   return expressionCopy
}


const hasBrackets =  (expression:string) =>  expression.startsWith("(") && expression.endsWith(")")

 
const hasEvenNumberOfBrackets = (expression:string) => {
   const expressionDivided:string[] = divideExpressionBySpaces(expression)
   const numberBracketsObtained: number = expressionDivided.filter(it => it === "(" || it === ")").length
   return numberBracketsObtained % 2 == 0;
 }


const divideExpressionBySpaces = (expression:string) => {
   return expression.split(" ")
}

const thereIsNotOperations = (expression:string) => {
   return expression.replaceAll('(', ' ').replaceAll(')', ' ').trim() === ""
}


const pickUpAnOperationWithBracketsFrom = (expression:string) => {
   const allSignal = "+-*/"
   const expressionDivided = divideExpressionBySpaces(expression)
   let operation:string = "";
   for (let i = 0; i < expressionDivided.length; i++) {
      if (expressionDivided[i] === ")"){
         operation += ")"
         break
      }else{
         if (expressionDivided[i] === "("){
            if (operation.includes("(")) operation = ""
            operation += expressionDivided[i] + " "
         }else if(isNumeric(expressionDivided[i]) || allSignal.includes(expressionDivided[i])) operation += expressionDivided[i] + " "
      }
      
   }
   return operation
}


const isNumeric = (expression:string) => {
   const numericRepr = parseFloat(expression)
   return !isNaN(numericRepr)
}


const calculateOperationInBrackets = (operation:string) => {
   let operationInBracket = operation
   let operationDivided = divideExpressionBySpaces(operationInBracket)
   const simpleOperation = formatSimpleOperationFrom(operationDivided)
   const result = calculateResult(operationDivided)
   operationInBracket = replaceTheSimpleOperationWithResult(operationInBracket, simpleOperation, result)
   operationDivided =divideExpressionBySpaces(operationInBracket)

   if (thereIsOperation(operationDivided)){
      return calculateOperationInBrackets(operationInBracket)
   }

   return result
}


const formatSimpleOperationFrom = (expression:string[]) => {
   return expression[1] + " " + expression[2] + " " + expression[3]
}
 

const calculateResult = (operationDivided:string[]) => {
   const firstOperator = parseFloat(operationDivided[1])
   const secondOperator = parseFloat(operationDivided[3])
   const operator = operationDivided[2]
   switch (operator) {
      case "+":
         return (firstOperator + secondOperator).toString()

      case "-":
         return (firstOperator - secondOperator).toString()

      case "*":
         return (firstOperator * secondOperator).toString()

      case "/":
         return (firstOperator / secondOperator).toString()
   
      default:
         return "Error"
   }
}


const replaceTheSimpleOperationWithResult = (expression:string, simpleOperation:string, result:string) => {
   return expression.replace(simpleOperation, result)
}


const thereIsOperation = (operationDivided:string[]) => {
   return operationDivided.length > 3
}


const CalculatorService = {
    calculate
}

export default CalculatorService