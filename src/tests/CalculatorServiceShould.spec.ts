import {describe, expect, it} from "vitest"
import CalculatorService from "../services/CalculatorService"

// Rules
    // Throw an error when there are no brackets at the beginning and at the end.
    // Throw an error when there is no even number of parentheses
    // resolve not given operation as zero
    // Calculate the operation according to the PEMDAS rules.

    // Examples
    // "( )" -> "0"
    // "( ( ) )" -> "0"
    // "( 0 + 1 )" -> "1"
    // "( 0 - 1 )" -> "-1"
    // "( 2 * 1 )" -> "2"
    // "( 6 / 2 )" -> "3"
    // "( 1 + ( 0 + 1 ) )" -> "2"
    // "( ( 2 + 3 ) + ( 3 + 2 ) )" -> "10"
    // "( 1 + ( ( 2 + 3 ) * (4 * 5) ) )" -> "101"
    // "3 + ( 2 * 1 )" -> "Invalid record error"
    // "( 3 + ( 2 * 1 )" -> "Invalid record error"

describe ("Calculator Service should", () => {

    it("resolve not given operation as zero", () => {
        expect("0").toBe(CalculatorService.calculate("( )"))
        expect("0").toBe(CalculatorService.calculate("( ( ) )"))
    })

    it("calculate the most simple sum operation", () => {
        expect("1").toBe(CalculatorService.calculate("( 0 + 1 )"))
    })

    it("calculate the most simple subtract operation", () => {
        expect("-1").toBe(CalculatorService.calculate("( 0 - 1 )"))
    })

    it("calculate the most simple multiply operation", () => {
        expect("2").toBe(CalculatorService.calculate("( 2 * 1 )"))
    })

    it("calculate the most simple divide operation", () => {
        expect("3").toBe(CalculatorService.calculate("( 6 / 2 )"))
    })

    it("calculate the most simple operation with brackets inside", () => {
        expect("2").toBe(CalculatorService.calculate("( 1 + ( 0 + 1 ) )"))
    })

    it("calculate the another operation with brackets inside", () => {
        expect("10").toBe(CalculatorService.calculate("( ( 2 + 3 ) + ( 3 + 2 ) )"))
    })

    it("calculate the another more complex operation with brackets inside", () => {
        expect("101").toBe(CalculatorService.calculate("( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )"))
    })

    it("calculate the another more complex operation with some brackets inside", () => {
        expect("-165").toBe(CalculatorService.calculate("( 5 * ( 4 * ( 3 * ( 2 * ( 1 * 9 ) / 8 - 7 ) + 6 ) ) )"))
    })

    it("throw error when there are not brackets at beginning and end", () => {
        expect("Invalid record error").toBe(CalculatorService.calculate(" 3 + ( 2 * 1 )"))
    })

    it("throw error when there is no even number of brackets", () => {
        expect("Invalid record error").toBe(CalculatorService.calculate("( 3 + ( 2 * 1 )"))
    })

})