
const { mysqlExecute, mysqlSelect } = require("../../utils/database.util");
const { UserModel } = require("./user.model");


const User = {};
/**
 * 
 * @param {UserModel} model 
 */
User.Add  = async (model)=>{
    var result = await mysqlExecute('call sp_add_user(?)',[model.params]);
    return result;
}
User.List = async ()=>{
    return await mysqlSelect('call sp_get_users();');
}
module.exports = User;