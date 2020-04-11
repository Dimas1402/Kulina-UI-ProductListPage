import React from 'react'
import './Navbar.scss'
import Data from './Data.json'
import ButtonLunchDinner from '../ProductListPage/Button/ButtonLunchDinner'

const Navbar = () => {
  return (
    <>
    <div className="box-nav">
      <nav className='navbar navbar-light   p-3'>
        <img
          style={{ width: '30px', height: '20px' }}
          src={require('../../Assets/arrow.svg')}
          alt=''
        />
        <div className='row'>
          <p className='text-address'>ALAMAT PENGANTARAN</p>
          <p
            data-toggle='collapse'
            href='#collapseExample'
            role='button'
            aria-expanded='false'
            aria-controls='collapseExample'
            className='text-place'
          >
            Tokepedia Tower{' '}
            <img
              style={{ width: '18px', height: '15px' }}
              src={require('../../Assets/down-arrow.svg')}
              alt=''
            />
          </p>
        </div>
      </nav>
      <div className='collapse collapse-day' id='collapseExample'>
        <div className='card card-body collapse-card'>
          <div className='row collapse-row'>
            <div id="style-1" className='scrollmenu text-center'>
              {Data.day.map(res => (
                <div key={res.id} className='box-text text-center'>
                  <div className="card card-text">
                  <p className='text-hari'>{res.hari}</p>
                  <br></br>
                  <p className='text-tgl'>{res.tgl}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ButtonLunchDinner/>
      </div>
    </>
  )
}

export default Navbar
