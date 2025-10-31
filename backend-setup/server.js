require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter=require('./routes/auth/auth-Routes');
const adminProductRouter=require('./routes/admin/products-routes');
const shopProductRouter=require('./routes/shop/products-routes');
const shopCartRouter=require('./routes/shop/cart-routes');
const shopAddressRouter=require('./routes/shop/address-routes');
const shopOrderRouter=require('./routes/shop/order-routes');
const adminOrderRouter=require('./routes/admin/order-routes');
const shopSearchRouter=require('./routes/shop/search-routes');
const shopReviewRouter=require('./routes/shop/review-routes');
const commonFeatureRouter =require('./routes/common/featureRoutes')
mongoose
  .connect("mongodb+srv://PrinceGoyal:Prince%4028@prince-goyal.gkyygbl.mongodb.net/E-Commerce?retryWrites=true&w=majority&appName=Prince-Goyal")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));
const app = express();
const PORT = process.env.PORT || 5000;
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; connect-src 'self' http://localhost:5000 http://localhost:5173; script-src 'self'; style-src 'self' 'unsafe-inline';"
  );
  next();
});

app.use(
  cors({
    origin: process.env.CLIENT_BASE_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.use('/api/auth',authRouter);
app.use('/api/admin/products',adminProductRouter);
app.use('/api/shop/products',shopProductRouter);
app.use('/api/shop/cart',shopCartRouter);
app.use('/api/shop/address', shopAddressRouter);
app.use('/api/shop/order', shopOrderRouter);
app.use('/api/admin/orders',adminOrderRouter);
app.use('/api/shop/search',shopSearchRouter); 
app.use('/api/shop/review',shopReviewRouter);
app.use('/api/common/feature', commonFeatureRouter);
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
