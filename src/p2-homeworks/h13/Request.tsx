import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {useState} from "react";
import {postSuccess} from "./API";


export const Request = () => {
    let [success,setSuccess]=useState(false)
    console.log(success)

    const onChangeCheckBox=(e:boolean)=>{
        setSuccess(e)
    }
    const onClickSomeButton=()=>{
        postSuccess(success)
            .then(res=> console.log(res))
            .catch(res=>console.log(res))
    }

    return (
        <div>
            <div><SuperButton onClick={onClickSomeButton}>Some Button</SuperButton></div>
            <div><SuperCheckbox onChangeChecked={onChangeCheckBox}/></div>
        </div>
    )
}