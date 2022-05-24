
type ChangeThemeTypeAT={
    type:"CHANGE-THEME"
    theme:string
}
type InitStateType={
    theme:string
}

const initState = {
theme:'white'
};

export const themeReducer = (state:InitStateType = initState, action: ChangeThemeTypeAT): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state,
                theme:action.theme};
        }
        default: return state;
    }
};

export const changeThemeC = (theme:string): ChangeThemeTypeAT => ({type:"CHANGE-THEME",theme}); // fix any