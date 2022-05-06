import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
    value:string
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        value,
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions:any[]= options? options.map((op,i)=>{
        return    <MenuItem value={op} key={i}>{op}</MenuItem>

    }):[] // map options with key

    const onChangeCallback = (e: SelectChangeEvent) => {
        if (onChangeOption) {
            onChangeOption(e.target.value)
        }
        // onChange, onChangeOption
    }

    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select onChange={onChangeCallback}
                value={value}
                id="demo-simple-select-standard"
                labelId={'demo-simple-select-standard-label'}>
            {mappedOptions}
        </Select>
        </FormControl>
    )
}

export default SuperSelect
