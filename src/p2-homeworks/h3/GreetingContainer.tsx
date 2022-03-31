import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') 
    const [error, setError] = useState<string|null>(null) 

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
   setName(e.currentTarget.value)
    }
    const addUser = () => {
if(name.trim() !==''){addUserCallback(name.trim());
setName('') 
alert(`Hello ${name} !`);
}else {setError('Name is require!')}
        
    }
    const onKeyPressHandler=(e:KeyboardEvent<HTMLInputElement>)=>{
        setError(null);
        if (e.charCode===13){
            addUser()
        }
    }
   

    const totalUsers = users.length 

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressHandler={onKeyPressHandler}
        
        />
    )
}

export default GreetingContainer
