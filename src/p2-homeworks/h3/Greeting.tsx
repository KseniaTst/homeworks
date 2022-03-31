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
    const inputClass = error? s.error:'' 
    
    return (
        <div>

           <SuperInputText className={inputClass}
                           value={name}
                           onKeyPress={onKeyPressHandler}
           onChange={setNameCallback}/>
            {/*<input value={name} */}
            {/*onKeyPress={onKeyPressHandler}*/}
            {/*onChange={setNameCallback} className={inputClass}/>*/}

            {/*<span>{error}</span>*/}
            <SuperButton add onClick={addUser}>add</SuperButton>
            {/*<button onClick={addUser}>add</button>*/}
            <span>{totalUsers}</span>
            {error && <div className={s.someClass}>{error}</div>}
        </div>
    )
}

export default Greeting
