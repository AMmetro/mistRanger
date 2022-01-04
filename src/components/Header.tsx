import React from 'react';
import {useDispatch} from 'react-redux'
import {getAllUnitsTC} from "../bll/unitReducer";
import {setAllUnitsFormStatusTC, setCurrentUnitFormStatusTC, setNewUnitFormStatusTC} from "../bll/formsStatusReducer";
import Search from "./Search";



function Unit() {
    const dispatch = useDispatch()

    const getAllUnits=()=>{
        dispatch(getAllUnitsTC())
        dispatch(setAllUnitsFormStatusTC(true))
    }

    const addUnit=()=>{
          dispatch(setNewUnitFormStatusTC(true))
          dispatch(setCurrentUnitFormStatusTC(false))
          dispatch(setAllUnitsFormStatusTC(false))

    }


 return (
    <div>
        <nav>
               <Search/>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#" onClick={getAllUnits}>All units</a></li>
                <li><a href="#" onClick={addUnit}>New unit</a></li>
                <li><a href="/contacts">Contacts</a></li>
            </ul>
        </nav>

    </div>
  );
}

export default Unit;
