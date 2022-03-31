import React from 'react'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: {
        _id: number
        name:string
        priority: string
    } 
    deleteAffairCallback: (_id:number)=>void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)
    return deleteCallback}

    return (
        <div>
         {props.affair.name}
<SuperButton red onClick={deleteCallback}>x</SuperButton>
            {/*<button onClick={deleteCallback}>X</button>*/}
        </div>
    )
}

export default Affair
