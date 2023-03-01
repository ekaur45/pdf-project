const { CheckAuth } = require("../middlewares/jwr.middleware");
const controller = require("../controllers/user.controller");
const router = require("express").Router();
router.get('/',controller.List);
router.post('/add',controller.Add);
module.exports = router;