import React, {useEffect} from 'react';
import {API} from './api/index';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {getUnitsTC} from "./bll/currentUnitReducer";
import './App.css';


function AllUnit() {
    const dispatch = useDispatch()

    const allUnit = useSelector<AppStoreType, any>(state => state.unitReducer)

    const getUnit=(id:string)=>{
        dispatch(getUnitsTC(id))
    }

    const deletePost=(id:any)=>{
        API.deletePost(id)
            .then((res: any) => console.log(res))
            // .then(()=>window.location.reload())
            // .then(()=>window.location.href='/posts')
            .catch((error: any) => console.log(error.response ? error.response.data.errorText : error.message))
    }

     let unitHtml:Array<Object> =[]
    if(allUnit){
        //@ts-ignore
        unitHtml = allUnit.map((unit,i) => {
            //@ts-ignore
            return ( <tr key={unit._id}><td>{unit.title}</td><td>{unit.author}</td><td><button onClick={()=>getUnit(unit._id)}>read</button></td><td><button onClick={()=>deletePost(unit._id)}>delete</button></td></tr>)
        })}


    return (

        <div>

             <div style={{display: 'flex', justifyContent:'center' }}>

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
                            {unitHtml}
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

             </div>
    );
}

export default AllUnit;
