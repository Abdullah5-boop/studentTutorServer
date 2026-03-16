import { TutorProfile } from "@/../../lib/TypeInterface";
import { tutorProfileService } from "./Tutor.Service";

const tutorProfileGetController = async (req: any, res: any) => {
  try {
    let result = await tutorProfileService.tutorProfileGetService(req.body);
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send({ message: "Tutor profile not found" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error in tutor profile controller", error });
  }
};

const tutorProfileCreateController = async (data:any) => {
  try {
    // Ensure 'id' is present; generate one if missing
   

    let result = await tutorProfileService.tutorProfileCreateService(data);
    return { message: "tutor profile has been created ", status: true, result };
    // console.log(result);

  } catch (error: any) {
    console.error(error);

    return {
      message: "tutor profile is not created", status: false,
      error: error.message,
      code: error.code,
      meta: error.meta,
    };
  }
};
// const tutorProfileCreateController = async (req: any, res: any) => {
//   try {
//     console.log(req.body);
//     let result = await tutorProfileService.tutorProfileCreateService(req.body);
//     console.log(result);
//     res.status(201).send(result);
//   } catch (error: any) {
//     console.error(error);

//     res.status(500).send({
//       message: "Error in tutor profile create controller",
//       error: error.message,
//       code: error.code,
//       meta: error.meta,
//     });
//   }
// };




const tutorProfileUpdateController = async (req: any, res: any) => {
  try {
    let result = await tutorProfileService.tutorProfileUpdateService(
      req.params.id,
      req.body,
    );
    res.status(200).send(result);
  } catch (error: any) {
    console.error(error);

    res.status(500).send({
      message: "Error in tutor profile update controller",
      error: error.message,
      code: error.code,
      meta: error.meta,
    });
  }
};

const tutorAvailabilitySlot = async (req: any, res: any) => {
  try {
    let { id } = req.params;
    let header = req.headers;
    console.log("start here controller...")
    console.log("availability : ", header, "id :", id)

    let result = await tutorProfileService.tutorAvailabilityService({
      ...req.body,
      header,
    });
    console.log("tutorAvailabilitySlot controller -> ", result);
    res.send({message:"create", result});
  } catch (error) {
    res.send({ message: "error from tutor controller", error });
  }
};

const tutorProfileExistController = async (id:string) => {
  try {
   
    let result = await tutorProfileService.tutorProfileExistService(id);
    return {status:true, result}

  } catch (error) {
    return {status:false, error}
  }
};
export const tutorProfileController = {
  tutorProfileGetController,
  tutorProfileCreateController,
  tutorProfileUpdateController,
  tutorAvailabilitySlot,
  tutorProfileExistController,
};
