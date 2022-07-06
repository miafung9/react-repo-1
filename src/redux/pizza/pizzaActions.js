import { BUY_PIZZA, RETURN_PIZZA, RESET_PIZZA } from "./pizzaTypes";

// ACTION CREATOR FUNCTIONS RETURNS AN ACTION OBJECT 
export const buyPizza = (quantity) => {
    return {
        type: BUY_PIZZA,
        payload: quantity
    }
}

// buyPizza() => { type: BUY_PIZZA }

export const returnPizza = (quantity) => {
    return {
        type: RETURN_PIZZA,
        payload: quantity
    }
}

export const resetPizza = () => {
    return {
        type: RESET_PIZZA
    }
}