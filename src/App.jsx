import { useState } from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import SignUp from './Pages/SignUp'
import Dashboard from './Pages/Dashboard'
import Layout from './components/Layout'
import ProductRegistration from './Pages/ProductRegistration'
import SupplyChainTracking from './Pages/SupplyChainTracking'
import InventoryManagement from './Pages/InventoryManagement'
import TransactionManagement from './Pages/TransactionManagement'
import RegulatoryCompliance from './Pages/RegulatoryCompliance'
import UserManagement from './Pages/UserManagement'
import ProductVerification from './Pages/ProductVerification'
import ProductVerified from './Pages/ProductVerified'
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<SignUp />} />
      <Route path='/overview' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='supplyChainTrack' element={<SupplyChainTracking />} />
        <Route path='inventoryManagement' element={<InventoryManagement />} />
        <Route path='transactionManagement' element={<TransactionManagement />} />
        <Route path='regulatoryCompliance' element={<RegulatoryCompliance />} />
        <Route path='userManagement' element={<UserManagement />} />
        <Route path='productRegistration' element={<ProductRegistration />} />
        <Route path='productVerification' element={<ProductVerification />} >
          <Route path=':id' element={<SignUp />} />
        </Route>
      </Route>
    </>
  ))

  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App
