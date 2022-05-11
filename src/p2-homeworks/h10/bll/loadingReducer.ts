export type InitType={
    isload:boolean
}
export type LoadingAT={
    type: 'LOADING'
    isload:boolean
}

const initState = {
isload:false
}

export const loadingReducer = (state = initState, action: LoadingAT): InitType => { // fix any
    switch (action.type) {
        case 'LOADING': {
          return {...state , isload: action.isload}
        }
        default: return state
    }
}

export const loadingAC = (isload:boolean): LoadingAT => ({ type:'LOADING' as const ,isload}) // fix any