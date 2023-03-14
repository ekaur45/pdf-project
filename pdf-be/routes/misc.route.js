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


router.post('/feature',controller.addFeature);
router.post('/edit-feature',controller.editFeature);
router.get('/delete-feature',controller.deleteFeature);
router.get('/feature',controller.getFeature);

router.get('/agents',controller.getAgents);
router.get('/staffs',controller.getStaff);
module.exports = router;