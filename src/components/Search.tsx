import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from "../bll/store";
import {UnitReducerType} from '../common/types/unitTypes'
import {getUnitsTC} from "../bll/currentUnitReducer";

function Search() {
    const dispatch = useDispatch()

    const allUnit = useSelector<AppStoreType, Array<UnitReducerType>>(state => state.unitReducer)

    const searchField = React.useRef(null);

    const search = () => {
        //@ts-ignore
        const searchValue = searchField.current.value
        // console.log(searchValue.toLowerCase())
        let res = allUnit.find(unit => unit.title.toLowerCase().trim()==searchValue.toLowerCase().trim())
        if(res !=undefined){
            console.log(res)
            dispatch(getUnitsTC(res._id))
        }
    }

    return (
        <div style={{marginTop: '27px', height:'20px'}}>
            <input type='text' placeholder={'search'} ref={searchField}/>
            <button onClick={search}>ok</button>
        </div>
    );
}

export default Search;
