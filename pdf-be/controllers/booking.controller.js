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

module.exports = bookingController;