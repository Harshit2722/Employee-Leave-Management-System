const express = require("express")
const router = express.Router()

const { loginUser, registerUser } = require("../controllers/authController")

// added validators and middlewares
const validate = require("../middleware/validate")
const { registerSchema, loginSchema } = require("../validators/auth.validator")

//  register route
router.post("/register", validate(registerSchema), registerUser)

//  login user

router.post("/login", validate(loginSchema), loginUser)

module.exports = router