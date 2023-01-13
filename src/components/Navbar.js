import React, {useState} from 'react';
import logo from './bvslogo.png';
import { Link } from 'react-router-dom';


export default function Navbar(props){
    
    const [open, setOpen] = useState(false);

    return (
        <div id="navbar" className="sticky -top-[0.4px] lg:flex block px-4 py-4 bg-gray-800 text-white">
            <img src={logo} className="h-7 rounded-3xl ml-2 mr-2" alt="BVSCode Logo" />
            <div className="lg:block">
                <ul className = {open ? "lg:flex" :  "lg:flex hidden"}>
                    <li className="mx-2 my-1 cursor-pointer"> <Link to="/">{props.Home}</Link> </li>
                    <li className="mx-2 my-1 cursor-pointer"> <Link to="/Videos">{props.Videos}</Link> </li>
                    <li className="mx-2 my-1 cursor-pointer"> <Link to="/Blog">{props.Blog}</Link> </li>
                    <li className="mx-2 my-1 cursor-pointer"> <Link to="/Contact">{props.Contact}</Link> </li> 
                </ul>
            </div>

            <div className="pr-4 absolute top-1 right-1 pt-3">
                <button onClick = {()=> setOpen(!open)} className="lg:hidden flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-black hover:border-purple appearance-none focus:outline-none">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}
