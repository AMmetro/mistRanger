import React from 'react';
import {API} from './api/index';
import {useDispatch, useSelector} from "react-redux";
import {setNewUnitFormStatusTC} from "./bll/formsStatusReducer";
import './App.css';

function AllUnit() {

    const dispatch = useDispatch()

    const titleField = React.useRef(null);
    const authorField = React.useRef(null);
    const descriptionField = React.useRef(null);

    const closeForm=()=>{
       dispatch(setNewUnitFormStatusTC(false))
    }

     const saveUnit=()=>{
        const titleValue = titleField.current;
        const authorValue = authorField.current;
        const descriptionValue = descriptionField.current;

        //@ts-ignore
        const unit= {title: `${titleValue.value}`, text: `${descriptionValue.value}`, date:"30.12.2021", author:`${authorValue.value}`}
        API.addUnit(unit)
            .then((res: any) => {if (res.status==200){
                dispatch(setNewUnitFormStatusTC(false))
            } })
            .catch((error: any) => console.log(error.response ? error.response.data.errorText : error.message))
    }

    return (
             <div style={{margin: '100px 20px 20px 20px'}}>
                <article>
                    <h2>
                        <a href="/posts/1">add post</a>
                    </h2>
                    <input ref={titleField} placeholder='unit name'/>
                    <br/>
                    <input ref={authorField} placeholder='author'/>
                    <div className="info">
                        <textarea ref={descriptionField}
                         style={{width: '600px', height:'150px'}}
                        >
                            description
                        </textarea>
                    </div>
                    <button onClick={saveUnit}>save</button>
                    <button onClick={closeForm}>close</button>
                </article>
             </div>
    );
}

export default AllUnit;
