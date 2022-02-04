import {types} from "../types/types";

export const ingredientAction = (ingredient_spending, fulltime_employees) => ({
    type: types.ingredient_spending,
    payload : {
        ingredient_spending,
        fulltime_employees
    }
})

export const fulltimeAction = (ingredient_spending, fulltime_employees) => ({
    type: types.fulltime_employees,
    payload: {
        ingredient_spending,
        fulltime_employees
    }
})
