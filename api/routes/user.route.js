import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test)

const userRoutes = router;

export default userRoutes