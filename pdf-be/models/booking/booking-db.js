const fs = require("fs");
const moment = require("moment");
const handlerbars = require("handlebars");
const { mysqlSelect, mysqlExecute } = require("../../utils/database.util");
const { AddBookingModel } = require("./add-booking.model");
const path = require("path");
const mime = require("mime");
const { UpdateBookingModel } = require("./update-booking.model");
const Misc = require("../misc/misc-db.model");
const { uploadFile } = require("../../utils/file.util");
const Booking = {};
/**
 * 
 * @param {AddBookingModel} data    
 */
Booking.add = async (data) => {

    const result = await mysqlSelect('call sp_create_booking(?);', [data.bookingParams]);
    if (result.success === true) {
        var id = result.data[0].id;
        var params = data.listParams.map((e, i) => e.map((ee, ii) => [id, ...ee]));
        var result1 = await mysqlExecute('INSERT INTO `bookingoffers`' +
            '(`bookingid`,`bookingNo`,`roomType`,`nights`,`hotel`,`destinationTo`,`destinationFrom`,`destinationName`,`flightTo`,`flightFrom`,`flightDateFrom`,`flightDateTo`) values ? ;', [...params], false);
        let featuresParams = data.features.map(x => [id, x]);
        var result2 = await mysqlExecute('INSERT INTO `booking_features` (`booking_id`, `feature_id`) VALUES ?', [featuresParams], false);
        return {
            success: result1.success && result.success && result2.success
        }
    }
    return {
        success: false
    }
}
/**
 * 
 * @param {UpdateBookingModel} data    
 */
Booking.edit = async (data) => {

    const result = await mysqlSelect('call sp_update_booking(?);', [data.bookingParams]);
    if (result.success === true) {
        var id = data.booking.id;
        var params = data.listParams.map((e, i) => e.map((ee, ii) => [id, ...ee]));
        await mysqlExecute('DELETE FROM `bookingoffers` WHERE `bookingid`=?', [id]);
        var result1 = await mysqlExecute('INSERT INTO `bookingoffers`' +
            '(`bookingid`,`bookingNo`,`roomType`,`nights`,`hotel`,`destinationTo`,`destinationFrom`,`destinationName`,`flightTo`,`flightFrom`,`flightDateFrom`,`flightDateTo`) values ? ;', [...params], false);
        await mysqlExecute('delete from booking_features where booking_id = ?', [data.booking.id]);
        let featuresParams = data.features.map(x => [id, x]);
        var result2 = await mysqlExecute('INSERT INTO `booking_features` (`booking_id`, `feature_id`) VALUES ?', [featuresParams], false);
        return {
            success: result1.success && result.success
        }
    }
    return {
        success: false
    }
}
/**
 * 
 * @param {*} id 
 * @returns {{success:Boolean,data:object,fields:object}}
 */
Booking.getById = async (id) => {
    var result = await mysqlSelect('call get_booking_by(?)', [id]);
    if (result.success == true) {
        for (let i = 0; i < result.data.length; i++) {
            const el = result.data[i];
            // el.date = moment(el.date).format("MM/DD/YYYY");
            // el.arrival = moment(el.arrival).format("MM/DD/YYYY");
            // el.departure = moment(el.departure).format("MM/DD/YYYY");
            var offersResult = await mysqlSelect('call get_booking_by_id(?);', [el.id]);
            el.offers = offersResult.data;
            var termsResult = await mysqlSelect('select * from termsandcondition',[],false);
            el.terms = termsResult.data.map(x=>x.termsAndCondition);
            // el.offers.map((e, ii) => {
            //     e.destinationFrom = moment(e.destinationFrom).format("MM/DD/YYYY");
            //     e.destinationTo = moment(e.destinationTo).format("MM/DD/YYYY");
            //     e.flightDateFrom = moment(e.flightDateFrom).format("MM/DD/YYYY");
            //     e.flightDateTo = moment(e.flightDateTo).format("MM/DD/YYYY");
            // })
            var featureResult = await mysqlSelect('select * from features where id in (select feature_id from booking_features where booking_id = ?)', [el.id], false);
            if (featureResult.success == true)
                el.features = featureResult.data
        }
        return {
            success: true,
            data: result.data
        }
    }
    return {
        success: false,
        data: []
    }
}
Booking.get = async () => {
    var result = await mysqlSelect('call get_booking()', []);
    if (result.success == true) {
        for (let i = 0; i < result.data.length; i++) {
            const el = result.data[i];
            // el.date = moment(el.date).format("MM/DD/YYYY");
            // el.arrival = moment(el.arrival).format("MM/DD/YYYY");
            // el.departure = moment(el.departure).format("MM/DD/YYYY");
            var offersResult = await mysqlSelect('call get_booking_by_id(?);', [el.id]);
            el.offers = offersResult.data;
            var featureResult = await mysqlSelect('select * from features where id in (select feature_id from booking_features where booking_id = ?)', [el.id], false);
            if (featureResult.success == true)
                el.features = featureResult.data;

        }
        return {
            success: true,
            data: result.data
        }
    }
    return {
        success: false,
        data: []
    }
}
Booking.createPdf = async (html, name = "") => {
    var pdf = require('html-pdf');
    return new Promise((resolve, reject) => {
        var options = { format: 'Letter' };
        var fileName = new Date().getMilliseconds() + "_" + name + "_invoice.pdf";
        pdf.create(html, options).toFile('public/' + fileName, function (err, res) {
            if (err) reject(err);
            resolve(fileName); // { filename: '/app/businesscard.pdf' }
        });
    });
}
Booking.createPdf2 = async (html, name = "") => {
    var pdf = require('html-pdf');
    return new Promise((resolve, reject) => {
        var options = { format: 'Letter' };
        var fileName = new Date().getMilliseconds() + "_" + name + "_invoice2.pdf";
        pdf.create(html, options).toFile('public/' + fileName, function (err, res) {
            if (err) reject(err);
            resolve(fileName); // { filename: '/app/businesscard.pdf' }
        });
    });
}
Booking.print = async id => {
    var data = await Booking.getById(id);
    if (data.success) {
        const d = data.data[0];
        d.photo = fs.readFileSync(path.join("public", d.photo)).toString("base64");
        //const stats = fs.statSync(path.join("public", d.photo));
        //d.photo = `data:image/${d.photo}`;
        let contentType = mime.getType(path.join("public", d.photo));
        const imageBas64 =
            `data:image/${contentType};base64,${d.photo}`;
        d.photo = imageBas64;
        const source = fs.readFileSync("pdfTemplates/invoice_v2.html").toString("utf-8");
        const template = handlerbars.compile(source);
        const html = template({ d })
        var file = await Booking.createPdf(html, d.customerName);
        return { success: true, data: file };
    }
}
Booking.printWithoutPrice = async id => {
    var data = await Booking.getById(id);
    if (data.success) {
        const d = data.data[0];
        d.photo = fs.readFileSync(path.join("public", d.photo)).toString("base64");
        //const stats = fs.statSync(path.join("public", d.photo));
        //d.photo = `data:image/${d.photo}`;
        let contentType = mime.getType(path.join("public", d.photo));
        const imageBas64 =
            `data:image/${contentType};base64,${d.photo}`;
        d.photo = imageBas64;
        const source = fs.readFileSync("pdfTemplates/invoice_v2_withoutprice.html").toString("utf-8");
        const template = handlerbars.compile(source);
        const html = template({ d })
        var file = await Booking.createPdf2(html, d.customerName);
        return { success: true, data: file };
    }
}
Booking.delete = async id => {
    return await mysqlExecute('delete from booking where id=?', [id], false);
}

Booking.AddDestination = async (obj, file) => {
    var avatar = await uploadFile(file);
    return await mysqlExecute(`INSERT INTO destinations (display,file) VALUES('${obj.name}','${avatar.fileName}');`, [], false);
}
Booking.AddHotel = async (obj, file) => {
    var avatar = await uploadFile(file);
    var result = await mysqlExecute(`INSERT INTO hotel (name,location,file) VALUES('${obj.name}','${obj.destination}','${avatar.fileName}');`, [], false);
    var idResult = await mysqlSelect('SELECT last_insert_id() as id;', [], false);
    if (idResult.success == true) {
        if (obj.roomTypes && obj.roomTypes.length > 0) {
            let id = idResult.data[0].id;
            let roomTypesParams = obj.roomTypes.map(x => [id, x]);
            let q = 'INSERT INTO `booking_rooms_types`(`bookingId`,`roomTypeId`) VALUES ?';
            let finalResullt = await mysqlExecute(q, [roomTypesParams], false);
            return finalResullt;
        }
        return result;
    }
    return { success: false, data: null };
}
Booking.AddRoomType = async (obj, file) => {
    var avatar = await uploadFile(file);
    return await mysqlExecute(`INSERT INTO roomtypes (display,file) VALUES('${obj.name}','${avatar.fileName}');`, [], false);
}
Booking.GetDestination = async () => {
    return await mysqlSelect('SELECT * FROM `destinations`;', [], false);
}
Booking.GetHotels = async (id) => {
    var result = await mysqlSelect('SELECT * FROM `hotel`;', [], false);
    if (result.success) {
        let data = result.data;
        let ids = data.map(x => x.id);
        for (let i = 0; i < ids.length; i++) {
            const id = ids[i];
            const roomTypeResult = await mysqlSelect('SELECT * FROM `roomtypes` where id in (SELECT roomTypeId FROM booking_rooms_types where bookingId = ?);', [id], false);
            //const roomTypeResult = await Misc.getRoomTypes(id);
            if (roomTypeResult.success == true)
                data[i].roomTypes = roomTypeResult.data;

        }
    }
    return result;
}
Booking.GetRoomTypes = async (id) => {
    return await mysqlSelect('SELECT * FROM `roomtypes` ;', [id], false);
}


Booking.updateBokkingStatus = async (id, status) => {
    return await mysqlExecute('UPDATE `booking` set `status` = ? where id = ?', [status, id], false);
}

module.exports = { Booking };