import { bookingServer } from "./Booking.Service";

const bookingGetController = async (req: any, res:any) => {
    try{
        let result = await bookingServer.bookingGetService();
        res.json(result);
    }catch(error){
        res.status(500).json({error: "Error in booking get controller", details: error});
    }
};


const bookingCreateController = async (req: any, res:any) => {
   try{
    let result = await bookingServer.bookingCreateService(req.body);
    res.json(result);
   }catch(error){
    res.status(500).json({error: "Error in booking create controller", details: error});
   }
}
const bookingDeleteController = async (req: any, res:any) => {
  try{
   let result= await bookingServer.bookingDeleteService(req.params.id);
    res.json(result);
  }catch(error){
    res.status(500).json({error: "Error in booking delete controller", details: error});
  }
}   

export const bookingController = { bookingGetController, bookingCreateController, bookingDeleteController };