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
Misc.getHotels = async (id)=>{
    return await mysqlSelect('call sp_get_hotels(?);',[id])
}
Misc.getRoomTypes = async ()=>{
    return await mysqlSelect('call sp_get_roomtypes();')
}

Misc.addFeature = async obj=>{
    return await mysqlExecute('insert into features(display) values(?)',[obj.display]);
}
Misc.editFeature = async obj=>{
    return await mysqlExecute('update features set display =? where id =?',[obj.display,obj.id]);
}
Misc.deleteFeature = async obj=>{
    return await mysqlExecute('delete from features where id = ?',[obj]);
}
Misc.getFeature = async obj=>{
    return await mysqlExecute('select * from  features;',[]);
}



Misc.getAgents = async ()=>{
    var query = "select * from users where userType='3'";
    return await mysqlSelect(query,[],false);
}
Misc.getStaff = async ()=>{
    var query = "select * from users where userType='4'";
    return await mysqlSelect(query,[],false);
}
module.exports = Misc;