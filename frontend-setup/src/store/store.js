import { configureStore } from "@reduxjs/toolkit"
import authSliceReducer from './auth-slice/index';
import AdminSliceReducer from './admin/products-slice/index'
import ShopSliceReducer from './shop/product-slice/index'
import ShopCartSliceReducer from './shop/cart-slice/index'
import shopAddressSliceReducer from './shop/address-slice/index'
import shopOrderSliceReducer from './shop/order-slice/index'
import adminOrderSliceReducer from './admin/order-slice/index'
import shopSearchSliceReducer from './shop/search-slice/index'
import shopReviewSliceReducer from './shop/review-slice/index'
import commonFeatureSliceReducer from './common-slice/index'
 const store=configureStore({
  reducer:{
    auth:authSliceReducer,
    adminProducts:AdminSliceReducer,
    shopProducts:ShopSliceReducer,
    shopCart: ShopCartSliceReducer,
    shopAddress: shopAddressSliceReducer,
    shopOrder: shopOrderSliceReducer,
    adminOrder:adminOrderSliceReducer,
    shopSearch:shopSearchSliceReducer,
    shopReview: shopReviewSliceReducer,
    commonFeature:commonFeatureSliceReducer
  }
})
export default store;

