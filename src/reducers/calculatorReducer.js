import {types} from "../types/types";

const initialState = {
    ingredient_spending: 0,
    fulltime_employees: 0
}

const factorIngredient = ((8.611 * 100) / 36.211) / 100
const factorFulltime = ((36.211 * 100) / 8.611) / 100

export const calculatorReducer = (state = initialState, action) => {
    console.log('CALCULATOR REDUCER')
    console.log(state)

    switch (action.type) {
        case types.ingredient_spending:
            return {
                ingredient_spending: action.payload.ingredient_spending,
                fulltime_employees: (action.payload.ingredient_spending * factorIngredient).toFixed(3)
            }

        case types.fulltime_employees:
            return {
                ingredient_spending: (action.payload.fulltime_employees * factorFulltime).toFixed(3),
                fulltime_employees: action.payload.fulltime_employees
            }

        default:
            return state
    }
}