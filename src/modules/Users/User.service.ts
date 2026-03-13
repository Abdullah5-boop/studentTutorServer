import { prisma } from "../../../lib/prisma";

const getAlluserService=async()=>{
    const result = await prisma.user.findMany()
    return result
}

const banAndUnbanUserService=async({id,status}:{id:string,status:boolean})=>{
    console.log("service -> ",id,status)
    let result= await prisma.user.update({
        where:{id:id},
        data:{UserStatus:status}
    })

    console.log(result)
    return result
}
export const userService={banAndUnbanUserService,getAlluserService}