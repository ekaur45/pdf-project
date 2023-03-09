
const { mysqlExecute, mysqlSelect } = require("../../utils/database.util");
const { uploadFile } = require("../../utils/file.util");
const { EditUserModel } = require("./edit-user.model");
const { UserModel } = require("./user.model");
const bcrypt = require("bcrypt");

const User = {};
/**
 * 
 * @param {UserModel} model 
 */
User.Add  = async (model)=>{
    var avatar = await uploadFile(model.files[0]);
    var result = await mysqlExecute('call sp_add_user(?)',[[...model.params,avatar.fileName]]);
    return result;
}
/**
 * 
 * @param {EditUserModel} model 
 */
User.Edit  = async (model)=>{
    var result = await mysqlExecute('UPDATE `users` SET `firstName` = ?, `lastName` = ?, `userName` = ?, `email` = ?,  `userType` = ? WHERE `id` = ?;',[
        model.firstName,
        model.lastName,
        model.username,
        model.email,
        model.userType,
        model.id
    ]);
    return result;
}
User.List = async ()=>{
    return await mysqlSelect('call sp_get_users();');
}

User.delete = async id =>{
    return await mysqlExecute('delete from users where id = ?',[id],false);
}
User.ResetPassword = async (data) =>{
    let passwod = bcrypt.hashSync(data.password,10);
    return await mysqlExecute('update users set `password`=? where id = ?',[passwod,data.id],false);
}
module.exports = User;