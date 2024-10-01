import { NavLink } from "react-router-dom";

const NavBar = () =>
{
    const activeStyle =
    {
        backgroundColor: "purple",
        color: "white"
    }

    return (
        <div>
            <ul>
                <li><NavLink to = {"/main"} style ={({isActive}) => isActive ? activeStyle: null}>
                    Main</NavLink>
                </li>
                <li><NavLink to = {"/menu"} style ={({isActive}) => isActive ? activeStyle: null}>
                    Menu</NavLink>
                </li>
                <li><NavLink to = {"/ordered_list"} style ={({isActive}) => isActive ? activeStyle: null}>
                    Ordered List</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;