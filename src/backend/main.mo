import List "mo:core/List";
import Order "mo:core/Order";
import Time "mo:core/Time";
import Int "mo:core/Int";

actor {
  type Reservation = {
    name : Text;
    phone : Text;
    date : Text;
    time : Text;
    guests : Nat;
    specialRequests : Text;
    timestamp : Time.Time;
  };

  type Message = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Reservation {
    public func compare(res1 : Reservation, res2 : Reservation) : Order.Order {
      Int.compare(res1.timestamp, res2.timestamp);
    };
  };

  module Message {
    public func compare(msg1 : Message, msg2 : Message) : Order.Order {
      Int.compare(msg1.timestamp, msg2.timestamp);
    };
  };

  let reservations = List.empty<Reservation>();
  let messages = List.empty<Message>();

  public shared ({ caller }) func makeReservation(name : Text, phone : Text, date : Text, time : Text, guests : Nat, specialRequests : Text) : async () {
    let reservation : Reservation = {
      name;
      phone;
      date;
      time;
      guests;
      specialRequests;
      timestamp = Time.now();
    };
    reservations.add(reservation);
  };

  public shared ({ caller }) func sendMessage(name : Text, email : Text, phone : Text, message : Text) : async () {
    let contactMessage : Message = {
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };
    messages.add(contactMessage);
  };

  public query ({ caller }) func getAllReservations() : async [Reservation] {
    reservations.toArray().sort();
  };

  public query ({ caller }) func getAllMessages() : async [Message] {
    messages.toArray().sort();
  };
};
