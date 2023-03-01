export class AddBooking{
    agentName:string="asdfdas";
    staffName:string="sadf";
    date:string="asdf";
    orderNo:string="sadf";
    passengers:number=2;
    nights:number=3;
    departure:string="asdf";
    arrival:string="adsf";
    customerName:string="sadf";
    destination:BookingDestination=new BookingDestination();
    flight:BookingFlight=new BookingFlight();
    hotel:BookingHotel = new BookingHotel();
}
export class BookingDestination{
    destination:string="asdf";
    dateTo:string="dsaf";
    dateFrom:string="asdf";
}
export class BookingFlight{
    to:string="asdf";
    from:string="asdf";
    dateTo:string="asdf";
    dateFrom:string="asdf";
}
export class BookingHotel{
    bookingNo:string="wersadf";
    hotel:string="abas";
    nights:number=3;
    roomType:string="asdf";
}