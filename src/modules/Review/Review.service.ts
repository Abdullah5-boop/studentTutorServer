import { prisma } from "../../../lib/prisma";

const getAllReviewOnePostService = async ({ slotId }: { slotId: string }) => {
  console.log("getAllReviewOnePostService slotId : ", slotId);
  let result = await prisma.review.findMany({
    where: { slotId: slotId },
  });
  return result;
};

const postOneReviewServive=async(data:{studentId:string,tutorId:string,rating:number,comment:string,slotId:string})=>{
  let result =await prisma.review.create({data:data})
  console.log(result)
  return result
   
}
export const reviewService = {
  getAllReviewOnePostService,
   postOneReviewServive
};
