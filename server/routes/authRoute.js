const { getUserAuth } = require("../controllers/auth");
const { authMiddleware } = require("../middleware/auth");
const router = require("express").Router();

router.route("/").get(authMiddleware, getUserAuth);

module.exports = router;
