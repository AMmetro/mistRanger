import {AppStoreType} from "./store";


export type FormsStatusReducerType = { isAddingNewUnit: boolean, showCurrentUnit: boolean, showAllUnits: boolean};

const initState: FormsStatusReducerType = { isAddingNewUnit: false, showCurrentUnit: false, showAllUnits: false};


export const formsStatusReducer = (state = initState, action: SetFormStatusACType): FormsStatusReducerType => {
    switch (action.type)
    {
        case "setNewUnitFormStatus": {
             return {...state, isAddingNewUnit:action.status}
        }

        case "setCurrentUnitFormStatus": {
             return {...state, showCurrentUnit:action.status}
        }

        case "setAllUnitsFormStatus": {
             return {...state, showAllUnits:action.status}
        }

       default:
            return state
    }

};

// actions-------------------------------------------------------------------
type SetFormStatusACType = { type: "setNewUnitFormStatus" | "setCurrentUnitFormStatus" | "setAllUnitsFormStatus" ,
    status: boolean};

export const setNewUnitFormStatusAC = (status: boolean): SetFormStatusACType => {
    return {type: "setNewUnitFormStatus", status}
};

export const setCurrentUnitFormStatusAC = (status: boolean): SetFormStatusACType => {
    return {type: "setCurrentUnitFormStatus", status}
};

export const setAllUnitsFormStatusAC = (status: boolean): SetFormStatusACType => {
    return {type: "setAllUnitsFormStatus", status}
};

// thunks-------------------------------------------------------------------

export const setNewUnitFormStatusTC = (status: boolean) => {
    return (dispatch: any, getState: () => AppStoreType) => {
            dispatch(setNewUnitFormStatusAC(status))
    }
}

export const setCurrentUnitFormStatusTC = (status: boolean) => {
    return (dispatch: any, getState: () => AppStoreType) => {
            dispatch(setCurrentUnitFormStatusAC(status))
    }
}

export const setAllUnitsFormStatusTC = (status: boolean) => {
    return (dispatch: any, getState: () => AppStoreType) => {
            dispatch(setAllUnitsFormStatusAC(status))
    }
}

