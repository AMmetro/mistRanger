import React, {useEffect} from 'react';
import {API} from './api/index';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {getUnitsTC} from "./bll/currentUnitReducer";
import './App.css';

import {UnitReducerType} from './common/types/unitTypes'

export type UnitReducerStateType = UnitReducerType[];

function AllUnit() {
    const dispatch = useDispatch()

    const allUnit = useSelector<AppStoreType, UnitReducerStateType>(state => state.unitReducer)

    const getUnit = (id: string) => {
        dispatch(getUnitsTC(id))
    }


    const deletePost = (id: any) => {
        API.deletePost(id)
            .then((res: any) => console.log(res))
            // .then(()=>window.location.reload())
            // .then(()=>window.location.href='/posts')
            .catch((error: any) => console.log(error.response ? error.response.data.errorText : error.message))
    }

    var allUnitsHtml: Array<Object> = [];

    if (allUnit) {
        allUnitsHtml = allUnit.map((unit, i) => {
            return (<tr key={unit._id}>
                        <td>{unit.title}</td>
                        <td>{unit.author}</td>
                        <td>
                            <button style={{backgroundColor: '#2966cf'}} onClick={() =>getUnit(unit._id)}>verbose</button>
                        </td>
                        <td>
                            <button onClick={() => deletePost(unit._id)}>delete</button>
                        </td>
                    </tr>)
        })
    }



    return (

        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '100px',
        }}>
            <div>
                <div key={'table title'}>
                    <table>
                        <tbody>
                        <tr>
                            <th colSpan={4}>All units</th>
                        </tr>
                        <tr>
                            <th>Company</th>
                            <th>description</th>
                            <th>read</th>
                            <th>delete</th>
                        </tr>
                        {allUnitsHtml}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}

export default AllUnit;
