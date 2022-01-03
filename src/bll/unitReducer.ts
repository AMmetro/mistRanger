import {API} from "../api";
import {AppStoreType} from "./store";


export type UnitReducerType = { id: number, title: string, text: string, date: string, author: string};
export type UnitReducerStateType = UnitReducerType[];

const initState: UnitReducerStateType = [ {
    id: 1,
    title: 'Unit',
    text: 'Text describe units',
    date:"xx.yy.zzzz",
    author:"unknown"
}];

export const unitReducer = (state = initState, action: UnitsACType): UnitReducerStateType => {
    switch (action.type)
    {
        case "setAllUnits": {
             return [...action.allUnits]
        }

        case "second": {
            return [...state]
        }

        default:
            return [...state];
    }

};

// actions-------------------------------------------------------------------
type UnitsACType = { type: "setAllUnits"|"second", allUnits:  Array<UnitReducerType>};

export const setAllUnitsAC = (allUnits: Array<UnitReducerType>): UnitsACType => {
    return {type: "setAllUnits", allUnits}
};


// thunks-------------------------------------------------------------------

export const getAllUnitsTC = () => {
    return (dispatch: any, getState: () => AppStoreType) => {
        API.getAllUnits()
            .then((res: any) => {dispatch(setAllUnitsAC(res))})
            .catch((error: any) => console.log(error.response ? error.response.data.errorText : error.message))
    }
}

