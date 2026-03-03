import { availabilityServer } from "./Availability.Service";

const avilabilityGetController = async (req: any, res:any) => {
    try{
        let result = await availabilityServer.availabilityGetService();
        res.json(result);
    }catch(error){
        res.status(500).json({error: "Error in availability get controller", details: error});
    }
};


const avilabilityCreateController = async (req: any, res:any) => {
   try{
    let result = await availabilityServer.availabilityCreateService(req.body);
    res.json(result);
   }catch(error){
    res.status(500).json({error: "Error in availability create controller", details: error});
   }
}
const avilabilityDeleteController = async (req: any, res:any) => {
  try{
   let result= await availabilityServer.availabilityDeleteService(req.params.id);
    res.json(result);
  }catch(error){
    res.status(500).json({error: "Error in availability delete controller", details: error});
  }
}   

export const availabilityController = { avilabilityGetController, avilabilityCreateController, avilabilityDeleteController };