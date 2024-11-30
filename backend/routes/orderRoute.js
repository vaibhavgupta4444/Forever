import express from 'express'
import  {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus, verifyStripe} from '../controllers/orderControllers.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter=express.Router();


//Admin features
orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/status',adminAuth,updateStatus);

//payment Features
orderRouter.post('/place',authUser,placeOrder);
orderRouter.post('/stripe',authUser,placeOrderStripe);
orderRouter.post('/razorpay',authUser,placeOrderRazorpay);

//User feature
orderRouter.post('/userOrders',authUser,userOrders)

//verify payment
orderRouter.post('/verifystripe',authUser,verifyStripe);

export default orderRouter;