const { mysqlSelect, mysqlExecute } = require("../../utils/database.util");

const Misc = {};
Misc.updateHotel = async data=>{
    return await mysqlExecute('update hotel set `name`=? where id=?',[data.name,data.id],false);
}
Misc.deleteHotel = async id=>{
    return await mysqlExecute('delete from hotel where id=?',[id],false);
}
Misc.updateRoomType = async data=>{
    return await mysqlExecute('update roomTypes set `display`=? where id=?',[data.name,data.id],false);
}
Misc.deleteRoomType = async id=>{
    return await mysqlExecute('delete from roomTypes where id=?',[id],false);
}
Misc.updateDestination = async data=>{
    return await mysqlExecute('update destinations set `display`=? where id=?',[data.name,data.id],false);
}
Misc.deleteDestination = async id=>{
    return await mysqlExecute('delete from destinations where id=?',[id],false);
}
Misc.getHotels = async ()=>{
    return await mysqlSelect('call sp_get_hotels();')
}
Misc.getRoomTypes = async ()=>{
    return await mysqlSelect('call sp_get_roomtypes();')
}
module.exports = Misc;