import React, {useEffect} from 'react'
import RatingStart from './RatingStart/RatingStar'
import './ListMenu.scss'
import Data from './Data.json'

const ListMenu = ({ increment, items, harga }) => {
    useEffect(() => {
        harga(items === 0 ? 35000 : 35000 * items)

    },[items])
    return (
        <div className='row d-flex justify-content-center align-items-center row-card-menu'>
        {Data.data.map(res => (
            <div key={res.id} className='col-sm d-flex justify-content-center '>
            <div style={{ width: '350px' }} className='card mt-4 card-menu'>
                <img
                style={{ width: '350px', height: '300px' }}
                className='card-img-top'
                src={res.img}
                alt=''
                />
                <div className='card-body'>
                <h5 className='card-title'>
                    4.5
                    <RatingStart />
                </h5>
                <p className='card-text'>Roasted Chicken with Scrambled Egg</p>
                <p className='text-kulina'>by Kulina · Uptown Lunch</p>
                <div className='box-add'>
                    <p className='text-harga'>Rp 35,000 </p>
                    <button
                    onClick={() => [
                        increment(items + 1),
                    ]}
                    className='btn btn-add float-right '
                    >
                    ADD +
                    </button>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>
    )
}

export default ListMenu
