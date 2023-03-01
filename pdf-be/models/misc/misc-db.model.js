const { mysqlSelect } = require("../../utils/database.util");

const Misc = {};

Misc.getHotels = async ()=>{
    return await mysqlSelect('call sp_get_hotels();')
}
Misc.getRoomTypes = async ()=>{
    return await mysqlSelect('call sp_get_roomtypes();')
}
module.exports = Misc;