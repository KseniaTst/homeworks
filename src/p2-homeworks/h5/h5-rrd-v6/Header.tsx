import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header} >
            <NavLink to={'/preJunior'} className={(navData)=>navData.isActive? s.active: s.link} >PreJunior</NavLink>
            <NavLink to={'/junior'} className={(navData)=>navData.isActive? s.active: s.link}>Junior</NavLink>
            <NavLink to={'/juniorPlus'} className={(navData)=>navData.isActive? s.active: s.link}>Junior+</NavLink>
            <div className={s.block}/>

        </div>
    )
}

export default Header
