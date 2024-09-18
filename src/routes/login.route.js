const express = require('express');
const { register, login, addToCart, deleteCart, getAllCart, userUpdate } = require('../controllers/login');
const { auth } = require('../middlewares/auth.middleware');
const validateMiddleware = require('../middlewares/validate.middleware');
const { registerSchema, loginSchema, addToCartSchema } = require('../schemas/schemas');

const router = express.Router();

router.post('/register', validateMiddleware(registerSchema), register);
router.post('/login', validateMiddleware(loginSchema), login);
router.post('/cart/add', auth, addToCart);
router.delete('/cart/delete/:itemId', auth, deleteCart);
router.get('/cart/all', auth, getAllCart)
router.put('/cart/change', validateMiddleware(addToCartSchema), auth, addToCart);
router.put('/user/update', auth, userUpdate);

module.exports = router;
