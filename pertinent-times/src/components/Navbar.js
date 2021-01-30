import React from 'react'
import Category from './Category'

const Navbar = ({navBarItems, getCat}) => {
    return (
        <nav>
            {navBarItems.map((cat)=>(<Category key={cat.id} getCat={getCat} category={cat}/>))}
        </nav>
    )
}

export default Navbar
