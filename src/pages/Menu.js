import { useState, useEffect } from "react";
import { getMenuList } from "../api/MenuApi";
import MenuItem from "../components/MenuItem";
import { useNavigate } from "react-router-dom";


const Menu = () => 
{
    const [menuList, setMenuList] = useState([]);

    const navigate = useNavigate();

    useEffect(() => 
    {
        setMenuList(getMenuList());
    }, [])

    const onClickHandlerToList = () =>
    {
        navigate(`/ordered_list`);
    }

    return (
    <>
        <h1>For Sale</h1>
        <div>
            {menuList.map(menu => <MenuItem key = {menu.id} menu = {menu}/>)}
        </div>
        <button onClick={onClickHandlerToList}>Go to Ordered List</button>
    </>);
}
export default Menu;