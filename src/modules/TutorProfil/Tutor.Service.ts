import { error } from "node:console";
import { TutorProfile } from "../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma";
import { auth as betterAuthApi } from "@/../../lib/auth"
const tutorProfileGetService = async (TPID: string) => {
    let result = prisma.tutorProfile.findFirst({
        where: {
            id: TPID,
        },
    });
    return result;
};

const tutorProfileCreateService = async (data: TutorProfile) => {
    console.log("line ---- ", data);
    let result = await prisma.tutorProfile.create({
        data: data,
    });
    return result;
};

const tutorProfileUpdateService = async (
    id: string,
    data: Partial<TutorProfile>,
) => {
    let result = await prisma.tutorProfile.update({
        where: {
            id: id,
        },
        data: data,
    });
    return result;
};

const tutorAvailabilityService = async (data: any) => {
    let { header } = data

    const session = await betterAuthApi.api.getSession({
        headers: header as any,
    });
    console.log("start here...")


    let User_id = session?.session.id ? session?.user.id : ""
    let tutor_id = ""
    let tutor = await prisma.tutorProfile.findMany({ where: { userId: User_id } })
    if (tutor.length > 1) {
        throw new Error("Tutor has multiple account. Talk with admin.");
    }
    else {
        tutor_id = tutor[0]?.id ? tutor[0]?.id : "none"
    }


    console.log("#".repeat(50))
    console.log(tutor, User_id)
    console.log("#".repeat(50))
    let newData = {
        tutorId: tutor_id,
        startTime: new Date(data.from),
        endTime: new Date(data.to),
        subject: data.subject,
        tag: data.tags,
    };
    console.log("_".repeat(50), "\n session : ", session, "\n data: ", newData, "\n", "_".repeat(50))



    let result = await prisma.availabilitySlot.create({
        data: newData,
    });
    console.log(result);
    return result;
};


const tutorProfileExistService = async (id: string) => {

    let result = await prisma.tutorProfile.findFirstOrThrow({ where: { userId: id } })
    console.log("_".repeat(50), "\n id:", id, "\n", result)
    return result
}



export const tutorProfileService = {
    tutorProfileGetService,
    tutorProfileCreateService,
    tutorProfileUpdateService,
    tutorAvailabilityService, tutorProfileExistService
};
