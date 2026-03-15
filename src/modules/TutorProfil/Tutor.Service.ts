import { TutorProfile } from "../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma";










const tutorProfileGetService = async (TPID: string) => {
    let result = prisma.tutorProfile.findFirst({
        where: {
            id: TPID
        }
    });
    return result;
};





const tutorProfileCreateService = async (data: TutorProfile) => {
    console.log('line ---- ', data)
    let result = await prisma.tutorProfile.create({
        data: data
    });
    return result;
}


const tutorProfileUpdateService = async (id: string, data: Partial<TutorProfile>) => {
    let result = await prisma.tutorProfile.update({
        where: {
            id: id
        },
        data: data
    });
    return result;
}

const tutorAvailabilityService = async (data: any) => {
    console.log("tutor service -> ", data)
    let newData = {
        tutorId: '1',
        startTime: new Date(data.from),
        endTime: new Date(data.to),
        subject: data.subject,
        tag: data.tags
    }
    let result = await prisma.availabilitySlot.create({
        data: newData

    })
    console.log(result)
    return result
}



export const tutorProfileService = {
    tutorProfileGetService,
    tutorProfileCreateService,
    tutorProfileUpdateService, tutorAvailabilityService
};