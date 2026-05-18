const express = require("express")
const router = express.Router()

const { loginUser, registerUser } = require("../controllers/authController")

// added validators and middlewares
const validate = require("../middleware/validate")
const { registerSchema, loginSchema } = require("../validators/auth.validator")

// added rate limiter
const { authLimiter } = require("../middleware/rateLimiter")

//  register route
router.post("/register", authLimiter, validate(registerSchema), registerUser)

//  login user

router.post("/login", authLimiter, validate(loginSchema), loginUser)

module.exports = router