
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

User.delete = async id =>{
    return await mysqlExecute('delete from users where id = ?',[id],false);
}
module.exports = User;