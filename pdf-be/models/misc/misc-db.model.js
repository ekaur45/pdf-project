const { mysqlSelect, mysqlExecute } = require("../../utils/database.util");

const Misc = {};
Misc.updateHotel = async data => {
    const result = await mysqlExecute('update hotel set `name`=?,location=? where id=?', [data.name, data.destination, data.id], false);
    if (result.success == true) {
        if (data.roomTypes&&data.roomTypes.length>0) {
            await mysqlExecute('delete from booking_rooms_types where bookingId = ?', [data.id]);
            let roomTypesParams = data.roomTypes.map(x => [data.id, x]);
            let q = 'INSERT INTO `booking_rooms_types`(`bookingId`,`roomTypeId`) VALUES ?';
            let finalResullt = await mysqlExecute(q, [roomTypesParams], false);
            return finalResullt;
        } else {
            return result;
        }
    }
    return { success: false, data: null };
}
Misc.deleteHotel = async id => {
    return await mysqlExecute('delete from hotel where id=?', [id], false);
}
Misc.updateRoomType = async data => {
    return await mysqlExecute('update roomtypes set `display`=?,description=? where id=?', [data.name,data.description, data.id], false);
}
Misc.deleteRoomType = async id => {
    return await mysqlExecute('delete from roomtypes where id=?', [id], false);
}
Misc.updateDestination = async data => {
    return await mysqlExecute('update destinations set `display`=? where id=?', [data.name, data.id], false);
}
Misc.deleteDestination = async id => {
    return await mysqlExecute('delete from destinations where id=?', [id], false);
}
Misc.getHotels = async (id) => {
    return await mysqlSelect('call sp_get_hotels(?);', [id])
}
Misc.getRoomTypes = async (id) => {
    return await mysqlSelect('call sp_get_roomtypes(?);', [id])
}

Misc.addFeature = async obj => {
    return await mysqlExecute('insert into features(display) values(?)', [obj.display]);
}
Misc.editFeature = async obj => {
    return await mysqlExecute('update features set display =? where id =?', [obj.display, obj.id]);
}
Misc.deleteFeature = async obj => {
    return await mysqlExecute('delete from features where id = ?', [obj]);
}
Misc.getFeature = async obj => {
    return await mysqlExecute('select * from  features;', []);
}



Misc.getAgents = async () => {
    var query = "select * from users where userType='3'";
    return await mysqlSelect(query, [], false);
}
Misc.getStaff = async () => {
    var query = "select * from users where userType='4'";
    return await mysqlSelect(query, [], false);
}
module.exports = Misc;