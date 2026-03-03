import {  Booking } from "../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma";

const bookingGetService = async () => {
    const booking = await prisma.booking.findMany();
    return booking;
}

const bookingCreateService = async (data: Booking) => {
    const booking = await prisma.booking.create({
        data: data
    });
    return booking;
}
const bookingDeleteService = async (id: string) => {
    await prisma.booking.delete({
        where: {
            id: id
        }
    });
}

export const bookingServer={
    bookingGetService,
    bookingCreateService,
    bookingDeleteService
}