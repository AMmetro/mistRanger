import React from 'react';
import {useDispatch} from 'react-redux'
import {getAllUnitsTC} from '../../bll/unitReducer';
import {setAllUnitsFormStatusTC, setCurrentUnitFormStatusTC, setNewUnitFormStatusTC} from "../../bll/formsStatusReducer";
// import Search from "./Search";



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
  

               {/* <Search/> */}
            <ul className='units_navigation'>
                <li><div onClick={getAllUnits}>All units</div></li>
                <li><div onClick={addUnit}>New unit</div></li>
              </ul>


    </div>
  );
}

export default Unit;
