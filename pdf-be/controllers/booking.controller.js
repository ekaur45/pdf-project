const { AddBookingModel } = require("../models/booking/add-booking.model");
const { Booking } = require("../models/booking/booking-db");

const bookingController = {};
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
bookingController.addBooking= async (req,res,next)=>{
    var booking = new AddBookingModel(req.body);
    await Booking.add(booking);
    res.Ok(booking);
}


/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
bookingController.deleteBooking= async (req,res,next)=>{
    var result = await Booking.delete(req.query.id);
    result.success?res.Ok({},"Booking deleted successfuly."):res.BadRequest({},"Something went wrong");
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
bookingController.getById= async (req,res,next)=>{
    var result = await Booking.getById(req.query.id);
    result.success?res.Ok(result.data[0]):res.BadRequest({},"Something went wrong.");
}
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
bookingController.get= async (req,res,next)=>{
    var result = await Booking.get();
    result.success?res.Ok(result.data):res.BadRequest({},"Something went wrong.");
}


/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
bookingController.print= async (req,res,next)=>{
    var result = await Booking.print(req.query.id);
    result.success?res.Ok(`${result.data}`):res.BadRequest({},"Something went wrong.");
}


/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
bookingController.AddHotel= async (req,res,next)=>{
    var result = await Booking.AddHotel(req.body);
    result.success?res.Ok({},"Hotel added."):res.BadRequest({},"Error adding hotel.");
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
bookingController.GetHotel= async (req,res,next)=>{
    var result = await Booking.GetHotels();
    result.success?res.Ok(result.data):res.BadRequest({});
}


/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
bookingController.AddDestination= async (req,res,next)=>{
    var result = await Booking.AddDestination(req.body);
    result.success?res.Ok({},"Destination added."):res.BadRequest({},"Error adding destination.");
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
bookingController.GetDestinations= async (req,res,next)=>{
    var result = await Booking.GetDestination();
    result.success?res.Ok(result.data):res.BadRequest({});
}



/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
bookingController.AddRoomType= async (req,res,next)=>{
    var result = await Booking.AddRoomType(req.body);
    result.success?res.Ok({},"Room type added."):res.BadRequest({},"Error adding room type.");
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
bookingController.GetRoomTypes= async (req,res,next)=>{
    var result = await Booking.GetRoomTypes();
    result.success?res.Ok(result.data):res.BadRequest({});
}



module.exports = bookingController;