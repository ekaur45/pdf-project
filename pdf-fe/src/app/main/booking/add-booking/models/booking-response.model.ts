export interface Offer {
    id: number;
    bookingNo: string;
    roomType: string;
    nights: number;
    hotel: string;
    hotelId: number;
    hotelPrice: number;
    destinationTo: string;
    destinationFrom: string;
    destinationName: string;
    destinationId: number;
    isDeleted: boolean;
    flightTo: string;
    flightPrice: number;
    flightFrom: string;
    flightDateFrom: string;
    flightDateTo: string;
    bookingid: number;

}

export interface Booking {
    id: number;
    agentName: string;
    agentId:number;
    staffId:number;
    date: string;
    orderNo: string;
    passengers: number;
    nights: number;
    departure: string;
    arrival: string;
    customerName: string;
    isDeleted: boolean;
    staffName: string;
    guestType: string;
    transportationPrice: number;
    price:number;
    discount:number;
    extraCharges:number;
    totalPrice:number;
    offers: Offer[];
    features:any[];
    terms:any[];
}