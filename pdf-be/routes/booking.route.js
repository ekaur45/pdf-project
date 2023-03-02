const { CheckAuth } = require("../middlewares/jwr.middleware");
const controller = require("../controllers/booking.controller");
const router = require("express").Router();
router.post('/add',controller.addBooking);
router.get('/all',controller.get);
router.get('/getbyid',controller.getById);
router.get('/print',controller.print);
module.exports = router;