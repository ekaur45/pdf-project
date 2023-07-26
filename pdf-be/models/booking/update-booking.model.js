class UpdateBookingModel {
    constructor(obj = {}) {
        this.booking = new BookingModel(obj.booking) ?? {};
        this.list = new BookingListModel(obj.list).list;
        this.features = obj.features ??[];
        this.tocs = obj.tocs ??[];
        this.transportation = obj.transportation ?? [];
        this.bookingParams = [
            this.booking.id,
            this.booking.agentName,
            this.booking.staffName,
            this.booking.date,
            this.booking.orderNo,
            this.booking.passengers,
            this.booking.nights,
            this.booking.departure,
            this.booking.arrival,
            this.booking.customerName,
            this.booking.price,
            this.booking.discount,
            this.booking.extraCharges,
            this.booking.totalPrice,
            this.booking.guestType,
            this.booking.transportationPrice
        ]
        this.listParams = [
            this.list.map((e,i)=>[
                e.hotel.bookingNo,
                e.hotel.roomType,
                e.hotel.nights,
                e.hotel.hotel,
                e.destination.dateTo,
                e.destination.dateFrom,
                e.destination.destination,
                e.flight.to,
                e.flight.from,
                e.flight.dateFrom,
                e.flight.dateTo,
                e.flight.price
            ])
        ]
    }

}

// this.destination = new BookingDestination(obj.destination ?? {});
// this.flight = new BookingFlight(obj.flight ?? {});
// this.hotel = new BookingHotel(obj.hotel ?? {});
class BookingModel {
    constructor(obj = {}) {
        this.id = obj.id ?? 0;
        this.agentName = obj.agentName ?? "";
        this.staffName = obj.staffName ?? "";
        this.date = obj.date ?? "";
        this.orderNo = obj.orderNo ?? "";
        this.passengers = obj.passengers ?? 0;
        this.nights = obj.nights ?? 0;
        this.departure = obj.departure ?? "";
        this.arrival = obj.arrival ?? "";
        this.customerName = obj.customerName ?? "";
        this.price=obj.price??0;
        this.discount=obj.discount??0;
        this.extraCharges=obj.extraCharges??0;
        this.totalPrice=obj.totalPrice??0;
        this.guestType=obj.guestType??0;
        this.transportationPrice = obj.transportationPrice ??0.0;
        this.features=obj.features??[];
        this.schedule = obj.schedule ?? [];
    }
}
class BookingListModel {
    constructor(obj = []) {
        /**
         * @type Array<OffersModel>
         */
        this.list =[];
        obj.forEach((e,i)=>{
            this.list.push(new OffersModel(e));
        })
    }
}
class OffersModel {
    constructor(obj = {}) {
        this.destination = new BookingDestination(obj.destination ?? {});
        this.flight = new BookingFlight(obj.flight ?? {});
        this.hotel = new BookingHotel(obj.hotel ?? {});
    }
}
class BookingDestination {
    constructor(obj = {}) {
        this.destination = obj.destination ?? "";
        this.dateTo = obj.dateTo ?? "";
        this.dateFrom = obj.dateFrom ?? "";
    }
}
class BookingFlight {
    constructor(obj = {}) {
        this.to = obj.to ?? "";
        this.from = obj.from ?? "";
        this.dateTo = obj.dateTo ?? "";
        this.dateFrom = obj.dateFrom ?? "";
        this.price = obj.price ?? 0.0;
    }
}
class BookingHotel {
    constructor(obj = {}) {
        this.bookingNo = obj.bookingNo ?? "";
        this.hotel = obj.hotel ?? "";
        this.nights = obj.nights ?? 0;
        this.roomType = obj.roomType ?? "";
    }
}
module.exports = { UpdateBookingModel };