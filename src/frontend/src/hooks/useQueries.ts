import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useMakeReservation() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      date: string;
      time: string;
      guests: number;
      specialRequests: string;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      await actor.makeReservation(
        data.name,
        data.phone,
        data.date,
        data.time,
        BigInt(data.guests),
        data.specialRequests,
      );
    },
  });
}

export function useSendMessage() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      await actor.sendMessage(data.name, data.email, data.phone, data.message);
    },
  });
}
