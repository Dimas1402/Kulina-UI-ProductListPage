import React, { useState } from 'react'
import Data from './Data.json'
import './ButtonLunchDinner.scss'

const ButtonLunchDinner = () => {
    const [active, setActive] = useState('')

    return (
        <div className='button'>
        <div className='row m-1'>
            {Data.btn.map(res => (
            <button
                onClick={() => setActive(res.id)}
                className={active === "" ? res.class :(
                active === res.id
                    ? res.id === 1
                    ? 'btn-active'
                    : 'btn-active2'
                    : res.id === 1
                    ? 'btn-disable2'
                    : 'btn-disable')
                }
                style={{ width: '50%' }}
            >
                {res.name}
            </button>
            ))}
        </div>
        </div>
    )
}
export default ButtonLunchDinner
