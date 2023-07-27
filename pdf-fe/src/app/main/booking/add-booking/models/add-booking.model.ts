export class AddBooking{
    agentName:string="";
    staffName:string="";
    date:string="";
    orderNo:string="";
    passengers:number=0;
    nights:number=0;
    departure:string="";
    arrival:string="";
    customerName:string="";
    price:number=0;
    discount:number=0;
    extraCharges:number=0;
    totalPrice:number=0;
    transportationPrice:number=0;
    currency:string="usd";
    guestType:string="";
    features:string[]=[];
    schedule:ScheduleModel[]=[];
    destination:BookingDestination=new BookingDestination();
    flight:BookingFlight=new BookingFlight();
    hotel:BookingHotel = new BookingHotel();
    
}
export class BookingDestination{
    destination:string="";
    dateTo:string="";
    dateFrom:string="";
}
export class BookingFlight{
    to:string="";
    from:string="";
    dateTo:string="";
    dateFrom:string="";
    price:number=0;
    priceCurrency:string = "";
}
export class BookingHotel{
    bookingNo:string="";
    hotel:string="";
    nights:number=0;
    roomType:string="";
    price:number=0;
}

export class ScheduleModel{
    day:string="";
    schedule:string="";
    dateTime!:Date;
    time!:string;
}