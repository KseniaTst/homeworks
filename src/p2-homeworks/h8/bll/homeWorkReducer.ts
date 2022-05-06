import {UserType} from "../HW8";

type SortUpAT={
    type: 'sort'
    payload: 'up'
}
type SortDownAT={
    type: 'sort'
    payload: 'down'
}
type CheckAT={
    type:'check'
    payload:number
}

type ActionType=SortUpAT| CheckAT| SortDownAT


export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState=[...state].sort((a,b)=>{
                if(a.name>b.name)return 1
                else if(a.name<b.name)return -1
                else return 0
            })
            return action.payload==='up'?newState:newState.reverse()
        }
        case 'check': {

            return state.filter(el=> el.age>action.payload)
        }
        default: return state
    }
}