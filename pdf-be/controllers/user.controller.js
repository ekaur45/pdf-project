const User = require("../models/user/user-db.model");
const { UserModel } = require("../models/user/user.model");

const userController = {};
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
userController.Add = async (req,res,next)=>{
    var model = new UserModel(req.body);
    if(!model.validate()) return res.BadRequest({},"Fill all required fields.");
    var result = await User.Add(model);
    result.success?res.Ok(result.data):res.BadRequest({},"Something went wrong.");

}
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
userController.List = async (req,res,next)=>{    
    var result = await User.List();
    result.success?res.Ok(result.data):res.BadRequest({},"Something went wrong.");

}

module.exports = userController;