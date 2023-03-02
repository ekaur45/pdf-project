const fs = require("fs");
const moment = require("moment");
const handlerbars = require("handlebars");
const { mysqlSelect, mysqlExecute } = require("../../utils/database.util");
const { AddBookingModel } = require("./add-booking.model");

const Booking = {};
/**
 * 
 * @param {AddBookingModel} data 
 */
Booking.add = async (data) => {

    const result = await mysqlSelect('call sp_create_booking(?);', [data.bookingParams]);
    if (result.success === true) {
        var id = result.data[0].id;

        var params = data.listParams.map((e, i) => {
            let cc = [id];
            e.forEach(xx => {
                cc.push(...xx)
            })
            return [cc];
        });
        var result1 = await mysqlExecute('INSERT INTO `bookingoffers`' +
            '(`bookingid`,`bookingNo`,`roomType`,`nights`,`hotel`,`destinationTo`,`destinationFrom`,`destinationName`,`flightTo`,`flightFrom`,`flightDateFrom`,`flightDateTo`) values ? ;', [...params], false);
        return {
            success: result1.success && result.success
        }
    }
    return {
        success: false
    }
}/**
 * 
 * @param {*} id 
 * @returns {{success:Boolean,data:object,fields:object}}
 */
Booking.getById = async (id) => {
    var result = await mysqlSelect('call get_booking_by(?)', [id]);
    if (result.success == true) {
        for (let i = 0; i < result.data.length; i++) {
            const el = result.data[i];
            el.date = moment(el.date).format("MM/DD/YYYY");
            el.arrival = moment(el.arrival).format("MM/DD/YYYY");
            el.departure = moment(el.departure).format("MM/DD/YYYY");
            var offersResult = await mysqlSelect('call get_booking_by_id(?);', [el.id]);
            el.offers = offersResult.data;
            el.offers.map((e, ii) => {
                e.destinationFrom = moment(e.destinationFrom).format("MM/DD/YYYY");
                e.destinationTo = moment(e.destinationTo).format("MM/DD/YYYY");
                e.flightDateFrom = moment(e.flightDateFrom).format("MM/DD/YYYY");
                e.flightDateTo = moment(e.flightDateTo).format("MM/DD/YYYY");
            })
            el.features = [
                "Feature 1",
                "Feature 2",
                "Feature 3",
                "Feature 4",
                "Feature 5",
            ]
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
            el.date = moment(el.date).format("MM/DD/YYYY");
            el.arrival = moment(el.arrival).format("MM/DD/YYYY");
            el.departure = moment(el.departure).format("MM/DD/YYYY");
            var offersResult = await mysqlSelect('call get_booking_by_id(?);', [el.id]);
            el.offers = offersResult.data;
            el.features = [
                "Feature 1",
                "Feature 2",
                "Feature 3",
                "Feature 4",
                "Feature 5",
            ]
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
Booking.createPdf = async html => {
    var pdf = require('html-pdf');
    return new Promise((resolve, reject) => {
        var options = { format: 'Letter' };
        var fileName = new Date().getMilliseconds() + "invoice.pdf";
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

        const source = fs.readFileSync("pdfTemplates/invoice.html").toString("utf-8");
        const template = handlerbars.compile(source);
        const html = template({ d })
        var file = await Booking.createPdf(html);
        return { success: true, data: file };
    }
}



Booking.AddDestination = async (obj)=>{
    return await mysqlExecute(`INSERT INTO destinations (display) VALUES('${obj.name}');`,{},false);
}
Booking.AddHotel = async (obj)=>{
    return await mysqlExecute(`INSERT INTO hotel (name) VALUES('${obj.name}');`,{},false);
}
Booking.AddRoomType = async (obj)=>{
    return await mysqlExecute(`INSERT INTO roomtypes (display) VALUES('${obj.name}');`,{},false);
}
Booking.GetDestination = async ()=>{
    return await mysqlSelect('SELECT * FROM `destinations`;',{},false);
}
Booking.GetHotels = async ()=>{
    return await mysqlSelect('SELECT * FROM `hotel`;',{},false);
}
Booking.GetRoomTypes = async ()=>{
    return await mysqlSelect('SELECT * FROM `roomtypes`;',{},false);
}


module.exports = { Booking };