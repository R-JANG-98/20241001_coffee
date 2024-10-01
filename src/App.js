import { useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import MenuDetail from "./pages/MenuDetail";
import OrderedList from "./pages/OrderedList";

function App()
{
  const [selectedMenus, setSelectedMenus] = useState([]);

    const addToOrderList = (menu) =>
    {
        setSelectedMenus((prevMenus) => [...prevMenus, menu]);
    };

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element ={<Layout/>}>
          <Route path = "/main" element ={<Main/>}/>
          <Route path = "/ordered_list" element ={<OrderedList selectedMenus = {selectedMenus}/>}/>
          <Route path = "menu">
            <Route index element = {<Menu/>}/>
            <Route path = ":id" element = {<MenuDetail addToOrderList = {addToOrderList}/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;