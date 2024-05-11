import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements,Navigate } from 'react-router-dom'
import Layout from './Layout.jsx'
import ProductList from './pages/ProductList.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Navigate to="/products/list" replace />} />
      <Route path='/products/list' element={<ProductList/>}/>
      <Route path='/products/:productId' element={<SingleProduct/>}/>
      <Route path='/singleProduct/:productId' element={<SingleProduct/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
