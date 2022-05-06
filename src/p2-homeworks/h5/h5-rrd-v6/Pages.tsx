import React from 'react'
import {Route, Routes, Navigate} from "react-router-dom";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import Junior from './pages/junior';
import JuniorPlus from './pages/Junior+';
import s from './pages/pages.module.css'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR:'/junior',
    JUNIORPLUS:'/juniorPlus'

    // add paths
}

function Pages() {
    return (
        <div className={s.main}>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/preJunior'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                {/* <Route path='/junior' element={<Navigate to={PATH.JUNIOR}/>}/> */}
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIORPLUS} element={<JuniorPlus/>}/>


                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
