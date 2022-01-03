import {API} from "../api";
import {AppStoreType} from "./store";
import {setCurrentUnitFormStatusTC} from "./formsStatusReducer";

export type UnitReducerType = { id: string, title: string, text: string, date: string, author: string};

const initState: UnitReducerType =  {
    id: '1',
    title: 'Unit',
    text: 'Text describe units',
    date:"xx.yy.zzzz",
    author:"unknown"
};

export const currentUnitReducer = (state = initState, action: UnitsACType): UnitReducerType => {
    switch (action.type)
    {
        case "setUnit": {
             return action.unit
        }

        default:
            return state;
    }

};

// actions-------------------------------------------------------------------
type UnitsACType = { type: "setUnit", unit:  UnitReducerType};

export const setUnitAC = (unit: UnitReducerType): UnitsACType => {
    return {type: "setUnit", unit}
};

// thunks-------------------------------------------------------------------

export const getUnitsTC = (id:string) => {
    return (dispatch: any, getState: () => AppStoreType) => {
        API.getUnit(id)
            .then((res: any) => {
                dispatch(setUnitAC(res));
                dispatch(setCurrentUnitFormStatusTC(true));
            })
            .catch((error: any) => console.log(error.response ? error.response.data.errorText : error.message))
    }
}


