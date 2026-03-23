import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Reservation {
    date: string;
    name: string;
    specialRequests: string;
    time: string;
    timestamp: Time;
    phone: string;
    guests: bigint;
}
export interface Message {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllMessages(): Promise<Array<Message>>;
    getAllReservations(): Promise<Array<Reservation>>;
    makeReservation(name: string, phone: string, date: string, time: string, guests: bigint, specialRequests: string): Promise<void>;
    sendMessage(name: string, email: string, phone: string, message: string): Promise<void>;
}
