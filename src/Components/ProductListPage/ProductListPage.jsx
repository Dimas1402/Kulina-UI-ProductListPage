import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./ProductListPage.scss"
import ListMenu from './ListMenu/ListMenu'

const HomePage = () => {
    return (
        <>
         <Navbar/>
        <div className="container text-left ">
            
            <p className="text-tgl pt-4">Kamis, 13 Maret 2019</p>
            <ListMenu/>
        </div>
        </>
    )
}

export default HomePage