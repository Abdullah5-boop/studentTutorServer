import { Request, Response } from "express";
import { ProfileServices } from "./Profile.service";
const profileGetController = async (req:Request, res:Response) => {
    const {email} : {email:string}= req.body

    try {
        // Simulate fetching profile data from a database
        const result = await ProfileServices.ProfileGeOneService({email})
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch profile data" });
    }
}

const profileUpdateController= async (req:Request, res:Response) => {
     // Assuming the user ID is passed as a URL parameter
     let userId: string;
    if(!req.params.id || typeof req.params.id !== "string")
    {
        return res.status(400).json({ error: "Invalid user ID" });
    }
    else{
        userId=req.params.id
    }
  
    const payload = req.body; // The fields to update
    try{
        let result =  await ProfileServices.profileUpdateService(userId, payload)
        res.send(result);
    } catch(error){
        res.status(500).json({ error: "Failed to update profile data" });
    }
}
export const profileController={
    profileGetController,
    profileUpdateController
}