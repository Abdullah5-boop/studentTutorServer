import express, { NextFunction } from "express";
import { Response, Request } from "express";
import {auth as betterAuthApi} from'./auth'
export enum userRole{
    USER ="USER",
    ADMIN="ADMIN"
}
declare global{
    namespace Express{
        interface Request{
            user?:{
                id:string,
                email:string,
                role:string,
                emailVarified:boolean
            }
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
      const session = await betterAuthApi.api.getSession({
        headers: header as any,
      });
      
      const userRole = session?.user?.role;

      if (!session) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      if (!roles.includes(userRole as string)) {
        return res.status(403).json({ message: "Forbidden" });
      }

      next();
    } catch (error) {
      // 3. Now 'res' is in scope!
      console.error("Validation Error:", error);
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  };
};

export const middlewares={validation}