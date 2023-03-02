const { CheckAuth } = require("../middlewares/jwr.middleware");
const controller = require("../controllers/booking.controller");
const router = require("express").Router();
router.post('/add',controller.addBooking);
router.get('/all',controller.get);
router.get('/getbyid',controller.getById);
router.get('/print',controller.print);

router.get('/destination',controller.GetDestinations);
router.post('/destination',controller.AddDestination);

router.get('/hotel',controller.GetHotel);
router.post('/hotel',controller.AddHotel);

router.get('/room-types',controller.GetRoomTypes);
router.post('/room-types',controller.AddRoomType);


module.exports = router;