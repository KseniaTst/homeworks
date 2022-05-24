import React from 'react'
import {Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number,number]) => void
    value?: [number,number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        ...restPtrops
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (event: Event, newValue: number | number[])=>{

        if (onChangeRange ) {
            onChangeRange( newValue as [number,number])
        }
    };

    return (
        <Slider
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={onChangeCallback}
            valueLabelDisplay="auto"
            style={{width:'130px'}}
        />
    )
}

export default SuperDoubleRange
