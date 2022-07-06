import { BUY_PIZZA, RETURN_PIZZA, RESET_PIZZA} from './pizzaTypes'

const initialState = {
    numOfPizza: 100,
}

const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PIZZA:
            return { ...state, numOfPizza: state.numOfPizza - parseInt(action.payload) }
        
        case RETURN_PIZZA:
            return { ...state, numOfPizza: state.numOfPizza + parseInt(action.payload) }

        case RESET_PIZZA:
            return { numOfPizza: 100 }  
            
        default:
            return state    
    }
}

export default pizzaReducer