import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './Components/auth/layout'
import AuthLogin from './pages/auth/Login'
import AuthRegister from './pages/auth/Register'
import AdminLayout from './Components/admin-view/layout'
import AdminFeatures from './pages/admin-view/features'
import AdminProducts from './pages/admin-view/products'
import AdminDashboard from './pages/admin-view/dashboard'
import AdminOrders from './pages/admin-view/orders'
import ShoppingLayout from './Components/shopping-view/layout'
import ShoppingHome from './pages/shopping-view/home'
import ShoppingListing from './pages/shopping-view/listing'
import ShoppingAccounts from './pages/shopping-view/accounts'
import ShoppingCheckout from './pages/shopping-view/checkout'
import PageNotFound from './pages/not-found'
import CheckAuth from './Components/common/checkauth'
import UnAuthPage from './pages/unauth-page'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from './store/auth-slice'
import { Skeleton } from "@/Components/ui/skeleton"
import PaypalReturn from './pages/shopping-view/paypal-return';
import PaymentSuccessPage from './pages/shopping-view/payment-success'
import SearchPage from './pages/shopping-view/search'
const App = () => {
  const { user, isAuthenticated, isLoading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth()).then((data) => { console.log(data) });
  }, [dispatch])

  if (isLoading) return <Skeleton className="w-[800] bg-black h-[600]" />

  return (
    <div>
      <Routes>
        <Route path='/' element={<CheckAuth isAuthenticated={isAuthenticated} user={user}></CheckAuth>}></Route>
        <Route path='/auth' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path='login' element={<AuthLogin />}></Route>
          <Route path='register' element={<AuthRegister />}></Route>
        </Route>

        <Route path='/admin' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path='products' element={<AdminProducts />}></Route>
          <Route path='features' element={<AdminFeatures />}></Route>
          <Route path='dashboard' element={<AdminDashboard />}></Route>
          <Route path='orders' element={<AdminOrders />}></Route>
        </Route>
        <Route path='/shop' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout />
          </CheckAuth>
        }>
          <Route path='account' element={<ShoppingAccounts />}></Route>
          <Route path='checkout' element={<ShoppingCheckout />}></Route>
          <Route path='listing' element={<ShoppingListing />}></Route>
          <Route path='home' element={<ShoppingHome />}></Route>
          <Route path='paypal-return' element={<PaypalReturn />}> </Route>
          <Route path='payment-success' element={<PaymentSuccessPage />}> </Route>
          <Route path='search' element={<SearchPage />}> </Route>
        </Route>
        <Route path='/unauth-page' element={<UnAuthPage />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App
