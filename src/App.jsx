import { useState } from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import SignUp from './Pages/SignUp'
import Dashboard from './Pages/Dashboard'
import Layout from './components/Layout'


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<SignUp />} />
      <Route path='/overview' element={<Layout />}>
        <Route index element={<Dashboard />} />
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
