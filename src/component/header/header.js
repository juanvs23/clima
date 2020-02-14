import React from 'react'


const Header = (props) => {
    return (<header  ><nav className="nav-wrapper light-blue darken-2" ><a  href = "#top" className="brand-logo">{props.title}</a></nav></header>)
}
export default Header
