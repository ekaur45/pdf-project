const { CheckAuth } = require("../middlewares/jwr.middleware");
const controller = require("../controllers/misc.controller");
const router = require("express").Router();
router.get('/hotels',controller.getHotels);
router.get('/roomtypes',controller.getRoomTypes);
module.exports = router;