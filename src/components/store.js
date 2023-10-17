import { createStore } from "redux";

const inputValues = {
    itemName: '',
    itemPrice: '',
    itemDate: '',
    itemTime: '',
    expences: []
}

const reducer = (state = inputValues, action) => {
    switch(action.type){
        case 'itemName':
            return{...state, itemName: action.payload}
         
        case 'itemPrice':
            return{...state, itemPrice: action.payload}    

        case 'itemDate':
            return{...state, itemDate: action.payload} 
            
        case 'itemTime':
            return{...state, itemTime: action.payload} 
            
        case 'expences':
            return state.expences.push(action.payload)  


        case 'resetForm':
            return inputValues    
            
        default:
            return state    
    } 
}

export const store = createStore(reducer);