const { CheckAuth } = require("../middlewares/jwr.middleware");
const controller = require("../controllers/user.controller");
const router = require("express").Router();
router.get('/',CheckAuth("admin"),controller.List);
router.post('/',CheckAuth("admin"),controller.Edit);
router.post('/add',controller.Add);
router.post('/reset-password',controller.ResetPassword);
router.get('/delete',CheckAuth("admin"),controller.delete);
module.exports = router;