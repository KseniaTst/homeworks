import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (props:FilterType)=>void
    deleteAffairCallback: (_id:number)=>void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
            
        />
    ))

    // const setAll = () => {props.setFilter('all')}
    // const setHigh = () => {props.setFilter('high')}
    // const setMiddle = () => {props.setFilter('middle')}
    // const setLow = () => {props.setFilter('low')}
    const FilterChange=(FilterValue:FilterType)=>{
        props.setFilter(FilterValue)
    }

    return (
        <div>

            {mappedAffairs}

            {/*<button onClick={()=>FilterChange('all')}>All</button>*/}
            {/*<button onClick={()=>FilterChange('high')}>High</button>*/}
            {/*<button onClick={()=>FilterChange('middle')}>Middle</button>*/}
            {/*<button onClick={()=>FilterChange('low')}>Low</button>*/}
            <SuperButton filt onClick={()=>FilterChange('all')} >All</SuperButton>
            <SuperButton filt onClick={()=>FilterChange('high')} >High</SuperButton>
            <SuperButton filt onClick={()=>FilterChange('middle')} >Middle</SuperButton>
            <SuperButton filt onClick={()=>FilterChange('low')} >Low</SuperButton>
        </div>
    )
}

export default Affairs
