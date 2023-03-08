export class EditBooking{
    id:number = 0;
    agentName:string="";
    staffName:string="";
    date:Date=new Date();
    orderNo:string="";
    passengers:number=0;
    nights:number=0;
    departure:Date=new Date();
    arrival:Date=new Date();
    customerName:string="";
    price:number=0;
    discount:number=0;
    extraCharges:number=0;
    totalPrice:number=0;
    features:string[]=[];
    destination:BookingDestination=new BookingDestination();
    flight:BookingFlight=new BookingFlight();
    hotel:BookingHotel = new BookingHotel();
}
export class BookingDestination{
    destination:string="";
    dateTo:Date=new Date();
    dateFrom:Date=new Date();
}
export class BookingFlight{
    to:string="";
    from:string="";
    dateTo:Date=new Date();
    dateFrom:Date=new Date();
}
export class BookingHotel{
    bookingNo:string="";
    hotel:string="";
    nights:number=0;
    roomType:string="";
}