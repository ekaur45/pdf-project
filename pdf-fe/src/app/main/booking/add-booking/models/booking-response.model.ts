export interface Offer {
    id: number;
    bookingNo: string;
    roomType: string;
    nights: number;
    hotel: string;
    destinationTo: Date;
    destinationFrom: Date;
    destinationName: string;
    isDeleted: boolean;
    flightTo: string;
    flightFrom: string;
    flightDateFrom: Date;
    flightDateTo: Date;
    bookingid: number;
}

export interface Booking {
    id: number;
    agentName: string;
    date: Date;
    orderNo: string;
    passengers: number;
    nights: number;
    departure: Date;
    arrival: Date;
    customerName: string;
    isDeleted: boolean;
    staffName: string;
    offers: Offer[];
}