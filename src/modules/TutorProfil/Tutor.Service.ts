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





const tutorProfileCreateService= async (data: TutorProfile) => {
    console.log('line ---- ',data)
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


export const tutorProfileService = {
  tutorProfileGetService,
  tutorProfileCreateService, 
  tutorProfileUpdateService
};