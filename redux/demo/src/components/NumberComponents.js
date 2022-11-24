import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { increase, decrease } from "../redux/actions";

function NumberComponents() {
    const {count, greeting} = useSelector(state => state.initChange)
    const dispatch = useDispatch()

    const decreasefunc = () => {
        dispatch(decrease())
    }
    const increasefunc = () => {
        dispatch(increase())
    }
    return (
        <div className='container mt-3'>
            <button className='btn btn-info me-3 px-3' onClick={decreasefunc}>Decrease -</button>
            {count}
            <button className='btn btn-info ms-3 px-3' onClick={increasefunc}>Increase +</button>
            <p>{greeting}</p>
        </div>
    )
}

export default NumberComponents;
