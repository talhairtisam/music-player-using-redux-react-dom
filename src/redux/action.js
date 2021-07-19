import { actionType } from "./actionType";

export const forwardAction =() => {
    return {
        type: actionType.FORWARD
    }
}


export const backwardAction =() => {
    return {
        type: actionType.BACKWARD
    }
}

export const toggleAction =() => {
    return {
        type: actionType.TOGGLE
    }
}


