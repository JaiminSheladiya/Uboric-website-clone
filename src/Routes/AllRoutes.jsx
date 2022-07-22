import React from 'react'
import { Route  , Routes } from "react-router-dom";
import BecomeSeller from './BecomeSeller';
import BulkOrder from './BulkOrder';
import CustomerLogin from './CustomerLogin';
import Home from './Home';
import Products from './Products';
export default function AlllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/becomeseller' element={<BecomeSeller />} />
            <Route path='/bulkorder' element={<BulkOrder />} />
            <Route path='/customerlogin' element={<CustomerLogin/>} />
            <Route path='/products/:category' element={<Products />} />
        </Routes>
    </div>
  )
}
