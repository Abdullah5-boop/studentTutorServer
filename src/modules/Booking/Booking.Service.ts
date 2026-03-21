import { Booking } from "../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma";

const bookingGetService = async () => {
  const booking = await prisma.booking.findMany();
  return booking;
};

const bookingCreateService = async (data: {
  tutorId: string;
  slotId: string;
  studentId: string;
  status: "CONFIRMED";
}) => {
  console.log("service",data)
  const booking = await prisma.booking.create({
    data: data,
  });
  return booking;
};

const bookingDeleteService = async (id: string) => {
  await prisma.booking.delete({
    where: {
      id: id,
    },
  });
};


const GetAStudentBookedCoursesService= async(id:string)=>{
  let result = await prisma.booking.findMany({where:{studentId:id},
  include:{
    slot:true
  }
  })
  return result
}
export const bookingServer = {
  bookingGetService,
  bookingCreateService,
  bookingDeleteService, GetAStudentBookedCoursesService
};
