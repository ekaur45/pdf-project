const Misc = require("../models/misc/misc-db.model");

const miscController = {};



/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.updateHotel= async (req,res,next)=>{
    var result = await Misc.updateHotel(req.body);
    result.success?res.Ok({},"Hotel updated."):res.BadRequest({},"Error updating hotel.");
}



/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.deleteHotel= async (req,res,next)=>{
    var result = await Misc.deleteHotel(req.query.id);
    result.success?res.Ok({},"Hotel deleted."):res.BadRequest({},"Error deleting hotel.");
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.updateDestination= async (req,res,next)=>{
    var result = await Misc.updateDestination(req.body);
    result.success?res.Ok({},"Destination updated."):res.BadRequest({},"Error updating Destination.");
}



/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.deleteDestination= async (req,res,next)=>{
    var result = await Misc.deleteDestination(req.query.id);
    result.success?res.Ok({},"Destination deleted."):res.BadRequest({},"Error deleting Destination.");
}



/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.getHotels =async (req,res,next)=>{
    var result = await Misc.getHotels(req.query.id);
    result.success?res.Ok(result.data):res.BadRequest({},"Something went wrong");
}






/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.updateRoomType= async (req,res,next)=>{
    var result = await Misc.updateRoomType(req.body);
    result.success?res.Ok({},"Room type updated."):res.BadRequest({},"Error updating Room type.");
}



/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.deleteRoomType= async (req,res,next)=>{
    var result = await Misc.deleteRoomType(req.query.id);
    result.success?res.Ok({},"Room type deleted."):res.BadRequest({},"Error deleting Room type.");
}




/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.getRoomTypes =async (req,res,next)=>{
    var result = await Misc.getRoomTypes(req.query.id);
    result.success?res.Ok(result.data):res.BadRequest({},"Something went wrong");
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.addFeature =async (req,res,next)=>{
    var result = await Misc.addFeature(req.body);
    result.success?res.Ok(result.data,"Feature added successfuly."):res.BadRequest({},"Something went wrong");
}
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.editFeature =async (req,res,next)=>{
    var result = await Misc.editFeature(req.body);
    result.success?res.Ok(result.data,"Feature updated successfuly."):res.BadRequest({},"Something went wrong");
}
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.deleteFeature =async (req,res,next)=>{
    var result = await Misc.deleteFeature(req.query.id);
    result.success?res.Ok(result.data,"Feature deleted successfuly."):res.BadRequest({},"Something went wrong");
}
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.getFeature =async (req,res,next)=>{
    var result = await Misc.getFeature();
    result.success?res.Ok(result.data):res.BadRequest({},"Something went wrong");
}












/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.addToc =async (req,res,next)=>{
    var result = await Misc.addToc(req.body);
    result.success?res.Ok(result.data,"Terms and remarks added successfuly."):res.BadRequest({},"Something went wrong");
}
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.editToc =async (req,res,next)=>{
    var result = await Misc.editToc(req.body);
    result.success?res.Ok(result.data,"Terms and remarks updated successfuly."):res.BadRequest({},"Something went wrong");
}
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.deleteToc =async (req,res,next)=>{
    var result = await Misc.deleteToc(req.query.id);
    result.success?res.Ok(result.data,"Terms and remarks deleted successfuly."):res.BadRequest({},"Something went wrong");
}
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.getToc =async (req,res,next)=>{
    var result = await Misc.getToc();
    result.success?res.Ok(result.data):res.BadRequest({},"Something went wrong");
}



/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.getDashboardData =async (req,res,next)=>{
    var result = await Misc.getDashboardData();
    result.success?res.Ok(result.data):res.BadRequest({},"Something went wrong");
}









miscController.getAgents = async (req,res,next)=>{
    var result = await Misc.getAgents();
    result.success?res.Ok(result.data):res.BadRequest({},"Something went wrong");
}

miscController.getStaff = async (req,res,next)=>{
    var result = await Misc.getStaff();
    result.success?res.Ok(result.data):res.BadRequest({},"Something went wrong");
}


miscController.getStats = async (req,res,next)=>{
    var result = await Misc.getStats();
    result.success?res.Ok(result.data):res.BadRequest({},"Something went wrong");
}

module.exports = miscController;