const { EditUserModel } = require("../models/user/edit-user.model");
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
    model.files = req.files;
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
userController.Edit = async (req,res,next)=>{
    var model = new EditUserModel(req.body);
    if(!model.validate()) return res.BadRequest({},"Fill all required fields.");
    var result = await User.Edit(model);
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

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
userController.delete = async (req,res,next)=>{    
    var result = await User.delete(req.query.id);
    result.success?res.Ok({},"User deleted successfuly."):res.BadRequest({},"Something went wrong.");

}
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
userController.ResetPassword = async (req,res,next)=>{    
    var result = await User.ResetPassword(req.body);
    result.success?res.Ok({},"Password updated successfuly."):res.BadRequest({},"Something went wrong.");

}

module.exports = userController;