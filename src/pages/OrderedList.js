const OrderedList = ({ selectedMenus = [] }) =>
{
    return (
      <div>
        <h1>Ordered List</h1>
        {
          selectedMenus.length > 0 ? (
          <ul>
            {selectedMenus.map((menu, index) => (
              <li key={index}>
                {menu.name} - \{menu.price}
              </li>
            ))}
          </ul>
          ) : (<p>주문 내역이 없습니다.</p>)
        }
      </div>
    );
  };
  
  export default OrderedList;