
 export const updateItem = (itemName) => {
    return {
        type: 'itemName',
        payload: itemName
    }
}
 export const updatePrice = (itemPrice) => {
    return {
        type: 'itemPrice',
        payload: itemPrice
    }
}
 export const updateDate = (itemDate) => {
    return {
        type: 'itemDate',
        payload: itemDate
    }
}

export const updateTime = (itemTime) => {
    return {
        type: 'itemTime',
        payload: itemTime
    }
}

export const addExpences = (expences) => {
    return {
        type: 'expences',
        payload: expences
    }
}

export const resetForm = () => {
    return{
        type: "resetForm"
    }
}