const { CheckAuth } = require("../middlewares/jwr.middleware");
const controller = require("../controllers/user.controller");
const router = require("express").Router();
router.get('/',CheckAuth("admin"),controller.List);
router.post('/add',controller.Add);
router.get('/delete',CheckAuth("admin"),controller.delete);
module.exports = router;