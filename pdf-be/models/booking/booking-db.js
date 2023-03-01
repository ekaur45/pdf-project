const { mysqlSelect, mysqlExecute } = require("../../utils/database.util");
const { AddBookingModel } = require("./add-booking.model");

const Booking ={};
/**
 * 
 * @param {AddBookingModel} data 
 */
Booking.add = async (data)=>{
    
    const result = await mysqlSelect('call sp_create_booking(?);',[data.bookingParams]);
    if(result.success===true){
        var id = result.data[0].id;

        var params = data.listParams.map((e,i)=>{
                let cc = [id];
                e.forEach(xx=>{
                    cc.push(...xx)
                })
                return [cc];
        });
        var result1 = await mysqlExecute('INSERT INTO `bookingoffers`'+
        '(`bookingid`,`bookingNo`,`roomType`,`nights`,`hotel`,`destinationTo`,`destinationFrom`,`destinationName`,`flightTo`,`flightFrom`,`flightDateFrom`,`flightDateTo`) values ? ;',[...params],false);
        return {
            success: result1.success&&result.success
        }
    }
    return {
        success:false
    }
}/**
 * 
 * @param {*} id 
 * @returns {{success:Boolean,data:object,fields:object}}
 */
Booking.getById = async (id)=>{
    var result = await mysqlSelect('call get_booking_by(?)',[id]);
    if(result.success == true){
        for (let i = 0; i < result.data.length; i++) {
            const el = result.data[i];
            var offersResult = await mysqlSelect('call get_booking_by_id(?);',[el.id]);
            el.offers = offersResult.data;            
        }
        return {
            success:true,
            data:result.data
        }
    }
    return {
        success:false,
        data:[]
    }
}
Booking.get = async ()=>{
    var result = await mysqlSelect('call get_booking()',[]);
    if(result.success == true){
        for (let i = 0; i < result.data.length; i++) {
            const el = result.data[i];
            var offersResult = await mysqlSelect('call get_booking_by_id(?);',[el.id]);
            el.offers = offersResult.data;            
        }
        return {
            success:true,
            data:result.data
        }
    }
    return {
        success:false,
        data:[]
    }
}
module.exports ={ Booking };