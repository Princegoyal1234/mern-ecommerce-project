const express = require("express");
const {
  addToCart,
  updateCartItemQty,
  deleteCartItem,
  fetchCartItems,
} = require("../../controllers/shop/cart-controller");


const router = express.Router();

router.post("/add", addToCart);
router.delete("/:userId/:productId", deleteCartItem);
router.put("/update-cart",updateCartItemQty  );
router.get("/get/:userId", fetchCartItems);

module.exports = router;
