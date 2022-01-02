import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Header from './components/Header';
import AllUnit from './AllUnit';
import NewUnit from './NewUnit';
import {AppStoreType} from "./bll/store";
import CurrentUnit from "./components/CurrentUnit";
import './App.css';



function App() {

        const formsStatus = useSelector<AppStoreType, any>(state => state.formsStatusReducer)

   useEffect(() => {
    });

    return (
     <>
         <Header/>
         <AllUnit/>
         {formsStatus.showCurrentUnit && <CurrentUnit/>}
         {formsStatus.isAddingNewUnit && <NewUnit/>}
    </>
  );
}

export default App;
