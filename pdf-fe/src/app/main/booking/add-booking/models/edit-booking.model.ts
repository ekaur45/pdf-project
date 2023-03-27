export class EditBooking{
    id:number = 0;
    agentName:string="";
    staffName:string="";

    date:string="";;
    orderNo:string="";
    passengers:number=0;
    nights:number=0;
    departure:string="";;
    arrival:string="";;
    customerName:string="";
    guestType:string="";
    currency:string = "usd";    
    price:number=0;
    discount:number=0;
    extraCharges:number=0;
    totalPrice:number=0;
    features:Feature[]=[];
    terms:TermmsAndConditions[]=[];
    destination:BookingDestination=new BookingDestination();
    flight:BookingFlight=new BookingFlight();
    hotel:BookingHotel = new BookingHotel();
}
export class Feature{
    id:number = 0;
    display:string = "";
}
export class BookingDestination{
    destination:string="";
    dateTo:string="";;
    dateFrom:string="";;
}
export class BookingFlight{
    to:string="";
    from:string="";
    dateTo:string="";;
    dateFrom:string="";;
}
export class BookingHotel{
    bookingNo:string="";
    hotel:string="";
    nights:number=0;
    roomType:string="";
}
export class TermmsAndConditions{
    id:number = 0; 
    termsAndCondition:string = "";
}