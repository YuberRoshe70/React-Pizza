import React from 'react'
import style from './Search.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { setValue } from "../../redax/slices/filterSlice"

function Search() {
    const dispatch = useDispatch()
    const value = useSelector(state => state.filterSlice.value)
    return (
        <div className={style.root}>
            <input value={value}
                onChange={e => dispatch(setValue(e.target.value))}
                type="text" className={style.inp}
                placeholder='Поиск пицц...' />
            {value && <img width={30}
                className={style.imgInp}
                src="./img/close.svg" alt=""
                onClick={() => dispatch(setValue('')) } />}
        </div>
    )
}

export default Search