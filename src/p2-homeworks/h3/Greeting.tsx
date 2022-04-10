import React, {KeyboardEvent, ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string 
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=> void 
    addUser: ()=>void 
    error: string|null
    totalUsers: number
    onKeyPressHandler:(e:KeyboardEvent<HTMLInputElement>)=>void
}


// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    
    return (
        <div className={s.main}>
            <div>
                <SuperInputText error={error}
                                value={name}
                                onKeyPress={onKeyPressHandler}
                                onChange={setNameCallback}/>
            </div>
            <div className={s.someClass}>
                <SuperButton add onClick={addUser}>add</SuperButton>
                <span>{totalUsers}</span>
            </div>

        </div>
    )
}

export default Greeting
//className={inputClass}