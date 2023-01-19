import { Router } from "express";
import { Login, Register } from './userControllers.js'

const router = Router()

router.route('/login').post(Login)
router.route('/register').post(Register)

export default router;