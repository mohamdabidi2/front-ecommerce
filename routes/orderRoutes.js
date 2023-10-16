const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController.js');
const authMiddleware = require('../middleware/authMiddleware.js');


router.route('/').post(authMiddleware.protect, orderController.addOrderItems).get(authMiddleware.protect, authMiddleware.admin, orderController.getOrders);
router.route('/mine').get(authMiddleware.protect, orderController.getMyOrders);
router.route('/:id').get(authMiddleware.protect, orderController.getOrderById);
router.route('/:id/pay').put(authMiddleware.protect, orderController.updateOrderToPaid);
router.route('/:id/deliver').put(authMiddleware.protect, authMiddleware.admin, orderController.updateOrderToDelivered);
router.route('/edit/:id/deliver').put(orderController.updateOrderToDelivered)
router.route('/edit/:id/pay').put(orderController.updateOrderToPay)
module.exports = router;
