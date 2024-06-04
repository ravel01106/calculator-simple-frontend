import { CalculatorServiceRequest } from "../types/CalculatorServiceRequest";
import { CalculatorServiceResponse } from "../types/CalculatorServiceResponse";

const URL_API = "http://localhost:8080/api/v1"

const calculate = async (expression:string) => {
    const expressionBody:CalculatorServiceRequest = {
        expression: "( " + expression + " )"
    }
    const request:RequestInfo = `${URL_API}/calculate`;
    const response = await fetch(request,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(expressionBody)
    })
    if (response.status === 200 || response.status === 400){
        const jsonResponse:CalculatorServiceResponse = await response.json()
        return jsonResponse.response
    }
    return "Error Server"

}

const CalculatorService = {
    calculate
}

export default CalculatorService