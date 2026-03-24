import { AvailabilitySlot } from "../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma";

const availabilityGetService = async () => {
  const availability = await prisma.availabilitySlot.findMany({
    include:{tutor:true}
  });
  console.log(availability)
  return availability;
};

const availabilityCreateService = async (data: AvailabilitySlot) => {
  const availability = await prisma.availabilitySlot.create({
    data: data,
  });
  return availability;
};
const availabilityDeleteService = async (id: string) => {
  await prisma.availabilitySlot.delete({
    where: {
      id: id,
    },

  });
};

const getOneAvailability = async (id: string) => {
  let Result = await prisma.availabilitySlot.findMany({
    where: { id: id },
  });
  return Result;
};


const getAllCatService= async()=>{
  let result = await prisma.availabilitySlot.findMany({
        select:{subject:true}
    })
    console.log(result)
    return result
}



export const availabilityServer = {
  availabilityGetService,
  availabilityCreateService,
  availabilityDeleteService, getOneAvailability,getAllCatService
};
