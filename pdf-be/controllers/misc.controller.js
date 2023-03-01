const Misc = require("../models/misc/misc-db.model");

const miscController = {};
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.getHotels =async (req,res,next)=>{
    var result = await Misc.getHotels();
    result.success?res.Ok(result.data):res.BadRequest({},"Something went wrong");
}
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.getRoomTypes =async (req,res,next)=>{
    var result = await Misc.getRoomTypes();
    result.success?res.Ok(result.data):res.BadRequest({},"Something went wrong");
}

module.exports = miscController;