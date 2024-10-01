import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMenuDetail } from "../api/MenuApi";
import { useNavigate } from "react-router-dom";

const MenuDetail = ({ addToOrderList }) =>
{
    const { id } = useParams();
    const navigate = useNavigate();

    const [menu, setMenu] = useState(
    {
        name: "",
        price: "",
        description: ""
    });

    useEffect(() =>
    {
        const fetchMenuDetail = async () =>
        {
          try
          {
            const menuData = getMenuDetail(id);
            setMenu(menuData);
          }
          catch (error)
          {
            console.error("Failed to fetch menu details: ", error);
          }
        };
        fetchMenuDetail();
      }, [id]);

    const onClickHandlerAddToList = () =>
    {

            addToOrderList(menu);
  
    };

    const onClickHandlerBack = () =>
    {
        navigate(`/menu`);
    };

    const handleClick = () =>
    {
        onClickHandlerAddToList();
        onClickHandlerBack();
    };

    return (
        <>
            <h1>{menu.name}</h1>
            <h3>가격: {menu.price}</h3>
            <h3>{menu.description}</h3>
            <div>
                <button onClick={handleClick}>Add to list</button>
                <button onClick={onClickHandlerBack}>Back</button>
            </div>
        </>
    );
};

export default MenuDetail;