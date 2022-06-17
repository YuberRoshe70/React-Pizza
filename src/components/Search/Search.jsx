import React from 'react'
import style from './Search.module.scss'




function Search({ value, setValue }) {
console.log( value);

    return (
        <div className={style.root}>
            <input value={value}
                onChange={e => setValue(e.target.value)}
                type="text" className={style.inp}
                placeholder='Поиск пицц...' />
            {value && <img width={30}
                className={style.imgInp}
                src="./img/close.svg" alt=""
                onClick={() => setValue('')} />}


        </div>
    )
}

export default Search