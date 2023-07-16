const { mysqlSelect, mysqlExecute } = require("../../utils/database.util");

const Misc = {};
Misc.updateHotel = async data => {
    const result =  await mysqlExecute('update hotel set `name`=?,location=?,price=? where id=?', [data.name, data.destination,Number(data.price), data.id], false);
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





Misc.addToc = async obj => {
    return await mysqlExecute('insert into termsandcondition(termsAndCondition) values(?)', [obj.display]);
}
Misc.editToc = async obj => {
    return await mysqlExecute('update termsandcondition set termsAndCondition =? where id =?', [obj.display, obj.id]);
}
Misc.deleteToc = async obj => {
    return await mysqlExecute('delete from termsandcondition where id = ?', [obj]);
}
Misc.getToc = async obj => {
    return await mysqlExecute('select id,termsAndCondition as display from  termsandcondition;', []);
}
Misc.getDashboardData = async obj => {
    var otherDataResult = await mysqlExecute("select (select count(*)  from users where userType = 2) as newUsers, (select count(*)  from users where userType = 3) as totalAgents, (select count(*)  from users where userType = 4) as totalStaff, (select sum(totalPrice) from booking where `status` !='Rejected') as totalPrice",[],false);
    var usersResult = await mysqlExecute('select *,(select usetypes.name from usetypes where id = users.userType) userTypeText  from users order by id desc limit 5;', []);
    var bookingResult = await mysqlExecute('select *,(select users.photo from users where users.id = booking.agentName) agentPhoto,(select concat(users.firstName,\' \',users.lastName) from users where users.id = booking.agentName) agentFullName,(select concat(users.id) from users where users.id = booking.agentName) agentId, (select concat(users.firstName,\' \',users.lastName) from users where users.id = booking.staffName) staffFulName,(select concat(users.id) from users where users.id = booking.staffName) staffId from booking where ifnull(isDeleted,0)=0 order by booking.id desc limit 5;', []);
    return {
        success:true,
        data:{
            users:usersResult.data,
            bookings:bookingResult.data,
            main:otherDataResult.data[0]
        }
    }
}



Misc.getAgents = async () => {
    var query = "select * from users where userType='3'";
    return await mysqlSelect(query, [], false);
}
Misc.getStaff = async () => {
    var query = "select * from users where userType='4'";
    return await mysqlSelect(query, [], false);
}


Misc.getStats = async (startDate,lastDate) =>{
    let query = 'call get_stats(?)';
    const result = await mysqlExecute(query,[[new Date(startDate),new Date(lastDate)]]);
    let d = [];
    if(Array.isArray(result.data)){
        for (let i = 0; i < result.data.length; i++) {
            const el = result.data[i];
            if(Array.isArray(el)){
                d.push(el)
            }
        }
    }
    result.data = {monthly:d.slice(0,3),yearly:d.slice(3,6)};
    return result;
}


module.exports = Misc;