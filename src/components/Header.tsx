import React from 'react';
import {useDispatch} from 'react-redux'
import {getAllUnitsTC} from "../bll/unitReducer";
import {setCurrentUnitFormStatusTC, setNewUnitFormStatusTC} from "../bll/formsStatusReducer";



function Unit() {
    const dispatch = useDispatch()

    const getAllUnits=()=>{
        dispatch(getAllUnitsTC())
    }

    const addPost=()=>{
          dispatch(setNewUnitFormStatusTC(true))
          dispatch(setCurrentUnitFormStatusTC(false))

    }

    // const savePost=()=>{
    //     const titleValue = titleField.current;
    //     const authorValue = authorField.current;
    //     const descriptionValue = descriptionField.current;
    //
    //     //@ts-ignore
    //     const post= {title: `${titleValue.value}`, text: `${descriptionValue.value}`, date:"30.12.2021", author:`${authorValue.value}`}
    //     API.addPost(post)
    //         .then((res: any) => setIsAdding(false))
    //         .catch((error: any) => console.log(error.response ? error.response.data.errorText : error.message))
    // }



 return (
    <div className='body'>

        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#" onClick={getAllUnits}>All units</a></li>
                <li><a href="#" onClick={addPost}>New unit</a></li>
                <li><a href="/contacts">Contacts</a></li>
            </ul>
        </nav>


    </div>
  );
}

export default Unit;
