import React, {useState} from "react";
import {API} from '../../api/index';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../bll/store";
import '../../App';
import {setCurrentUnitFormStatusTC} from "../../bll/formsStatusReducer";

function CurrentUnit() {

    const dispatch = useDispatch()
    const currentUnit = useSelector<AppStoreType, any>(state => state.currentUnitReducer)


    const [isEdit, setIsEdit] = useState<boolean>(false);

    const closeForm = ()=>{
        dispatch(setCurrentUnitFormStatusTC(false));
    }
    const editForm = ()=>{
        setIsEdit(true)
    }

    const titleField = React.useRef(null);
    const authorField = React.useRef(null);
    const descriptionField = React.useRef(null);

    const saveUnit=()=>{
        const titleValue = titleField.current;
        const authorValue = authorField.current;
        const descriptionValue = descriptionField.current;

        //@ts-ignore
        const updatedUnit = {id:`${currentUnit._id}`, title: `${titleValue.value}`, text: `${descriptionValue.value}`, date:"30.12.2021", author:`${authorValue.value}`}

            API.editUnit(updatedUnit)
                .then((res: any) => {
                     if (res.status==200){closeForm()
                  }
                })
                // .then(()=>window.location.reload())
                // .then(()=>window.location.href='/posts')
                .catch((error: any) => console.log(error.response ? error.response.data.errorText : error.message))
    }




    return (

        <div style={{margin: '100px 20px 20px 20px'}}>

            {isEdit &&
            <div>

                    <h2>
                        <a href="/posts/1">add post</a>
                    </h2>
                    title
                    <textarea ref={titleField}>{currentUnit.title}</textarea>
                    <br/>
                    author
                    <textarea ref={authorField}>{currentUnit.author}</textarea>
                    <div className="info">
                        <textarea ref={descriptionField} style={{width: "500px", height: "200px"}}>{currentUnit.text}</textarea>
                    </div>
                    <button onClick={saveUnit}>save</button>
                    <button onClick={closeForm}>close</button>

            </div>
            }

            {!isEdit &&
            <div>
                <article>
                    <span style={{color: 'lightBlue'}}>
                        {currentUnit.title}
                    </span>
                    <span style={{color: 'lightBlue', paddingLeft: '50px'}}>
                        {currentUnit.author}
                    </span>

                    <p>{currentUnit.text}</p>

                    <div className="info">
                        <span style={{fontSize: '10px', paddingLeft: '50%'}}>
                            {currentUnit.createdAt}
                        </span>
                    </div>
                    <button onClick={closeForm}>close</button>
                    <button onClick={editForm}>edit</button>
                </article>
            </div>
            }

        </div>
    );
}

export default CurrentUnit;
