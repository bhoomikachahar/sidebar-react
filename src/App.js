import React from "react";
import Sidebar from "./side/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inbox from "./side/Inbox";
import Product from "./side/Product";
import Customers from "./side/Customers";
import Order from "./side/Order";
import Acc from "./side/Acc";
import Report from "./side/Report";
import Myplan from "./side/Myplan";
import Dash from "./side/Dash";


const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Dash/>}/>
          <Route path="/inbox" element = {<Inbox/>}/>
          <Route path="/product" element = {<Product/>}/>
          <Route path="/cust" element = {<Customers/>}/>
          <Route path="/order" element = {<Order/>}/>
          <Route path="/acc" element = {<Acc/>}/>
          <Route path="/report" element = {<Report/>}/>
          <Route path="/plan" element = {<Myplan/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
