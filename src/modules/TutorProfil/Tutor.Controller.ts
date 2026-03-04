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

const tutorProfileCreateController = async (req: any, res: any) => {
  try {
    console.log(req.body);
    let result = await tutorProfileService.tutorProfileCreateService(req.body);
    console.log(result)
    res.status(201).send(result);
  } catch (error: any) {
    console.error(error);

    res.status(500).send({
      message: "Error in tutor profile create controller",
      error: error.message,
      code: error.code,
      meta: error.meta,
    });
  }
};

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

export const tutorProfileController = {
  tutorProfileGetController,
  tutorProfileCreateController,
  tutorProfileUpdateController,
};
