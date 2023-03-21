
import { Action } from '../actions'

const initialState = {
    products: [],
    categories: [],
    currentProduct: false,
    orderDetails:[]
}

export const ShoppingReducer  = (state = initialState, action) => {

    switch(action.type){
        case Action.LANDING_PRODUCTS:
            return {
                ...state, 
                products: action.payload.products,
                categories: action.payload.categories 
            };
        case Action.PRODUCT_DETAILS:
            return {
                ...state, 
               currentProduct: action.payload
            };
        case Action.ORDER_DETAILS:
            return {
                ...state, 
                orderDetails: action.payload
            };
        default: 
            return state;
    }

}
