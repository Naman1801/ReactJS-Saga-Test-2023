import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART,PRODUCT_LIST, SEARCH_PRODUCT } from "../constants"

export const addToCart = (data) => {
    console.warn("action is called", data)
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeToCart = (data) => {
    console.warn("action removeToCart", data)
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = () => {
    console.warn("action emptyCart",)
    return {
        type: EMPTY_CART,
    }
}
export const productList = () => {
  
    return {
        type: PRODUCT_LIST,
    }
}

export const productSearch = (query) => {
  
    return {
        type: SEARCH_PRODUCT,
        query
    }
}