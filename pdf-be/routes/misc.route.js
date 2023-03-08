const { CheckAuth } = require("../middlewares/jwr.middleware");
const controller = require("../controllers/misc.controller");
const router = require("express").Router();
router.post('/update-hotel',controller.updateHotel);
router.get('/delete-hotel',controller.deleteHotel);
router.get('/hotels',controller.getHotels);
router.post('/update-room-type',controller.updateRoomType);
router.get('/delete-room-type',controller.deleteRoomType);
router.get('/roomtypes',controller.getRoomTypes);


router.post('/update-destination',controller.updateDestination);
router.get('/delete-destination',controller.deleteDestination);
module.exports = router;