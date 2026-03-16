import express, { NextFunction } from "express";
import { Response, Request } from "express";
import { auth as betterAuthApi } from "./auth";
import { prisma } from "./prisma";
import { tutorProfileController } from "../src/modules/TutorProfil/Tutor.Controller";
export enum userRole {
  USER = "USER",
  ADMIN = "ADMIN",
}
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        role: string;
        emailVarified: boolean;
      };
    }
  }
}

const validation = (...roles: string[]) => {
  // 1. The outer function just receives the roles
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // 2. The logic (and the try-catch) belongs inside here
      console.log("middleware:", roles);

      const header = req.headers;
     
      //  console.log("Raw Cookie Header:", req.headers.cookie)
      const session = await betterAuthApi.api.getSession({
        headers: header as any,
      });

      const userRole = session?.user?.role;
      const userId= session?.user.id ?session?.user.id:""
   

      if (!session) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      if (!roles.includes(userRole as string)) {
        return res.status(403).json({ message: "Forbidden" });
      }

      if(userRole=="TUTOR")
      {
        // try{
        //   let result = await fetch("http://localhost:5000/v1/tutorPofileExist",{
        //     method:"GET",
        //     body: JSON.stringify({id:userId})

        //   })
        //   console.log("_".repeat(50))
        //   console.log(result)
        //   console.log("_".repeat(50))
        // } catch(error){console.log(error)}

        try{
          let result = await tutorProfileController.tutorProfileExistController(userId)
          if(!result.status)
          {
            console.log("tutor profile does not exist ... ")
            let result = await tutorProfileController.tutorProfileCreateController({
              userId: userId,
              bio: "demo",
              hourlyRate: 0
            })
            if(result.status){
              console.log("tutor profile successfully created ..")
            }
          }
          else{
            console.log("tutor profile exist ... ",result)
            
          }

        } catch(error)
        {
          console.log(error)
        }
      }


      if (session.user?.UserStatus == false) return res.status(403).json({ message: "this use is ban " });
      // res.send(session);
      next();
    } catch (error) {
      // 3. Now 'res' is in scope!
      console.error("Validation Error:", error);
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  };
};

export const middlewares = { validation };
