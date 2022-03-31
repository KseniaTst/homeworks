import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = FilterType 
export type AffairType ={
    _id: number
    name: string
    priority:string
}// need to fix any
export type FilterType = 'all' | 'high'|'middle'|'low'

// constants
const defaultAffairs: Array<AffairType> = [ 
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: any): any => { 
     if(filter==='high') return  affairs.filter(t=>t.priority==='high')
    else if (filter==='middle')return affairs.filter(t=>t.priority==='middle')
    else if(filter==='low')return affairs.filter(t=>t.priority==='low')
    else return affairs
}
export const deleteAffair = (affairs:Array<AffairType>, _id: number) => {
    let result =affairs.filter(t => t._id !== _id)
    return result
  
}

function HW2() {
    const [affairs, setAffairs] = useState(defaultAffairs) 
    const [filter, setFilter] = useState<FilterType>()

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) 

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
