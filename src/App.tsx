import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Header from './components/Header';
import AllUnit from './AllUnit';
import NewUnit from './NewUnit';
import {AppStoreType} from "./bll/store";
import CurrentUnit from "./components/CurrentUnit";
import {getAllUnitsTC} from "./bll/unitReducer";
import './App.css';


function App() {
    const dispatch = useDispatch()

    const formsStatus = useSelector<AppStoreType, any>(state => state.formsStatusReducer)

    function scroll() {
        console.log('scroll'); 
    }

    useEffect(() => {
        dispatch(getAllUnitsTC())
        document.addEventListener('scroll', scroll)
     },[]);

    return (
        <>
            <Header/>
            {formsStatus.showAllUnits && <AllUnit/>}
            {formsStatus.showCurrentUnit && <CurrentUnit/>}
            {formsStatus.isAddingNewUnit && <NewUnit/>}
        </>
    );
}

export default App;
