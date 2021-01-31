import React from 'react'
import Category from './Category'

const Navbar = ({navBarItems, getCat}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            {navBarItems.map((cat)=>(<Category key={cat.id} getCat={getCat} category={cat}/>))}
            
        </nav>
    )
}

export default Navbar
