import {types} from "../types/types";

export const ingredientAction = (ingredient_spending) => ({
    type: types.ingredient_spending,
    payload : {
        ingredient_spending
    }
})

export const fulltimeAction = (fulltime_employees) => ({
    type: types.fulltime_employees,
    payload: {
        fulltime_employees
    }
})
