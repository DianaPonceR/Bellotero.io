import {types} from "../types/types";

const initialState = {
    ingredient_spending: 0,
    fulltime_employees: 0,
    cost_food_savings: 0
}

const factorIngredient = ((8.611 * 100) / 36.211) / 100
//const factorFulltime = ((36.211 * 100) / 8.611) / 100
const factorFulltime = factorIngredient / 8

export const calculatorReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.ingredient_spending:
            return {
                ingredient_spending: action.payload.ingredient_spending,
                fulltime_employees: action.payload.fulltime_employees,
                cost_food_savings: (action.payload.fulltime_employees * factorFulltime * action.payload.ingredient_spending).toFixed(3)
            }
        case types.fulltime_employees:
            return {
                ingredient_spending: action.payload.ingredient_spending,
                fulltime_employees: action.payload.fulltime_employees,
                cost_food_savings: (action.payload.fulltime_employees * factorFulltime * action.payload.ingredient_spending).toFixed(3)
            }

        default:
            return state
    }
}