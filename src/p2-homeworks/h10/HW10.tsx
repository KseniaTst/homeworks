import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {loadingAC} from "./bll/loadingReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {CircularProgress} from "@mui/material";

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isload)
const dispatch=useDispatch()
    const setLoading = () => {
       dispatch(loadingAC(true))
        setTimeout(()=> dispatch(loadingAC(false)),2000)

        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10
            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><CircularProgress color={'secondary'}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
