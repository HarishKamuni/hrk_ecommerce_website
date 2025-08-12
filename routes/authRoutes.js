import express from 'express';
import {
  registerController,
  loginController,
  testController,
} from '../controllers/authControllers.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

// router object
const router = express.Router();

// routing
//REGISTER || METHOD POST
router.post('/register', registerController);

// LOGIN || POST
router.post('/login', loginController);

//test route
router.get('/test', requireSignIn, isAdmin, testController);

export default router;
