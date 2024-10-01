import { Link } from "react-router-dom";

const MenuItem = ({menu}) =>
{
    return (
        <Link to ={`/menu/${menu.id}`}>
            <div>
                <h3>
                    <ul>
                        <li>{menu.name} - \{menu.price}</li>
                    </ul>
                </h3>
            </div>
        </Link>
    )
}
export default MenuItem;