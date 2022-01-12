import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import UnitsHeader from './UnitsHeader';
import AllUnit from './AllUnit';
import NewUnit from './NewUnit';
import {AppStoreType} from '../../bll/store';
import CurrentUnit from "./CurrentUnit";
import {getAllUnitsTC} from "../../bll/unitReducer";
import '../../App.css';


function Units() {
    const dispatch = useDispatch()

    const formsStatus = useSelector<AppStoreType, any>(state => state.formsStatusReducer)

    

    function scroll() {
        console.log('scroll'); 
    }

    useEffect(() => {
        dispatch(getAllUnitsTC())       
     },[]);


    return (
        <>
            <UnitsHeader/>
            {formsStatus.showAllUnits && <AllUnit/>}
            {formsStatus.showCurrentUnit && <CurrentUnit/>}
            {formsStatus.isAddingNewUnit && <NewUnit/>}
        </>
    );
}

export default Units;
