import { Router, Request, Response } from "express";
import {
  filterByHobby,
  exists,
  countHobby,
  isFree,
  suggest,
  create,
} from "./user.controller";

const userRoutes = Router();

// DECLARE ENDPOINT FUNCTIONS
function GetByHobby(request: Request, response: Response) {
  const { hobby } = request.params;

  const error_details = [];

  if (!hobby) {
    error_details.push("Se requiere un hobby.");
  }

  if (error_details.length > 0) {
    return response.status(400).json({ details: error_details });
  }

  const users = filterByHobby(hobby);

  return response.json({ usuarios: users });
}

// DECLARE ENDPOINTS
userRoutes.get("/hobby/:hobby", GetByHobby);

// EXPORT ROUTES
export default userRoutes;
