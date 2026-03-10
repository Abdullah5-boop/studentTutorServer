import { prisma } from "../../../lib/prisma"

const getAllCatService =()=>{
    const result= prisma.category.findMany()
    return result;
}



const postCatService= async({name, description}:{name:string, description: string})=>{
    const result = await prisma.category.create({
        data:{name, description}
    })
    return result
}

export const catService ={getAllCatService,postCatService}