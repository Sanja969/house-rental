import React from 'react'
import { useSelector} from 'react-redux';


export default function HomeDetail () {

    const house = useSelector((state) => state.house);
    console.log('house', house)
    return (
        <div>
            <h1>Home Detail</h1>
            
        </div>
    )
}
