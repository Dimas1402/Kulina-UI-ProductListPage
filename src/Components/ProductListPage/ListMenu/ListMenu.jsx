import React from 'react'
import RatingStart from './RatingStart/RatingStar'
import './ListMenu.scss'
import Data from './Data.json'

const ListMenu = () => {
    return (
        <div className='row d-flex justify-content-center align-items-center row-card-menu'>
        {Data.data.map(res => (
            <div key={res.id} className='col-sm'>
            <div style={{width:'350px'}}  className='card mt-4 card-menu'>
                <img style={{width:'350px', height:'300px'}} className='card-img-top' src={res.img} alt='' />
                <div className='card-body'>
                <h5 className='card-title'>
                    4.5
                    <RatingStart />
                </h5>
                <p className='card-text'>Roasted Chicken with Scrambled Egg</p>
                <p className='text-kulina'>by Kulina · Uptown Lunch</p>
                <div className='box-add'>
                    <p>Rp 35,000 </p>
                    <button className='btn btn-add float-right '>ADD +</button>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>
    )
}

export default ListMenu
