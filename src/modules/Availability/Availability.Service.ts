import { AvailabilitySlot } from "../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma";

const availabilityGetService = async () => {
    const availability = await prisma.availabilitySlot.findMany();
    return availability;
}

const availabilityCreateService = async (data: AvailabilitySlot) => {
    const availability = await prisma.availabilitySlot.create({
        data: data
    });
    return availability;
}
const availabilityDeleteService = async (id: string) => {
    await prisma.availabilitySlot.delete({
        where: {
            id: id
        }
    });
}

export const availabilityServer={
    availabilityGetService,
    availabilityCreateService,
    availabilityDeleteService
}