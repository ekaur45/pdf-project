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
    const {startDate,lastDate} = req.body;
    var result = await Misc.getStats(startDate,lastDate);
    result.success?res.Ok(result.data):res.BadRequest({},"Something went wrong");
}


miscController.addTransportation = async (req,res,next)=>{ 
    const {description,price,currency} = req.body;
    const result = await Misc.addTransportation(description,price,currency);
    result.success?res.Ok(result.data,"Transportation added successfully."):res.BadRequest({},"Something went wrong");
}
miscController.updateTransportation = async (req,res,next)=>{ 
    const {id,description,price,currency} = req.body;
    const result = await Misc.updateTransportation(id,description,price,currency);
    result.success?res.Ok(result.data,"Transportation updated successfully."):res.BadRequest({},"Something went wrong");
}
miscController.getTransportation = async (req,res,next)=>{ 
    const result = await Misc.getTransportation();
    result.success?res.Ok(result.data):res.BadRequest({},"Something went wrong");
}
miscController.deleteTransportation = async (req,res,next)=>{ 
    const id = req.query.id;
    const result = await Misc.deleteTransportation(id);
    result.success?res.Ok(result.data,"Transportation deleted successfully."):res.BadRequest({},"Something went wrong");
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.addCurrency = async (req,res,next)=>{
    const {name,code} = req.body;
    const result = await Misc.addCurrency(name,code);
    result.success?res.Ok(result.data,"Currency added successfully."):res.BadRequest({},"Something went wrong");
}
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.updateCurrency = async (req,res,next)=>{
    const {id,name,code} = req.body;
    const result = await Misc.updateCurrency(id,name,code);
    result.success?res.Ok(result.data,"Currency updated successfully."):res.BadRequest({},"Something went wrong");
}
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.getCurrency = async (req,res,next)=>{
    const result = await Misc.getCurrency();
    result.success?res.Ok(result.data):res.BadRequest({},"Something went wrong");
}
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.deleteCurrency = async (req,res,next)=>{
    const id = req.query.id;
    const result = await Misc.deleteCurrency(id);
    result.success?res.Ok(result.data,"Currency deleted successfully."):res.BadRequest({},"Something went wrong");
}

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.addExchangeRate = async (req,res,next)=>{
    const {from,to,fromValue,toValue} = req.body;
    const result = await Misc.addExchangeRate(from,to,fromValue,toValue);
    result.success?res.Ok(result.data,"Exchange rate added successfully."):res.BadRequest({},"Something went wrong");
}
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.updateExchangeRate = async (req,res,next)=>{
    const {id,from,to,fromValue,toValue} = req.body;
    const result = await Misc.updateExchangeRate(id,from,to,fromValue,toValue);
    result.success?res.Ok(result.data,"Exchange rate updated successfully."):res.BadRequest({},"Something went wrong");
}
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.getExchangeRate = async (req,res,next)=>{
    const result = await Misc.getExchangeRate();
    result.success?res.Ok(result.data):res.BadRequest({},"Something went wrong");
}
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
miscController.deleteExchangeRate = async (req,res,next)=>{
    const id = req.query.id;
    const result = await Misc.deleteExchangeRate(id);
    result.success?res.Ok(result.data,"Exchange rate deleted successfully."):res.BadRequest({},"Something went wrong");
}






module.exports = miscController;

